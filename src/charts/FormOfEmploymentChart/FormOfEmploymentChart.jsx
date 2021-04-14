import React from "react";
import Chart from "react-apexcharts";
import gatherData from "./helper"
import generateOptions from "./options"

//TODO do zmiany
// const FormOfEmploymentChart = ({data}) => {
const FormOfEmploymentChart = ({}) => {
    
    //TODO do usunięcia
    const data = {
      "Kontrakt B2B": 523,
      "Umowa o pracę": 456,
      "Umowa zlecenie": 432,
      "Umowa o dzieło": 1045,
      "Samozatrudnienie": 432,
      "Wolontariat": 220,
      "Inna forma umowy cywilnoprawnej":543,
      "Staż, praktyka": 403,
      "Brak oficjalnej umowy": 432,
    }

    const series = gatherData(data)
    const options = generateOptions(series)

  return (
      //TODO rozmiar do zmiany
      <div style={{height: "90vh", width: "90vw"}}>
      <Chart options={options} series={[{data: series.data}]} type="bar" height="100%" width="100%"/>
      </div>
  );
};
export default FormOfEmploymentChart;