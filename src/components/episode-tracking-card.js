import React from "react";
import {
  List,
  ListItemText,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListSubheader,
  IconButton,
  Card,
} from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import DeleteIcon from "@material-ui/icons/Delete";

export default function EpisodeTrackingCard({ title }) {
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
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="add">
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    </Card>
  );
}
