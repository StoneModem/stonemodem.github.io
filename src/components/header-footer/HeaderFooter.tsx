import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { app_constants } from "../../AppConstants";

const HeaderFooterContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: space-between;
  background-color: white;
  min-height: 9vh;
  box-shadow: ${app_constants.FLIPPED_DEFAULT_SHADOW};
`;

const ContainerContent = styled.div`
  display: flex;
  gap: 1rem;
  padding: 5px 10px;
  margin: 5px 10px;
  height: 50%;
  & > a {
    height: 100%;
    width: 100%;
  }
  & > a > svg {
    height: 100%;
    width: 100%;
  }
`;

const PageTitle = styled.div`
  padding: 5px 10px;
  margin: 5px 10px;

  font-family: basic-sans, sans-serif;
  font-size: 2em;
  font-style: italic;
  font-weight: 900;
  cursor: pointer;

  ${app_constants.COLOR_WHEEL_CSS}
  ${app_constants.COLOR_WHEEL_CSS_TEXT_CLIP}
`;

const ColoredAnchor = styled.a`
  ${app_constants.COLOR_WHEEL_CSS}
  ${app_constants.COLOR_WHEEL_CSS_TEXT_CLIP}
`;

const svg_path_mappings: {
  name: string;
  href: string;
  pathD: string; // see ~/src/images/icons for svg/path outlines
}[] = [
  {
    name: "Github",
    href: "https://github.com/steinnhauser/",
    pathD:
      "M 7.5 1 C 3.910156 1 1 3.90625 1 7.488281 C 1 10.355469 2.863281 12.789063 5.445313 13.648438 C 5.769531 13.707031 6 13.375 6 13.125 C 6 12.972656 6.003906 12.789063 6 12.25 C 4.191406 12.640625 3.625 11.375 3.625 11.375 C 3.328125 10.625 2.96875 10.410156 2.96875 10.410156 C 2.378906 10.007813 3.011719 10.019531 3.011719 10.019531 C 3.664063 10.0625 4 10.625 4 10.625 C 4.5 11.5 5.628906 11.414063 6 11.25 C 6 10.851563 6.042969 10.5625 6.152344 10.378906 C 4.109375 10.019531 2.996094 8.839844 3 7.207031 C 3.003906 6.242188 3.335938 5.492188 3.875 4.9375 C 3.640625 4.640625 3.480469 3.625 3.960938 3 C 5.167969 3 5.886719 3.871094 5.886719 3.871094 C 5.886719 3.871094 6.453125 3.625 7.496094 3.625 C 8.542969 3.625 9.105469 3.859375 9.105469 3.859375 C 9.105469 3.859375 9.828125 3 11.035156 3 C 11.515625 3.625 11.355469 4.640625 11.167969 4.917969 C 11.683594 5.460938 12 6.210938 12 7.207031 C 12 8.839844 10.890625 10.019531 8.851563 10.375 C 8.980469 10.570313 9 10.84375 9 11.25 C 9 12.117188 9 12.910156 9 13.125 C 9 13.375 9.226563 13.710938 9.558594 13.648438 C 12.140625 12.785156 14 10.355469 14 7.488281 C 14 3.90625 11.089844 1 7.5 1 Z",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/steinnhauser/",
    pathD:
      "M 2.757813 1 C 1.792969 1 1 1.792969 1 2.757813 L 1 12.246094 C 1 13.207031 1.792969 14 2.757813 14 L 12.246094 14 C 13.207031 14 14 13.207031 14 12.246094 L 14 2.757813 C 14 1.792969 13.207031 1 12.246094 1 Z M 2.757813 2 L 12.246094 2 C 12.667969 2 13 2.332031 13 2.757813 L 13 12.246094 C 13 12.667969 12.667969 13 12.246094 13 L 2.757813 13 C 2.332031 13 2 12.667969 2 12.246094 L 2 2.757813 C 2 2.332031 2.332031 2 2.757813 2 Z M 4 3 C 3.449219 3 3 3.449219 3 4 C 3 4.550781 3.449219 5 4 5 C 4.550781 5 5 4.550781 5 4 C 5 3.449219 4.550781 3 4 3 Z M 3 6 L 3 12 L 5 12 L 5 6 Z M 6 6 L 6 12 L 8 12 L 8 9.320313 C 8 8.488281 8.078125 7.742188 9.078125 7.742188 C 10.0625 7.742188 10 8.636719 10 9.375 L 10 12 L 12 12 L 12 9.039063 C 12 7.320313 11.640625 6 9.691406 6 C 8.753906 6 8.28125 6.375 8.023438 6.875 L 8 6.875 L 8 6 Z",
  },
  {
    name: "StackOverflow",
    href: "https://stackoverflow.com/users/13819183/steinn-hauser-magnusson/",
    pathD:
      "M 9.914063 0.71875 L 9.085938 1.28125 L 11.894531 5.367188 L 12.71875 4.800781 Z M 7.695313 2.453125 L 7.039063 3.207031 L 10.917969 6.582031 L 11.574219 5.828125 Z M 6.226563 4.804688 L 5.773438 5.695313 L 10.210938 7.953125 L 10.664063 7.0625 Z M 5.363281 7.140625 L 5.136719 8.109375 L 9.976563 9.242188 L 10.203125 8.265625 Z M 3 9 L 3 14 L 12 14 L 12 9 L 11 9 L 11 13 L 4 13 L 4 9 Z M 5.03125 9.25 L 4.96875 10.25 L 9.972656 10.566406 L 10.035156 9.570313 Z M 5 11 L 5 12 L 10 12 L 10 11 Z",
  },
];

function Header() {
  const navigate = useNavigate();
  return (
    <div className="header-footer">
      <HeaderFooterContainer>
        <ContainerContent>
          {svg_path_mappings.map((e) => {
            return (
              <a href={e.href} target="_blank" rel="noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  width="16px"
                  height="16px"
                >
                  <path d={e.pathD}>
                    <animate
                      attributeName="fill"
                      attributeType="XML"
                      values={app_constants.SVG_ANIMATE_CW_COLORS}
                      calcMode={"linear"}
                      dur={app_constants.SVG_ANIMATE_CW_TIME}
                      repeatCount="indefinite"
                    />
                  </path>
                </svg>
              </a>
            );
          })}
        </ContainerContent>
        <PageTitle onClick={() => navigate("/")}>StoneModem</PageTitle>
      </HeaderFooterContainer>
    </div>
  );
}

function Footer() {
  return (
    <div className="header-footer">
      <HeaderFooterContainer>
        <ContainerContent
          style={{
            display: "flex",
            textAlign: "right",
          }}
        >
          <small>
            Copyright: &#169;2018-2022 Steinn Magnússon. All rights reserved.
            <br />
            Made using ReactJS. Icons by{" "}
            <ColoredAnchor
              target="_blank"
              rel="noreferrer"
              href="https://icons8.com"
            >
              Icons8
            </ColoredAnchor>
          </small>
        </ContainerContent>
      </HeaderFooterContainer>
    </div>
  );

  // https://peakbase.app/info.html
}

export { Header, Footer };
