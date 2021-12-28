import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import client from "../Client";

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"] {
        title,
        slug,
        body,
        mainImage {
          asset -> {
            _id,
            url
          },
          alt
        }
      }`
      )
      .then((data) => setPosts(data))
      .catch(console.error);
  }, []);

  return (
    <>
      <section>
        <h1>Blog page</h1>

        <div>
          {posts.map((post) => (
            <article key={post.slug.current}>
              <img src={post.mainImage.asset.url} alt={post.title} />
              <h4 className="text-xl mt-2">{post.title}</h4>
              <button className="mt-5 mb-10">
                <Link to={`/blog/${post.slug.current}`}>Read Full Article</Link>
              </button>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
