import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import Stack from '@mui/material/Stack';

const chartsParams = {
  margin: { bottom: 20, left: 25, right: 5 },
  height: 300,
};

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export default function ActiveHours() {
  const [color, setColor] = React.useState('#f28e2c');

  return (
    <Stack direction="column" spacing={2} alignItems="center" sx={{ width: '100%' }}>
      <LineChart
        {...chartsParams}
        labels={daysOfWeek}
        series={[
          {
            data: [5, 3, 8, 9, 3, 6, 2],
            label: 'Active Hours',
            color,
          },
        ]}
      />
    </Stack>
  );
}