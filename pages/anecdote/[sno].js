import React from "react";
import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();
  const pageNumber = router.query.sno;
  return <p>Post:{pageNumber}</p>;
};

export default Post;
