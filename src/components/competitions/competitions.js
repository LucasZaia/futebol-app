import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import competitions from "./competitions.css";
import { styled, alpha } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import ImageBR from "../../imgs/00 Bundesliga.png";
import { Link } from "react-router-dom";
import { InputBase } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

export default function Competitions() {

  return (
    <div>
      <div className="search-leagues">
      </div>
      <Container maxWidth="lg">
        <Box>
          <Grid container spacing={2}>
            <Grid item xlg={2}>
              <div className="competition">
                <img src={ImageBR} width="100" height="100" />
              </div>
            </Grid>
            <Grid item xlg={2}>
              <div className="competition">
                <img src={ImageBR} width="100" height="100" />
              </div>
            </Grid>
            <Grid item xlg={2}>
              <Link to="/">
                <div className="competition">
                  <img src={ImageBR} width="100" height="100" />
                </div>
              </Link>
            </Grid>
            <Grid item xlg={2}>
              <div className="competition">
                <img src={ImageBR} width="100" height="100" />
              </div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}
