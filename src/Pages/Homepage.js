import React from "react";

import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div>
      <section>
        <h1>Blog</h1>
        <button>
          <Link to="/blog">Read my blog posts</Link>
        </button>
      </section>
    </div>
  );
}
