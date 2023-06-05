"use client";

// Retrieve the list of blog posts from Contentful
import { useState, useEffect } from "react";

type Props = {};

function HomeBlog({}: Props) {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.contentful.com/spaces/9srekbk2xi6w/environments/master/entries?access_token=CFPAT-GBM9LPJWAuK0r_taVGPiW8tESLjVicEtD0zhiboTPTA"
        );
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  console.log(data.items);

  return <div>HomeBlog</div>;
}

export default HomeBlog;
