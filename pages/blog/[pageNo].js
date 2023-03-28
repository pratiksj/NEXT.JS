import React from "react";
import { useRouter } from "next/router";

const PageNo = () => {
  const router = useRouter();
  const pageNumber = router.query.pageNo;
  console.log(pageNumber, "i am pageNumber");
  return (
    <>
      <h1>My {pageNumber} content</h1>
    </>
  );
};

export default PageNo;
