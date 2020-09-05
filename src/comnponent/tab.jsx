import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SingleChanel from "./singlechanel";
import Home from "./home";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <div>
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="All Chanels" />
        <Tab label="Single Chanel" children="SinleChanel"/>
        <Tab label="Compare Two" />
      </Tabs>
  
    </Paper>
        <Home value={value} index={0}>
        Item One
      </Home>
      </div>
  );
}

