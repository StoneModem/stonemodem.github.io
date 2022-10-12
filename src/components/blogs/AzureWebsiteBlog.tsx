import MainWrapper from "../utils/MainWrapper";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import styled from "styled-components";

const ContentPage = styled.div`
  display: flex;
  flex-direction: column;
  justifycontent: center;
  width: 100%;
  text-align: left;
  padding: 1rem 2rem;
`;

function AzureWebsiteBlog() {
  // Blog to navigate website creation with Azure
  return (
    <MainWrapper>
      <ContentPage>
        <h3>The title of the page.</h3>
        <p>
          At first, the troubles began. They came suddenly, without warning.
        </p>
      </ContentPage>
    </MainWrapper>
  );
}

export default AzureWebsiteBlog;
