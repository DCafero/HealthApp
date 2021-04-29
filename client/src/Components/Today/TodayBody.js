import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import DiscreteSlider from "../DiscreteSlider";
import DropDownInput from "../DropDownInput";
import AnxietyQuestionnaire from "../AnxietyQuestionnaire";
import DepressionQuestionnaire from "../DepressionQuestionnaire";

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
        <Box p={8}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 500,
  },
  tabs: {
    borderRight: `2px solid ${theme.palette.divider}`,
  },
}));

export default function TodayBody() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="standard"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Pain" {...a11yProps(0)} />
        <Tab label="Anxiety" {...a11yProps(1)} />
        <Tab label="Depression" {...a11yProps(2)} />
        <Tab label="Sleep" {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <DiscreteSlider />
        <div />
        <div />

        <DropDownInput />
      </TabPanel>
      <TabPanel value={value} index={1}>
        ANXIETY SCORE: Questionnaire
        <div />
        <AnxietyQuestionnaire />
      </TabPanel>
      <TabPanel value={value} index={2}>
        DEPRESSION SCORE: Questionnaire
        <div />
        <DepressionQuestionnaire />
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
    </div>
  );
}
