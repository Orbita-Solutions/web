const GHApi = "https://api.github.com/repos/Orbita-Solutions/web/public/data";
const localURL = "http://localhost:4321/data";

const getContentApiURL = (fileName: string) => {
  const isDev = import.meta.env.DEV;
  const baseUrl = isDev ? localURL : GHApi;

  return `${baseUrl}/${fileName}.json`;
};

export { getContentApiURL };
