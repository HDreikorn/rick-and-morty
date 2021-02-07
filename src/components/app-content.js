import React from "react";
import { Grid } from "@material-ui/core";
import EpisodeTrackingCard from "./episode-tracking-card";
import { makeStyles } from "@material-ui/core/styles";
import SearchEpisode from "./search-episode";

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    padding: "2rem",
  },
}));

export default function AppContent() {
  const classes = useStyles();
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
        <EpisodeTrackingCard title={"watched"} />
      </Grid>
      <Grid item xs={6} md={3}>
        <EpisodeTrackingCard title={"favorites"} />
      </Grid>
      <Grid item xs={6} md={3}>
        <EpisodeTrackingCard title={"must-Watch"} />
      </Grid>
    </Grid>
  );
}
