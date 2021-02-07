import {
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  IconButton,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import React from "react";

export default function EpisodeList({ data, type }) {
  const mapEpisodes = () => {
    let dataToMap = [];
    if (type === "random") {
      dataToMap = data.episodesByIds;
    } else {
      // type === "filtered"
      dataToMap = data.episodes.results;
    }
    return dataToMap.map((episode) => (
      <ListItem key={episode.id}>
        <ListItemText primary={episode.name} />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="add">
            <AddIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    ));
  };

  return <div>{data && <List>{mapEpisodes()}</List>}</div>;
}
