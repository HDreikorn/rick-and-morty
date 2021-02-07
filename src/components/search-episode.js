import React, { useState } from "react";
import { useLazyQuery, gql } from "@apollo/client";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  Button,
  FormHelperText,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  episodeBtn: {
    margin: theme.spacing(2),
  },
}));

const EPISODE_SEARCH_QUERY = gql`
  query EpisodeSearchQuery($filter: String!) {
    episodes(filter: { name: $filter }) {
      results {
        name
        id
      }
    }
  }
`;

const RANDOM_EPISODE_QUERY = gql`
  query RandomEpisodeQuery($ids: [ID!]!) {
    episodesByIds(ids: $ids) {
      id
      name
    }
  }
`;

export default function SearchEpisode() {
  const classes = useStyles();
  const [searchFilter, setSearchFilter] = useState("");
  const [executeSearch, { data }] = useLazyQuery(EPISODE_SEARCH_QUERY);
  const [executeRandom, { data: randomData }] = useLazyQuery(
    RANDOM_EPISODE_QUERY
  );

  // From MDN: Non inclusive max
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  const handleSearch = () => {
    executeSearch({
      variables: { filter: searchFilter },
    });
  };

  const handleRandom = () => {
    let randomNums = [];
    for (let i = 0; i < 6; i++) {
      randomNums.push(getRandomInt(42));
    }
    executeRandom({
      variables: { ids: randomNums },
    });
  };

  return (
    <div>
      <FormControl fullWidth variant="outlined">
        <InputLabel htmlFor="search-episodes">Search</InputLabel>
        <OutlinedInput
          id="search-episodes"
          value={searchFilter}
          onChange={(e) => {
            setSearchFilter(e.target.value);
          }}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
          labelWidth={122}
        />
        <FormHelperText>
          Find episode by name, if left blank first 20 will show!
        </FormHelperText>
      </FormControl>
      <Button
        variant="contained"
        onClick={handleSearch}
        className={classes.episodeBtn}
      >
        Find
      </Button>
      <Button variant="contained" color="secondary" onClick={handleRandom}>
        Generate 5 Randoms
      </Button>
      {console.log(randomData)}
    </div>
  );
}
