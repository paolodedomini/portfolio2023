import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { createClient } from "contentful";

const client = createClient({
  space: "9srekbk2xi6w",
  accessToken: "gqT7CdI5Vu-gas5mCm0G2As5iJZ3OkTQyf6mJMa3r2k",
});

// Retrieve the list of blog posts from Contentful
const getBlogPosts = async () => {
  const response: any = await client.getEntries();

  return response;
};

async function getBlogPostAssets(id: string) {
  const response = await client
    .getAsset(id)
    .then((asset) => {
      return asset;
    })
    .catch((error) => {
      console.log(error);
    });
  return response;
}

async function getBlogDataPreview(number: number) {
  const response: any = await client.getEntries({
    limit: number || 1,
  });

  return response;
}

async function getDataSinglePost(id: string) {
  const res = await fetch(
    `https://api.contentful.com/spaces/9srekbk2xi6w/environments/master/entries?content_type=blog&sys.id=${id}&access_token=CFPAT-GBM9LPJWAuK0r_taVGPiW8tESLjVicEtD0zhiboTPTA`
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getDataSinglePostAssets(id: string) {
  const res = await fetch(
    `https://api.contentful.com/spaces/9srekbk2xi6w/environments/master/assets/${id}?access_token=CFPAT-GBM9LPJWAuK0r_taVGPiW8tESLjVicEtD0zhiboTPTA`
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    return "non chiappo i dati";
  }

  return res.json();
}

function richTextToHtml(document: any) {
  const d: {
    nodeType: any;
    data: any;
    content: any[];
  } = {
    nodeType: "document",
    data: {},
    content: document.fields.body.content,
  };

  const Bold = ({ children }: any) => <strong> {children} </strong>;

  const Text = ({ children }: any) => (
    <p className="align-center"> {children} </p>
  );

  const options = {
    renderMark: {
      [MARKS.BOLD]: (text: any) => <Bold>{text} </Bold>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: any, children: any) => (
        <Text>{children} </Text>
      ),
      [BLOCKS.UL_LIST]: (node: any, children: any) => (
        <ul className="blog-class">{children}</ul>
      ),
      [BLOCKS.LIST_ITEM]: (node: any, children: any) => <li>{children}</li>,
    },
    renderText: (text: any) => text.replace("!", "?"),
  };

  return documentToReactComponents(d, options);
}

export {
  getDataSinglePost,
  getBlogDataPreview,
  getDataSinglePostAssets,
  richTextToHtml,
  getBlogPosts,
  getBlogPostAssets,
};
