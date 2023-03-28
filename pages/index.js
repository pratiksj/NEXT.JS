import Link from "next/link";

const index = () => {
  return (
    <>
      <nav>
        <ul className="menu-bar">
          <li>
            <Link href="/">HOME</Link>
          </li>
          <li>
            <Link href="/about">ABOUT</Link>
          </li>
          <li>
            <Link href="/contact">CONTACT</Link>
          </li>
          <li>
            <Link href="/product">PRODUCT</Link>
          </li>
        </ul>
      </nav>
      <h1>hellow world</h1>
    </>
  );
};

export default index;
