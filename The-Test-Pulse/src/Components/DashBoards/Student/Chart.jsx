import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import Stack from "@mui/material/Stack";
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';
import DashedLineChart from "./LineChart";

const chartsParams = {
  margin: { bottom: 20, left: 25, right: 5 },
  height: 300,
};

const settings = {
  width: 200,
  height: 200,
  value: 60,
};
export default function BasicColor() {
  const [color, setColor] = React.useState("#4e79a7");
  
  return (
    <div className="w-full ">
      <DashedLineChart />
      <hr className="my-4" />
      <div className="flex gap-3 md:flex-row flex-col items-center">
        
        <Stack
          direction="column"
          spacing={2}
          alignItems="center"
          sx={{ width: "100%" }}
        >
          <LineChart
            {...chartsParams}
            series={[
              {
                data: [15, 23, 18, 19, 13],
                label: "Your Progress",
                color,
              },
            ]}
          />
        </Stack>

        <div className="w-1/2 flex border flex-col p-4 rounded-lg items-center justify-center">
          <h1 className="text-xl ">Recently Attempt Quiz Result</h1>
          <strong className="text-xl">60/100</strong>
          <Gauge
      {...settings}
      cornerRadius="50%"
      sx={(theme) => ({
        [`& .${gaugeClasses.valueText}`]: {
          fontSize: 40,
        },
        [`& .${gaugeClasses.valueArc}`]: {
          fill: '#52b202',
        },
        [`& .${gaugeClasses.referenceArc}`]: {
          fill: theme.palette.text.disabled,
        },
      })}
    />
          </div>
      </div>
    </div>
  );
}
