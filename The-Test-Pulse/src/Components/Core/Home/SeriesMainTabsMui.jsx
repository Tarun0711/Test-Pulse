import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TestCard from './TestCard';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '80%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="All" {...a11yProps(0)} />
          <Tab label="JEE" {...a11yProps(1)} />
          <Tab label="NEET" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel  value={value} index={0}>
        <div className='flex gap-3 flex-wrap items-center justify-start '>
        <TestCard/>
        <TestCard/>
        <TestCard/>


        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <TestCard/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      <TestCard/>
      <TestCard/>
      </CustomTabPanel>
    </Box>
  );
}