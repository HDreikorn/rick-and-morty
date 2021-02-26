import {
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  IconButton,
  Menu,
  MenuItem,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { EpisodeListContext } from "../context/episode-lists-context";
import React, { useContext } from "react";

export default function EpisodeList({ data, type }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const {
    state: { favorite, watched, mustWatch },
    dispatch,
  } = useContext(EpisodeListContext);
  const [selectedEpisode, setSelectedEpisode] = React.useState({});

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
          <IconButton
            edge="end"
            aria-label="add"
            onClick={(e) => handleClick(e, episode.name, episode.id)}
          >
            <AddIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    ));
  };

  const handleClick = (event, name, id) => {
    setSelectedEpisode({ name: name, id: id });
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (action) => {
    let found = false;
    // Determine if episode is duplicate in list
    if (action === "ADD_FAVORITE") {
      found = favorite.find((episode) => episode.id === selectedEpisode.id);
    } else if (action === "ADD_WATCHED") {
      found = watched.find((episode) => episode.id === selectedEpisode.id);
    } else if (action === "ADD_MUST_WATCH") {
      found = mustWatch.find((episode) => episode.id === selectedEpisode.id);
    }

    if (found) {
      console.log("found!");
    } else {
      //Otherwise dispatch
      dispatch({ type: action, payload: selectedEpisode });
    }

    setAnchorEl(null);
  };

  return (
    <div>
      {data && <List>{mapEpisodes()}</List>}
      <Menu
        id="add-to-list-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleClose("ADD_FAVORITE")}>
          Favorite
        </MenuItem>
        <MenuItem onClick={() => handleClose("ADD_WATCHED")}>Watched</MenuItem>
        <MenuItem onClick={() => handleClose("ADD_MUST_WATCH")}>
          Must-Watch
        </MenuItem>
      </Menu>
    </div>
  );
}
