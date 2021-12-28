import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div>
      <h1>Error 404 | Page Not Found</h1>
      <Link to="/">Back to homepage</Link>
    </div>
  );
}
