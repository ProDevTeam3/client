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
        industries: [
          {
            name: "Gastronomia",
            value: 623,
          },
          {
            name: "Górnictwo i wydobywanie",
            value: 823,
          },
          {
            name: "Budownictwo",
            value: 932,
          },
        ],
      },
      {
        nationality: "ukraińska",
        industries: [
          {
            name: "Gastronomia",
            value: 234,
          },
          {
            name: "Górnictwo i wydobywanie",
            value: 235,
          },
          {
            name: "Budownictwo",
            value: 327,
          },
        ],
      },
      {
        nationality: "niemiecka",
        industries: [
          {
            name: "Gastronomia",
            value: 274,
          },
          {
            name: "Górnictwo i wydobywanie",
            value: 215,
          },
          {
            name: "Budownictwo",
            value: 327,
          },
        ],
      },
      {
        nationality: "litewska",
        industries: [
          {
            name: "Gastronomia",
            value: 34,
          },
          {
            name: "Górnictwo i wydobywanie",
            value: 123,
          },
          {
            name: "Budownictwo",
            value: 53,
          },
        ],
      },
      {
        nationality: "rosyjska",
        industries: [
          {
            name: "Gastronomia",
            value: 122,
          },
          {
            name: "Górnictwo i wydobywanie",
            value: 333,
          },
          {
            name: "Budownictwo",
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