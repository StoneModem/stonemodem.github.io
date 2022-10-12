import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import styled from "styled-components";
import { app_constants } from "../../AppConstants";
import MainWrapper from "../utils/MainWrapper";

const ContentPage = styled.div`
  display: flex;
  flex-direction: column;
  justifycontent: center;
  width: 100%;
  text-align: left;
  padding: 1rem 2rem;
`;

const H1_TC = styled.h1`
  ${app_constants.COLOR_WHEEL_CSS}
  ${app_constants.COLOR_WHEEL_CSS_TEXT_CLIP}
`;

const H2_TC = styled.h2`
  ${app_constants.COLOR_WHEEL_CSS}
  ${app_constants.COLOR_WHEEL_CSS_TEXT_CLIP}
`;

// Configuring an API with Python and Flask
function FlaskAPIBlog() {
  return (
    <MainWrapper>
      <ContentPage>
        <H1_TC>Building an API using Python and Flask.</H1_TC>
        <header>
          So you want to build an API in python. Then this is the right place
          for you. Here I'll detail the steps required to build, configure and
          deploy a python API using Azure App Services. It's pretty
          straightforward!
        </header>
        <section>
          <H2_TC>Step 1: Creating a local API on your machine. </H2_TC>
          <p>
            Before deployment, a bit of setup is in order. Make sure you have a
            fresh environment for the installation. I'm using{" "}
            <code>conda 4.14.0</code> for environment management.
            <SyntaxHighlighter
              showLineNumbers
              language="bash"
              style={atomOneDark}
            >
              {`steinn@shm-pc:~/me/projects$ mkdir flask_api
steinn@shm-pc:~/me/projects$ cd flask_api/
steinn@shm-pc:~/me/projects/flask_api$ conda create -n flask_api
steinn@shm-pc:~/me/projects/flask_api$ conda activate flask_api`}
            </SyntaxHighlighter>
            Once our environment is setup, we want to install our dependencies:
          </p>
        </section>
        <section>
          <H2_TC>Step 2: Creating a local API on your machine. </H2_TC>
          <p>Before deployment</p>
        </section>
        <section>
          <H2_TC>
            Optional (encouraged) step: Fit your API with interactive
            documentation using Swagger.{" "}
          </H2_TC>
          <p>Before deployment</p>
        </section>
        <section>
          <H2_TC>
            Another optional (encouraged) step: Create unit tests for your API
            using pytest
          </H2_TC>
          <p>Before deployment</p>
        </section>
      </ContentPage>
    </MainWrapper>
  );
}

export default FlaskAPIBlog;
