import type { APIRoute } from "astro";
import { Resend } from "resend";

export const prerender = false;

type EmailPayload = {
  apiKey: string;
  company: string;
  country: string;
  email: string;
  goal: string;
  name: string;
  phone: string;
};

const sendEmail = async ({
  apiKey,
  company,
  country,
  email,
  goal,
  name,
  phone,
}: EmailPayload) => {
  const resend = new Resend(apiKey);
  const sendResend = await resend.emails.send({
    from: "noreply@orbitasolutions.co",
    to: "orbitasolutionssas@gmail.com",
    subject: `Contacto de sitio web Orbita de parte de ${name}`,
    html: `
          <p>Hola, mi objetivo es ${goal}.</p>
          <p>Nombre: ${name}</p>
          <p>Empresa: ${company}</p>
          <p>Pais: ${country}</p>
          <p>Email: ${email}</p>
          <p>Phone: ${phone}</p>
      `,
  });

  return sendResend;
};

export const POST: APIRoute = async ({ request, locals }) => {
  if (request.headers.get("Content-Type") === "application/json") {
    // This is how we get ENV Variables from Cloudflare or local env.
    const apiKey =
      locals.runtime.env.RESEND_API_KEY || import.meta.env.RESEND_API_KEY;
    const body = await request.json();
    const resendResponse = await sendEmail({ ...body, apiKey });

    if (resendResponse.data) {
      return new Response(
        JSON.stringify({
          message: `Message successfully sent!`,
        }),
        {
          status: 200,
          statusText: "OK",
        }
      );
    }

    console.error(resendResponse.error);
    return new Response(
      JSON.stringify({
        message: `Error al enviar el email: ${resendResponse.error?.message}`,
      }),
      {
        status: 500,
        statusText: `Internal Server Error: ${resendResponse.error}`,
      }
    );
  }

  // Invalid request
  return new Response(null, { status: 400 });
};
