import * as React from 'react';
import {
  LineChart,
  lineElementClasses,
  markElementClasses,
} from '@mui/x-charts/LineChart';
// import LeaderBoard from './LeaderBoard';

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  'Quiz 1',
  'Quiz 2',
  'Quiz 3',
  'Quiz 4',
  'Quiz 5',
  'Quiz 6',
  'Quiz 7',
];

export default function TestSeriesAnalysis() {
  return (
    <div className='flex items-center justify-between'>
      
    <LineChart
      height={300}
      series={[
        { data: pData, label: 'Average Rank', id: 'pvId' },
        { data: uData, label: 'Your Rank', id: 'uvId' },
      ]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
      sx={{
        [`.${lineElementClasses.root}, .${markElementClasses.root}`]: {
          strokeWidth: 1,
        },
        '.MuiLineElement-series-pvId': {
          strokeDasharray: '5 5',
        },
        '.MuiLineElement-series-uvId': {
          strokeDasharray: '3 4 5 2',
        },
        [`.${markElementClasses.root}:not(.${markElementClasses.highlighted})`]: {
          fill: '#fff',
        },
        [`& .${markElementClasses.highlighted}`]: {
          stroke: 'none',
        },
      }}
    />
    
    </div>

  );
}