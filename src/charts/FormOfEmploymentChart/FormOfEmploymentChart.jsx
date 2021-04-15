import React from "react";
import Chart from "react-apexcharts";
import gatherData from "./helper"
import generateOptions from "./options"

//TODO do zmiany
// const FormOfEmploymentChart = ({data}) => {
const FormOfEmploymentChart = ({}) => {
    
    //TODO do usunięcia
    const data = [
      {
        nationality: "polska",
        contracts: [
          {
            name: "Kontrakt B2B",
            value: 623,
          },
          {
            name: "Umowa o pracę",
            value: 823,
          },
          {
            name: "Samozatrudnienie",
            value: 932,
          },
        ],
      },
      {
        nationality: "ukraińska",
        contracts: [
          {
            name: "Kontrakt B2B",
            value: 234,
          },
          {
            name: "Umowa o pracę",
            value: 235,
          },
          {
            name: "Samozatrudnienie",
            value: 327,
          },
        ],
      },
      {
        nationality: "niemiecka",
        contracts: [
          {
            name: "Kontrakt B2B",
            value: 274,
          },
          {
            name: "Umowa o pracę",
            value: 215,
          },
          {
            name: "Samozatrudnienie",
            value: 327,
          },
        ],
      },
      {
        nationality: "litewska",
        contracts: [
          {
            name: "Kontrakt B2B",
            value: 34,
          },
          {
            name: "Umowa o pracę",
            value: 123,
          },
          {
            name: "Samozatrudnienie",
            value: 53,
          },
        ],
      },
      {
        nationality: "rosyjska",
        contracts: [
          {
            name: "Kontrakt B2B",
            value: 122,
          },
          {
            name: "Umowa o pracę",
            value: 333,
          },
          {
            name: "Samozatrudnienie",
            value: 97,
          },
        ],
      },
    ];
    

    const series = gatherData(data)
    const options = generateOptions(series)

  return (
      //TODO rozmiar do zmiany
      <div style={{height: "50vh", width: "50vw"}}>
      <Chart options={options} series={series.series} type="bar" height="100%" width="100%"/>
      </div>
  );
};
export default FormOfEmploymentChart;