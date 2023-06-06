
// Retrieve the list of blog posts from Contentful
import { useState, useEffect } from "react";

const useGetBlogPostsPreview = (number: number | null) => {
    const [data, setData] = useState([]);
    const fetchData = async () => {
        try {
            const response = await fetch(`https://api.contentful.com/spaces/9srekbk2xi6w/environments/master/entries?content_type=blog&access_token=CFPAT-GBM9LPJWAuK0r_taVGPiW8tESLjVicEtD0zhiboTPTA&limit=${number ? number : 1}`);
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.log(error);
        }
    };


    useEffect(() => {

        fetchData();
    }, []);

    return data
};





export { useGetBlogPostsPreview };


