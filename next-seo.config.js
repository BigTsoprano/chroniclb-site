// next-seo.config.js

const SEO = {
  defaultTitle: "Chroniclb | Premier Long Beach Dispensary",
    description: "Chroniclb is a leading dispensary in Long Beach offering a wide range of cannabis products to suit every customer's needs. Visit us today!",
    canonical: "https://ogchronic.com",
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://ogchronic.com',
      title: "Chronic Long Beach | Premier Long Beach Dispensary",
      description: "Chronic long beach is a leading dispensary in Southern california offering a wide range of cannabis products to suit every customer's needs. Visit us today!",
      images: [
        {
          url: 'https://ogchronic.com/path_to_your_image.jpg',
          alt: 'Chronic Long Beach Dispensary Image',
        }
      ],
      site_name: 'Chroniclb',
    },
    twitter: {
      handle: '@handle',  // You can fill this in with your Twitter handle if you have one
      site: '@site',      // and the site's Twitter handle if it exists
      cardType: 'summary_large_image',
    },
    additionalMetaTags: [
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        charSet: 'utf-8',
      }
    ],
  };
  export default SEO;
