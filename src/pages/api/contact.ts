import type { APIRoute } from "astro";
import { Resend } from "resend";

export const prerender = false;

const resend = new Resend(import.meta.env.RESEND_API_KEY);

type EmailPayload = {
  goal: string;
  email: string;
  name: string;
  company: string;
  country: string;
};

const sendEmail = async ({
  goal,
  email,
  name,
  company,
  country,
}: EmailPayload) => {
  const emailTo = import.meta.env.RESEND_TO_EMAIL;

  const sendResend = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: emailTo,
    subject: `Contacto de sitio web Orbita de parte de ${name}`,
    html: `
          <p>Hola, mi objetivo es ${goal}.</p>
          <p>Nombre: ${name}</p>
          <p>Empresa: ${company}</p>
          <p>Pais: ${country}</p>
          <p>Email: ${email}</p>
      `,
  });

  return sendResend;
};

export const POST: APIRoute = async ({ request }) => {
  if (request.headers.get("Content-Type") === "application/json") {
    const body = await request.json();
    const resendResponse = await sendEmail(body);

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
