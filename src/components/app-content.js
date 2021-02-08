import React, { useContext } from "react";
import { Grid } from "@material-ui/core";
import EpisodeTrackingCard from "./episode-tracking-card";
import { makeStyles } from "@material-ui/core/styles";
import SearchEpisode from "./search-episode";
import { EpisodeListContext } from "../context/episode-lists-context";

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    padding: "2rem",
  },
}));

export default function AppContent() {
  const classes = useStyles();
  const { state } = useContext(EpisodeListContext);

  return (
    <Grid
      container
      spacing={3}
      justify="center"
      alignItems="center"
      className={classes.cardContainer}
    >
      <Grid item xs={6} md={3}>
        <SearchEpisode />
      </Grid>
      <Grid item xs={6} md={3}>
        <EpisodeTrackingCard title={"watched"} list={state.watched} />
      </Grid>
      <Grid item xs={6} md={3}>
        <EpisodeTrackingCard title={"favorites"} list={state.favorite} />
      </Grid>
      <Grid item xs={6} md={3}>
        <EpisodeTrackingCard title={"must-watch"} list={state.mustWatch} />
      </Grid>
    </Grid>
  );
}
