import React from "react";

import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import client from "../Client";
import BlockContent from "@sanity/block-content-to-react";

export default function SinglePost() {
  const [singlePost, setSinglePost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { slug } = useParams();

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == "${slug}"] {
        title,
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
      .then((data) => setSinglePost(data[0]));
    setIsLoading(false);
  }, [slug]);

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <section>
          <h1>{singlePost.title}</h1>
          {singlePost.mainImage && singlePost.mainImage.asset && (
            <img
              src={singlePost.mainImage.asset.url}
              alt={singlePost.title}
              title={singlePost.title}
              className="blog__image rounded-t"
            />
          )}
          <p>By Milan Sachani</p>

          <div className="block__content">
            <BlockContent
              blocks={singlePost.body}
              projectId=""
              dataset="production"
            />
          </div>

          <button>
            <Link to="/blog">Read more articles</Link>
          </button>
        </section>
      )}
    </>
  );
}
