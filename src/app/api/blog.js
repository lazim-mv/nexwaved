import imageUrlBuilder from "@sanity/image-url";
const { client } = require('../../../sanity');

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

async function getData(client) {
  const query = `*[_type == 'blog'] | order(_createdAt desc) {
    title,
    "currentSlug": slug.current,
    date,
    location,
    description,
    titleImage,
  }`;
  const data = await client.fetch(query);
  return data;
}

async function fetchDataAndExport() {
  try {
    const data = await getData(client);

    // Now you can use urlFor function to generate image URLs
    const dataWithImageURLs = data.map(item => ({
      ...item,
      titleImage: item.titleImage ? urlFor(item.titleImage).url() : null,
    }));
    
    return dataWithImageURLs;
  } catch (error) {
    console.error('Error fetching data:', error.message);
    throw error; // Rethrow the error to handle it in the component
  }
}

export default fetchDataAndExport;
