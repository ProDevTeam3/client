import React, {useState} from "react";
import { Box, Stack, Select, Flex, Button, Center } from "@chakra-ui/react"
import StackedBarChart from "../../../charts/StackedBarChart/StackedBarChart"
import example from "../../../charts/StackedBarChart/exampleInput"

const Statistics = () => {

    const [selectInput, setSelectInput] = useState({
        label: null,
        values: null
    });

    const [data, setData] = useState(null)

    const labels = {
        nationality: "Narodowość",
        voivodeship: "Województwo",
        city: "Miasto"
    }
    const values = {
        sex: "Płeć",
        age:"Wiek",
        marital_status:"Stan cywilny",
        education:"Wykształcenie",
        with_parents: "Mieszkanie z rodzicami",
        accomodation:"Typ zakwaterowania"
    }

    const requestData = () => {
        console.log(selectInput)
    }

    const handleLabelChange = (value) => {
        setSelectInput({...selectInput, label: value})
        requestData()
    }

    const handleValuesChange = (value) => {
        setSelectInput({...selectInput, values: value})
        requestData()
    }

    return(
        <Stack height="100%" width="100%">
            <Flex justify="center">
                <Box width="50%">
                    <Select placeholder="Select option" onChange={(e) => handleLabelChange(e.target.value)}>
                        {Object.keys(labels).map(next => (
                            <option value={next} key={next}>{labels[next]}</option>
                        ))}
                    </Select>
                    <Select placeholder="Select option" onChange={(e) => handleValuesChange(e.target.value)}>
                        {Object.keys(values).map(next => (
                            <option value={next} key={next}>{values[next]}</option>
                        ))}
                    </Select>
                </Box>
            </Flex>
            <Center width="100%" height="100%">
                <StackedBarChart data={example()}/>
            </Center>
        </Stack>
    )
}

export default Statistics