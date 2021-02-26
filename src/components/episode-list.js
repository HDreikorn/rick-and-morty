import {
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  IconButton,
  Menu,
  MenuItem,
  Snackbar,
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import AddIcon from "@material-ui/icons/Add";
import { EpisodeListContext } from "../context/episode-lists-context";
import React, { useContext } from "react";
import Alert from "@material-ui/lab/Alert";

export default function EpisodeList({ data, type }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
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
      setOpen(true);
    } else {
      //Otherwise dispatch
      dispatch({ type: action, payload: selectedEpisode });
    }

    setAnchorEl(null);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Alert onClose={handleSnackbarClose} severity="info">
          This episode is already in this list! 🐱‍🚀
        </Alert>
      </Snackbar>
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
