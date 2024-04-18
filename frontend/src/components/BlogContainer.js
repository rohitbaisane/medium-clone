import Blog from "./Blog";
import { useState, useEffect } from "react";

const BlogContainer = () => {

    const [blogData, setBlogData] = useState([]);


    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        const response = await fetch('http://localhost:3000/blog');
        const blogDataArray = await response.json();
        setBlogData(blogDataArray);
    }
    return (
        <div className="col-span-6 m-auto mt-8">
            {blogData.map((blogObj) => {
                if (blogObj.title && blogObj.description && blogObj.title.length > 5) {
                    console.log(blogObj);
                    return (<Blog title={blogObj.title} description={blogObj.description}></Blog>);
                }
            })
            };
        </div>
    );
}

export default BlogContainer;