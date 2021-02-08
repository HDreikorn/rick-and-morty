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
  Typography,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

export default function EpisodeTrackingCard({ title, list }) {
  const mapEpisodesToList = () => {
    if (!list || list.length < 1) {
      return (
        <ListItem>
          <Typography>
            Nothing to see here...yet. Use search on left to add.
          </Typography>
        </ListItem>
      );
    }
    return list.map((episode) => (
      <ListItem key={`list-item${episode.id}`}>
        <ListItemText primary={episode.name} />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="add">
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    ));
  };

  return (
    <Card>
      <List subheader={<ListSubheader>{title.toUpperCase()}</ListSubheader>}>
        {mapEpisodesToList()}
      </List>
    </Card>
  );
}
