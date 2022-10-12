import { useEffect, useState } from "react";
import styled from "styled-components";
import { app_constants } from "../../AppConstants";

// Constant declarations used throughout.
const bg_active_color = "#006ee6"; // 007AFF00
const tx_active_color = "white";
const margin_between_link_item = "5px";
const section_style_padding = 20;

// Full section of container style.
const SectionStyle = styled.div`
  position: relative;
  padding: ${section_style_padding}px 0;
  border-radius: 5px;
  box-shadow: ${app_constants.DEFAULT_SHADOW};
`;

// Style of floating background which indicates "selected" element.
const FloatingBackground = styled.div`
  position: absolute;
  background: ${bg_active_color};
  transition: margin-top 1s ease, height 1s ease;
  width: 100%;

  ${app_constants.COLOR_WHEEL_CSS}
`;

// Style of
const SectionOption = styled.div`
  position: relative;
  padding: 10px 0;
  cursor: pointer;
  transition: color 800ms ease-in-out;
  // text-decoration: underline;
  font-weight: 900;

  // &:hover {
  //   background-color: ${bg_active_color};
  //   color: ${tx_active_color};
  // }

  &:not(:last-child) {
    margin-bottom: ${margin_between_link_item};
  }
`;

function HomeContainerSection({
  linkMappings,
  linkIs,
  setLinkIs,
}: {
  linkMappings: {
    title: string;
    name: string;
    component: JSX.Element;
  }[];
  linkIs: string;
  setLinkIs: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [selectedElem, setSelectedElem] = useState<HTMLElement | null>(null);

  useEffect(() => {
    // Give current link item 'active' status. Fetch by div-ID on page load
    setSelectedElem(document.getElementById(`home-menu-option-${linkIs}`));
  }, []);

  return (
    <SectionStyle id="home-section-parent">
      <FloatingBackground style={getStyleForFloatingBackground(selectedElem)} />
      {linkMappings.map((val) => {
        return (
          <SectionOption
            key={val.name}
            style={
              linkIs === val.name
                ? {
                    // set "Selected" css properties
                    color: "white",
                  }
                : {}
            }
            onClick={(e) => {
              setLinkIs(val.name);
              let clickedDiv = e.target as HTMLElement;
              setSelectedElem(clickedDiv);
            }}
            id={`home-menu-option-${linkIs}`}
          >
            {val.title}
          </SectionOption>
        );
      })}
    </SectionStyle>
  );
}

function getStyleForFloatingBackground(selectedElem: HTMLElement | null) {
  if (selectedElem === null) return {};
  let sectionBounds = document.getElementById("home-section-parent");
  if (sectionBounds === null) return {};

  let child_coords = selectedElem.getBoundingClientRect();
  let parent_coords = sectionBounds.getBoundingClientRect();

  // Calculate the height of the 'selected' box and the distance-from-parent-top
  let marginTop = `${
    child_coords.top - parent_coords.top - section_style_padding
  }px`;
  let child_height = child_coords.bottom - child_coords.top;

  // Return corresponding CSS props
  return {
    height: child_height,
    marginTop: marginTop,
    // maxWidth: "5px", // Optional to have the "selected" as a sidebar.
    // Make sure to switch color setting of "selected" element to black.
  };
}

export default HomeContainerSection;
