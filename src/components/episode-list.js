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
import { connect } from "react-redux";
import { addFavorite } from "../redux/actions";

let EpisodeList = ({ data, type }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
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
    console.log(name, id);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (action) => {
    if (action === "FAVORITE") {
      addFavorite();
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
        <MenuItem onClick={() => handleClose("FAVORITE")}>Favorite</MenuItem>
        <MenuItem onClick={() => handleClose("WATCH")}>Watch</MenuItem>
        <MenuItem onClick={() => handleClose("MUST_WATCH")}>
          Must-Watch
        </MenuItem>
      </Menu>
    </div>
  );
};

const mapDispatchToProps = {
  favorite: addFavorite,
};

EpisodeList = connect(null, mapDispatchToProps)(EpisodeList);

export default EpisodeList;
