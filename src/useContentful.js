import { createClient } from "contentful";

const useContentful = () => {
  const client = createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
    accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
    host: "preview.contentful.com",
  });

  const getHomeView = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "home",
        select: "fields",
      });

      const sanitizedEntries = entries.items.map((item) => {
        return {
          ...item.fields,
        };
      });

      return sanitizedEntries;
    } catch (error) {
      console.log(error);
    }
  };

  return { getHomeView };
};

export default useContentful;
