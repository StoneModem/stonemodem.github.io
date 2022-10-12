import HistoryBack from "../history-back/HistoryBack";
import { Header, Footer } from "../header-footer/HeaderFooter";
import { app_constants } from "../../AppConstants";
import styled from "styled-components";

const HomeBodyContainer = styled.div`
  display: flex;
  justify-content: center;
  min-height: 10vh;
  padding: 1vh 0;
  width: ${app_constants.CONTENT_WIDTH};
  flex-grow: 1;
`;

function MainWrapper({
  children,
  showHistoryBack = true,
}: {
  children: JSX.Element;
  showHistoryBack?: boolean;
}) {
  return (
    <div className="page-parent">
      <div className="page-child">
        <Header />
        {showHistoryBack && <HistoryBack />}
        <HomeBodyContainer>{children}</HomeBodyContainer>
        <Footer />
      </div>
    </div>
  );
}

export default MainWrapper;
