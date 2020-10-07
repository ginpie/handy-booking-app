import React from "react";
import LinkItem from "../LinkItem";
import Layout from "../Layout";
import CategoriesDropdown from "./components/CategoriesDropdown";

const Public = () => (
  <Layout>
    <LinkItem href="/" linkType={"nav"}>
      Home
    </LinkItem>
    <CategoriesDropdown />
    <LinkItem href="/contact" linkType={"nav"}>
      Contact
    </LinkItem>
  </Layout>
);

export default Public;
