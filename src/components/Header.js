import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header>
        <div className="logo">
          <Link to="/">
            <h2>Home</h2>
          </Link>
        </div>

        <nav>
          <ul>
            <li>
              <button>
                <Link to="/">Home</Link>
              </button>
            </li>
            <li>
              <button>
                <Link to="/blog">Blog</Link>
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
