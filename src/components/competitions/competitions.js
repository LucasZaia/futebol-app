import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import competitions from "./competitions.css";
import Grid from "@mui/material/Grid";
import ImageBR from "../../imgs/00 Bundesliga.png";
import { Link } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import axios from "axios";
import { useState } from "react";
import { margin } from "@mui/system";

export default function Competitions() {


  const [leagues, setLeagues] = useState();

  const request = axios.create({
    baseURL: "http://api.football-data.org/v2/",
  });

  request
    .get("competitions", {
      headers: {
        "X-Auth-Token": "ce90310edbf042dfabceb68624d6fda8",
        Accept: "application/json",
      },
    })
    .then(function (resp) {
        setLeagues(resp.data.competitions);
        console.log(resp.data.competitions);
    });
  return (
    <div>
      <div className="search-leagues">
        <h3>Competições</h3>
      </div>
      <Container maxWidth="md">
        <Grid className="contains" container spacing={2}>
          {leagues?.map((cups) =>  (
            <Grid key={cups.id} item xlg={3}>
              <div className="competition">
                <Link className="link" to="/">
                  {console.log(leagues.length)}
                  <p key={cups.id}>{cups.name}</p>
                  <img src={ImageBR} className="img" />
                </Link>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
