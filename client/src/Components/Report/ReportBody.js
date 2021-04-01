import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TabPanel from "../TabPanel";
import DataReportCard from "./DataReportCard";

const fibbonacciNumbers = [
  {
    val: 1,
  },
  {
    val: 1,
  },
  {
    val: 2,
  },
  {
    val: 3,
  },
  {
    val: 5,
  },
  {
    val: 8,
  },
  {
    val: 13,
  },
  {
    val: 21,
  },
  {
    val: 34,
  },
  {
    val: 55,
  }
];

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

function ReportBody() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Pain" {...a11yProps(0)} />
          <Tab label="Anxiety" {...a11yProps(1)} />
          <Tab label="Depression" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <DataReportCard title="Pain Body" />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <DataReportCard title="Anxiety Body" />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <DataReportCard title="Depression Body" data={fibbonacciNumbers} />
      </TabPanel>
    </div>
  );
}

export default ReportBody;
