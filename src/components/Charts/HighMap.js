import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highchart from "highcharts";
import highchartsMap from "highcharts/modules/map";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { cloneDeep } from "lodash";

highchartsMap(Highchart);

const initOptions = {
  chart: {
    height: 500,
  },
  title: {
    text: null,
  },
  mapNavigation: {
    enabled: true,
  },
  colorAxis: {
    min: 0,
    stops: [
      [0.2, "#FFC4AA"],
      [0.4, "#FF8A66"],
      [0.6, "#FF392B"],
      [0.8, "#B71525"],
      [1, "#7A0826"],
    ],
  },
  legend: {
    layout: "vertical",
    align: "right",
    verticalAlign: "bottom",
  },
  series: [{ name: "Dan So", joinBy: ["hc-key", "key"] }],
};
function HighMap({ mapData }) {
  const [options, setOptions] = useState({});
  const chartRef = useRef(null);
  const [configLoaded, setConfigLoaded] = useState(false);
  useEffect(() => {
    if (mapData && Object.keys(mapData).length) {
      const fakeData = mapData.features.map((feature, index) => ({
        key: feature.properties["hc-key"],
        value: index,
      }));
      setOptions({
        ...initOptions,
        series: [
          {
            ...initOptions.series[0],
            mapData: mapData,
            data: fakeData,
          },
        ],
      });
      if (!configLoaded) setConfigLoaded(true);
    }
  }, [mapData]);

  useEffect(() => {
    if (chartRef && chartRef.current) {
      chartRef.current.series[0].update({
        mapData,
      });
    }
  }, [mapData]);

  if (!configLoaded) return null;

  return (
    <>
      <HighchartsReact
        highcharts={Highchart}
        options={cloneDeep(options)}
        constructorType="mapChart"
        ref={chartRef}
      />
      <h1>Helo</h1>
      <div>
        <h1>tooi ddnag lam gif</h1>
      </div>
    </>
  );
}

export default HighMap;
