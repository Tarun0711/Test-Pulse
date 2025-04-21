import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TestSeriesCard from "./TestSeriesCard";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function ExploreTestseries() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
        <div className="flex items-center justify-between px-4">
        <h1 className=" text-richblack-600 md:text-2xl p-2 px-4 font-bold">
       Popular TestSeries
      </h1>
      <p className="text-blue-500 hover:scale-95 text-xl  underline-offset-4 hover:underline">View All</p>
        </div>
      
      <hr />
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
          display: "flex",
        }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: "divider" }}
        >
          <Tab label="All" {...a11yProps(0)} />
          <Tab label="Jee Mains" {...a11yProps(1)} />
          <Tab label="Jee Advance" {...a11yProps(2)} />
          <Tab label="Neet" {...a11yProps(3)} />
          <Tab label="11th" {...a11yProps(4)} />
          <Tab label="12th" {...a11yProps(5)} />
          <Tab label="Jee Dropper" {...a11yProps(6)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <div className="flex gap-2 flex-wrap items-center justify-start">
            <TestSeriesCard />
            <TestSeriesCard />
            <TestSeriesCard />
            <TestSeriesCard />
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className="flex  gap-2 flex-wrap items-center justify-start">
            <TestSeriesCard />
          </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <div className="flex  gap-2 flex-wrap items-center justify-start">
            <TestSeriesCard />
          </div>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <div className="flex  gap-2  flex-wrap items-center justify-start">
            <TestSeriesCard />
          </div>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <div className="flex  gap-2 flex-wrap items-center justify-start">
            <TestSeriesCard />
          </div>
        </TabPanel>
        <TabPanel value={value} index={5}>
          <div className="flex  gap-2 flex-wrap items-center justify-start">
            <TestSeriesCard />
          </div>
        </TabPanel>
        <TabPanel value={value} index={6}>
          <div className="flex  gap-2 flex-wrap items-center justify-start">
            <TestSeriesCard />
            <TestSeriesCard />

          </div>
        </TabPanel>
      </Box>
    </div>
  );
}
