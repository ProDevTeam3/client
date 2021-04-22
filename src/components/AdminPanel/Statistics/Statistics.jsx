import React, { useState, useEffect } from "react";
import { Box, Select, Center, Spinner, Tooltip } from "@chakra-ui/react";
import StackedBarChart from "../../../charts/StackedBarChart/StackedBarChart";
import { defaultAxios } from "../../../config/axios";

const Statistics = () => {
  const defaultInput = {
    label: "nationality",
    values: "sex",
  };

  const [selectInput, setSelectInput] = useState({
    label: defaultInput.label,
    values: defaultInput.values,
  });

  const [data, setData] = useState([]);

  useEffect(() => {
    if (selectInput.label && selectInput.values) {
      defaultAxios
        .get("/stats", {
          params: { First: selectInput.label, Second: selectInput.values },
        })
        .then(({ data }) => {
          setData(data);
        });
    }
  }, [selectInput]);

  const labels = {
    nationality: "Narodowość",
    voivodeship: "Województwo",
    city: "Miasto",
    district: "Powiat",
    commune: "Gmina",
  };
  const values = {
    contract: "Rodzaj umowy",
    sex: "Płeć",
    marital_status: "Stan cywilny",
    education: "Wykształcenie",
    accomodation: "Typ zakwaterowania",
  };

  const handleLabelChange = (value) => {
    setSelectInput((oldState) => ({ ...oldState, label: value }));
  };

  const handleValuesChange = (value) => {
    setSelectInput((oldState) => ({ ...oldState, values: value }));
  };

  const handleLoading = () =>
    data.length > 0 ? (
      <StackedBarChart data={data} />
    ) : (
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="teal"
        size="xl"
      />
    );

  return (
    <Center
      width="100%"
      bg="gray.100"
      minH="100%"
      maxH="100%"
      d="flex"
      flexDir="column">
        <Box width={{ md: "80%", base: "94%" }} boxShadow="xl" borderRadius="lg">
      <Center justify="center" bg="teal" width="100%" borderTopRadius="lg" height="10vh" >
        <Box width="100%" display="flex" justifyContent="space-evenly">
          <Tooltip hasArrow label="Pogrupuj po">
          <Select
            width="35%"
            bg="white"
            value={selectInput.label}
            onChange={(e) => handleLabelChange(e.target.value)}
          >
            {Object.keys(labels).map((next) => (
              <option value={next} key={next}>
                {labels[next]}
              </option>
            ))}
          </Select>
          </Tooltip>
          <Tooltip hasArrow label="Wybierz wartość">
          <Select
            width="35%"
            bg="white"
            value={selectInput.values}
            onChange={(e) => handleValuesChange(e.target.value)}
          >
            {Object.keys(values).map((next) => (
              <option value={next} key={next}>
                {values[next]}
              </option>
            ))}
          </Select>
          </Tooltip>
        </Box>
      </Center>
      <Center width="100%" height="67.5vh" bg="white" borderBottomRadius="lg">
        {handleLoading()}
      </Center>
      </Box>
    </Center>
  );
};

export default Statistics;
