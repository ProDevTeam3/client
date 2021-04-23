import React, { useState, useEffect } from "react";
import {
  Box,
  Select,
  Center,
  Spinner,
  Tooltip,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SimpleGrid,
} from "@chakra-ui/react";
import StackedBarChart from "../../../charts/StackedBarChart/StackedBarChart";
import { defaultAxios } from "../../../config/axios";
import { useToast } from "@chakra-ui/react";

const Statistics = () => {
  const defaultInput = {
    label: "nationality",
    values: "sex",
  };

  const [selectInput, setSelectInput] = useState({
    label: defaultInput.label,
    values: defaultInput.values,
  });

  const [quantity, setQuantity] = useState(10);

  const [data, setData] = useState([]);

  const toast = useToast();

  useEffect(() => {
    if (selectInput.label && selectInput.values) {
      defaultAxios
        .get("/stats", {
          params: {
            First: selectInput.label,
            Second: selectInput.values,
            Third: quantity,
          },
        })
        .then(({ data }) => {
          setData(data);
        })
        .catch((error) => {
          toast({
            title: "Error",
            description: error.response.data,
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        });
    }
  }, [selectInput, quantity]);

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

  const handleQuantityChange = (value) => {
    setQuantity(value);
  };

  const handleLoading = () =>
    data?.length > 0 ? (
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
      flexDir="column"
    >
      <Box width={{ md: "80%", base: "94%" }} boxShadow="xl" borderRadius="lg">
        <Center
          justify="center"
          bg="teal"
          width="100%"
          borderTopRadius="lg"
          height="10vh"
        >
          <SimpleGrid
            width="100%"
            columns={3}
            spacing={8}
            paddingLeft={8}
            paddingRight={8}
          >
            <Tooltip hasArrow label="Pogrupuj po">
              <Select
                width="100%"
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
                width="100%"
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
            <Box
              borderRadius="lg"
              bg="white"
              width="100%"
              display="flex"
              align="center"
            >
              <Slider
                aria-label="slider-ex-1"
                colorScheme="teal"
                style={{ marginLeft: 8, marginRigth: 8 }}
                defaultValue={10}
                min={5}
                max={20}
                onChangeEnd={(value) => handleQuantityChange(value)}
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
            </Box>
          </SimpleGrid>
        </Center>
        <Center width="100%" height="67.5vh" bg="white" borderBottomRadius="lg">
          {handleLoading()}
        </Center>
      </Box>
    </Center>
  );
};

export default Statistics;
