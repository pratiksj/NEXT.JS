import Link from "next/link";
import React from "react";

const Errorpage = () => {
  return (
    <>
      <div>
        <div>
          <h1>404</h1>
        </div>

        <h2>We are sorry, Page not found</h2>
        <p>The page you are looking for is not found</p>
        {/* <a href="/">Back to HomePage</a> */}
        <Link href="/">Back to HomePage</Link>
      </div>
    </>
  );
};

export default Errorpage;
