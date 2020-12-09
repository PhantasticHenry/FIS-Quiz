import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div>
      <h1>Sorry page could not be found</h1>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default PageNotFound;
