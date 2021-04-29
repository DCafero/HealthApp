import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TabPanel from "./TabPanel";
import TodayBody from "./Today/TodayBody";
import ReportBody from "./Report/ReportBody";
import ProfileBody from "./Profile/ProfileBody";
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

function MainBody() {
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
          variant='fullWidth'
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Today" {...a11yProps(0)} />
          <Tab label="Report" {...a11yProps(1)} />
          <Tab label="Profile" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <TodayBody></TodayBody>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ReportBody></ReportBody>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ProfileBody></ProfileBody>
      </TabPanel>
    </div>
  );
}

export default MainBody;
