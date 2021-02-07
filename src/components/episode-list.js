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
import React from "react";

export default function EpisodeList({ data, type }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

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
          <IconButton edge="end" aria-label="add" onClick={handleClick}>
            <AddIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    ));
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
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
        <MenuItem onClick={handleClose}>Favorite</MenuItem>
        <MenuItem onClick={handleClose}>Watch</MenuItem>
        <MenuItem onClick={handleClose}>Must-Watch</MenuItem>
      </Menu>
    </div>
  );
}
