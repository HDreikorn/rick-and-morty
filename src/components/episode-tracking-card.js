import React from "react";
import {
  List,
  ListItemText,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListSubheader,
  Card,
  Button,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import CheckIcon from "@material-ui/icons/Check";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  btn: {
    margin: theme.spacing(2),
  },
}));

export default function EpisodeTrackingCard({ title }) {
  const classes = useStyles();

  return (
    <Card>
      <List subheader={<ListSubheader>{title.toUpperCase()}</ListSubheader>}>
        <ListItem>
          <ListItemIcon>
            <CheckIcon />
          </ListItemIcon>
          <ListItemText id="switch-list-label-wifi" primary="Wi-Fi" />
          <ListItemSecondaryAction>moo</ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckIcon />
          </ListItemIcon>
          <ListItemText id="switch-list-label-bluetooth" primary="Bluetooth" />
          <ListItemSecondaryAction>mee</ListItemSecondaryAction>
        </ListItem>
      </List>
      <Button
        variant="contained"
        startIcon={<AddIcon />}
        className={classes.btn}
      >
        Add Episode
      </Button>
    </Card>
  );
}
