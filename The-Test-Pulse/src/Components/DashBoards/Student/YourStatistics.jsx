import React from "react";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ActiveHours from "./ActiveHoursChart";
import TestSeriesAnalysis from "./LineChart";


function YourStatistics() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="">
      <h1 className=" text-richblack-600 md:text-xl p-2 px-4 font-bold">Your Statistics</h1>
      <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
          <Tab label="Active Test Series" value="1" />
            <Tab label="Active Hours" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1"><TestSeriesAnalysis/></TabPanel>
        <TabPanel value="2"><ActiveHours/></TabPanel>
      </TabContext>
    </Box>
    </div>
  );
}

export default YourStatistics;
