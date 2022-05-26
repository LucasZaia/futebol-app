import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import competitions from "./competitions.css";
import Grid from "@mui/material/Grid";
import ImageBR from "../../imgs/00 Bundesliga.png";
import { Link } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import axios from "axios";

export default function Competitions() {

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
        console.log(resp.data.competitions);
    });
  return (
    <div>
      <div className="search-leagues">
        <h3>Competições</h3>
      </div>
      <Container maxWidth="md">
        <Box>
          <Grid item xlg={2}>
            <div className="competition">
              <Link to="/">
                <img src={ImageBR} className="img" />
              </Link>
            </div>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}
