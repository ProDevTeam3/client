import React, { useState } from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import FusionMaps from "fusioncharts/fusioncharts.maps";
import Poland from "fusioncharts/maps/fusioncharts.poland";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import { maxValue, minValue, mapData } from "./helpers/WorkingPerChartHelpers";
import { Select } from "@chakra-ui/react";

ReactFC.fcRoot(FusionCharts, FusionMaps, Poland, FusionTheme);

const WorkingPerChart = () => {
  const [selNat, selNatUpdate] = useState(0);

  const colorrange = {
    minvalue: `0`,
    startlabel: "Low",
    endlabel: "High",
    code: "82c7ff",
    gradient: "1",
    color: [
      { maxvalue: `${minValue(mapData[selNat].data)}`, code: "82c7ff" },
      { maxvalue: `${maxValue(mapData[selNat].data)}`, code: "038eff" },
    ],
  };

  const chartConfigs = {
    type: "maps/poland",
    width: "100%",
    height: "550",
    dataFormat: "json",
    dataSource: {
      chart: {
        animation: "0",
        showbevel: "0",
        usehovercolor: "1",
        showlegend: "1",
        legendposition: "BOTTOM",
        legendborderalpha: "0",
        legendbordercolor: "ffffff",
        legendallowdrag: "0",
        legendshadow: "0",
        caption: "Odsetek osób pracujących według narodowości",
        connectorcolor: "000000",
        fillalpha: "90",
        entityFillHoverColor: "#000000",
        entityFillHoverAlpha: "20",
        showLabels: "1",
        numberSuffix: "%",
        borderColor: "#000000",
        theme: "fusion",
      },
      colorrange: colorrange,
      data: mapData[selNat].data,
    },
  };

  return (
    <div>
      <Select
        defaultValue={selNat}
        onChange={(e) => selNatUpdate(e.target.value)}
      >
        {mapData.map((item) => {
          return <option value={item.id}>{item.name}</option>;
        })}
      </Select>
      <ReactFC {...chartConfigs} />
    </div>
  );
};

export default WorkingPerChart;
