import React, { CSSProperties, useState } from "react";
import styled from "styled-components";

import { app_constants } from "../../AppConstants";
import MainWrapper from "../utils/MainWrapper";

import HomeApps from "./Apps";
import HomeBlogs from "./Blogs";
import HomeContainerSection from "./HomeContainerSection";

const HomeContainerLeft = styled.div`
  width: 70%;
  border-radius: 5px;
  padding: 10px 0;
`;
const HomeContainerRight = styled.div`
  padding: 10px 0;
  width: 28%;
  margin-left: auto;
  border-radius: 5px;
`;

function Home() {
  const [linkIs, setLinkIs] = useState("Blogs");

  const linkMappings: {
    title: string;
    name: string;
    component: JSX.Element;
  }[] = [
    { title: "Blog Posts", name: "Blogs", component: <HomeBlogs /> },
    { title: "Apps", name: "Apps", component: <HomeApps /> },
  ];

  // Filter link mappings to get current link
  let currentPage = linkMappings.filter((val) => {
    return val.name === linkIs;
  })[0];

  return (
    <MainWrapper showHistoryBack={false}>
      <>
        <HomeContainerLeft>{currentPage.component}</HomeContainerLeft>
        <HomeContainerRight>
          <HomeContainerSection
            linkMappings={linkMappings}
            linkIs={linkIs}
            setLinkIs={setLinkIs}
          />
        </HomeContainerRight>
      </>
    </MainWrapper>
  );
}

export default Home;
