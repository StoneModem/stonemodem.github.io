import React, { useCallback, useRef, useState } from "react";
import Select, { SingleValue, StylesConfig } from "react-select";
import { FilterOptionOption } from "react-select/dist/declarations/src/filters";
import { app_constants } from "../../../AppConstants";

import allFlags from "../../../images/countryFlags/country_code_mapping.json";

import styled from "styled-components";
import MainWrapper from "../../utils/MainWrapper";

interface OptionType {
  label: string;
  value: string;
  code: string;
}
const data: OptionType[] = allFlags.map((value) => {
  return {
    label: value.name,
    value: value.name.toLowerCase(),
    code: value.code,
  };
});

const FlagAppMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const FlagAppImage = styled.div`
  width: 20rem;
  height: 20rem;
  margin: 0 auto;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  justify-content: end;
`;

const TIME_FOR_ANSWER_MS: number = 1500;

function FlagAppBody() {
  const [activeCountry, setActiveCountry] = useState<{
    name: string;
    dial_code: string;
    code: string;
  }>(allFlags[Math.floor(Math.random() * allFlags.length)]); // init active country with random flag choice

  const [selectValue, setSelectValue] = useState<OptionType | null>(null);

  const [selectInputOutline, setSelectInputOutline] = useState<string>("none");
  const [selectDisabled, setSelectDisabled] = useState<boolean>(false);
  const [showFlagText, setShowFlagText] = useState<string>("");
  const [numberCorrect, setNumberCorrect] = useState<number>(0);
  const [numberAnswered, setNumberAnswered] = useState<number>(0);

  const customFilter = useCallback(
    (candidate: FilterOptionOption<unknown>, input: string) => {
      if (input) {
        // return true for each option that matches your filter
        return candidate.value.toLowerCase().startsWith(input.toLowerCase());
      }
      return true; // if not search, then all match
    },
    []
  );

  const reactSelectStyle: StylesConfig<OptionType, false> = {
    control: (provided, state) => {
      return {
        ...provided,
        cursor: "text",
        width: "20vw",
        boxShadow: app_constants.DEFAULT_SHADOW,
        outline: selectInputOutline,

        // // This line disables the blue border on focu
        border: state.isFocused ? 0 : 0,
        "&:hover": {
          border: state.isFocused ? 0 : 0,
        },
      };
    },
    container: (provided) => ({
      ...provided,
      width: "20vw",
      margin: "0 auto",
    }),
    menuList: (provided) => ({
      ...provided,
      maxHeight: "15vh",
    }), // dropdown menu list
  };

  const selectRef = useRef<any>(null);

  const processSelectValue = (e: SingleValue<OptionType>) => {
    setSelectValue(e);
    setShowFlagText(activeCountry.name);

    if (e?.code === activeCountry.code) {
      setSelectInputOutline("2px solid limegreen");
    } else {
      setSelectInputOutline("2px solid red");
    }

    setSelectDisabled(true);
    setTimeout(() => {
      setSelectDisabled(false);
      setSelectValue(null);
      setActiveCountry(allFlags[Math.floor(Math.random() * allFlags.length)]);
      setShowFlagText("");

      // update correct % counter
      setNumberAnswered((prevnum) => prevnum + 1);
      if (e?.code === activeCountry.code) {
        setNumberCorrect((prevnum) => prevnum + 1);
      }
      setSelectInputOutline("none");
    }, TIME_FOR_ANSWER_MS);
  };

  // set the focus shortly after react render
  setTimeout(() => {
    selectRef.current.focus();
  }, 100);

  return (
    <MainWrapper>
      <FlagAppMain>
        <FlagAppImage>
          {activeCountry.code && (
            <img
              src={require(`../../../images/countryFlags/${activeCountry.code.toLowerCase()}.svg`)}
              alt={activeCountry.name}
              style={{
                maxHeight: "100%",
                maxWidth: "100%",
                objectFit: "contain",
                border: "1px solid black",
                boxShadow: app_constants.DEFAULT_SHADOW,
              }}
            />
          )}
        </FlagAppImage>
        <h3 style={{ marginBottom: "50px" }}>
          {showFlagText}
          &nbsp; {/** Keep space char for indent */}
        </h3>
        <Select
          options={data}
          ref={selectRef}
          isDisabled={selectDisabled}
          onChange={processSelectValue}
          value={selectValue}
          placeholder="Search for countries..."
          filterOption={customFilter}
          styles={reactSelectStyle}
        ></Select>
        <h3>
          Your current score: {numberCorrect}/{numberAnswered}
        </h3>
      </FlagAppMain>
    </MainWrapper>
  );
}

export default FlagAppBody;
