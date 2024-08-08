const GHApi =
  "https://api.github.com/repos/Orbita-Solutions/web/contents/public/data";
const localURL = "http://localhost:4321/data";

const getContentApiURL = (fileName: string) => {
  const isDev = import.meta.env.DEV;
  const baseUrl = isDev ? localURL : GHApi;

  return `${baseUrl}/${fileName}.json`;
};

const mapResponse = (data: any) => {
  const isDev = import.meta.env.DEV;

  // Github encondes / decodes the json in the content attribute as base64
  if (!isDev) {
    const decoded = atob((data as any).content);

    return JSON.parse(decoded);
  }

  return data;
};

const getData = async (filename: string) => {
  const apiUrl = getContentApiURL(filename);

  const res = await fetch(apiUrl);
  const data = await res.json();
  const decodedData = mapResponse(data);

  return decodedData;
};

export { getData };
