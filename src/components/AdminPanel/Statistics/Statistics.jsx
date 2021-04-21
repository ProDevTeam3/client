import React, {useState, useEffect} from "react";
import { Box, Stack, Select, Flex, Center, Spinner } from "@chakra-ui/react"
import StackedBarChart from "../../../charts/StackedBarChart/StackedBarChart"
import {defaultAxios} from "../../../config/axios"

const Statistics = () => {

    const defaultInput = {
        label: "nationality",
        values: "sex"
    }

    const [selectInput, setSelectInput] = useState({
        label: defaultInput.label,
        values: defaultInput.values
    });

    const [data, setData] = useState([])

    useEffect(() => {
        if(selectInput.label && selectInput.values) {
            defaultAxios.get("/stats", {params: {First: selectInput.label, Second: selectInput.values}})
            .then(({data}) => {
                setData(data)
            })
        }
    }, [selectInput]);

    const labels = {
        nationality: "Narodowość",
        voivodeship: "Województwo",
        city: "Miasto",
        district: "Powiat",
        commune: "Gmina"
    }
    const values = {
        contract: "Rodzaj umowy",
        sex: "Płeć",
        marital_status:"Stan cywilny",
        education:"Wykształcenie",
        accomodation:"Typ zakwaterowania"
    }

    const handleLabelChange = (value) => {
        setSelectInput((oldState) => ({...oldState, label: value}))
    }

    const handleValuesChange = (value) => {
        setSelectInput((oldState) => ({...oldState, values: value}))
    }

    const handleLoading = () => (
        data.length > 0 ?
        <StackedBarChart data={data}/> : 
        (<Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="teal"
        size="xl"
        />)
    )

    return(
        <Stack height="100%" width="100%">
            <Flex justify="center">
                <Box width="50%">
                    <Select value={selectInput.label} onChange={(e) => handleLabelChange(e.target.value)}>
                        {Object.keys(labels).map(next => (
                            <option value={next} key={next}>{labels[next]}</option>
                        ))}
                    </Select>
                    <Select value={selectInput.values} onChange={(e) => handleValuesChange(e.target.value)}>
                        {Object.keys(values).map(next => (
                            <option value={next} key={next}>{values[next]}</option>
                        ))}
                    </Select>
                </Box>
            </Flex>
            <Center width="100%" height="100%">
                {handleLoading()}
            </Center>
        </Stack>
    )
}

export default Statistics