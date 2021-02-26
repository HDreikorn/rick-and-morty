import React, { useContext } from "react";
import {
  List,
  ListItemText,
  ListItem,
  ListItemSecondaryAction,
  ListSubheader,
  IconButton,
  Card,
  Typography,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { EpisodeListContext } from "../context/episode-lists-context";

export default function EpisodeTrackingCard({ title, list }) {
  const { dispatch } = useContext(EpisodeListContext);

  const mapEpisodesToList = () => {
    if (!list || list.length < 1) {
      return (
        <ListItem>
          <Typography data-testid={`default-test-${title}`}>
            Nothing to see here...yet. Use search on left to add.
          </Typography>
        </ListItem>
      );
    }
    return list.map((episode) => (
      <ListItem key={`list-item${episode.id}`}>
        <ListItemText primary={episode.name} />
        <ListItemSecondaryAction>
          <IconButton
            edge="end"
            aria-label="add"
            onClick={(e) => handleDelete(e, episode.name, episode.id)}
          >
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    ));
  };

  const handleDelete = (e, name, id) => {
    if (title === "watched") {
      dispatch({ type: "DELETE_WATCHED", payload: { name: name, id: id } });
    } else if (title === "favorites") {
      dispatch({ type: "DELETE_FAVORITE", payload: { name: name, id: id } });
    } else if (title === "must-watch") {
      dispatch({
        type: "DELETE_MUST_WATCH",
        payload: { name: name, id: id },
      });
    }
  };

  return (
    <Card>
      <List subheader={<ListSubheader>{title.toUpperCase()}</ListSubheader>}>
        {mapEpisodesToList()}
      </List>
    </Card>
  );
}
