import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import styles from "./cards-style.css";
import { useState } from "react";
import axios from "axios";
import imageAL from "../../imgs/00 Bundesliga.png";
import imageBR from "../../imgs/Campeonato Brasileiro Série A.png";
import imageFR from "../../imgs/Ligue1_Uber_Eats_logo.png";
import imagePT from "../../imgs/00 Liga NOS.PNG";
import imageITA from "../../imgs/00 Serie A Tim.png";
import imageENG from "../../imgs/00 Premier League.png";
import imageENG2 from "../../imgs/02 Sky Bet Championship.png";
import imageHOL from "../../imgs/00 Eredivisie.png";
import imageESP from "../../imgs/LaLiga.png";
import imageLIB from "../../imgs/70 Copa CONMEBOL Libertadores.png";
import imageUCL from "../../imgs/UEFA CHAMPIONS LEAGUE 4.png";


function ConvertDate(time) {
  const dateStr = new Date(time).toLocaleString("pt-BR", {
    timeZone: "America/Sao_Paulo",
  });
  return dateStr;
}

function validStatusMatch(matchInfo) {
  switch (matchInfo) {
    case "SCHEDULED":
      return "PARTIDA AGENDADA";
    case "FINISHED":
      return "ENCERRADO";
    case "IN_PLAY":
      return "EM ANDAMENTO";
    case "PAUSED":
      return "INTERVALO";
  }
}

function validCompetition(competition) {
  switch (competition) {
    case "Campeonato Brasileiro Série A":
      return imageBR;
    case "Ligue 1":
      return imageFR;
    case "Primeira Liga":
      return imagePT;
    case "Premier League":
      return imageENG;
    case "Serie A":
      return imageITA;
    case "Championship":
      return imageENG2;
    case "Eredivisie":
      return imageHOL;
    case "Copa Libertadores":
      return imageLIB;
    case "UEFA Champions League":
      return imageUCL;
    case "Bundesliga":
      return imageAL;
    case "Primera Division":
      return imageESP;
  }
}

function Matchs() {
  const [news, setNews] = useState();

  const request = axios.create({
    baseURL: "https://api.football-data.org/v2/",
  });

  request
    .get("matches", {
      headers: {
        "X-Auth-Token": "ce90310edbf042dfabceb68624d6fda8",
        "Accept": "application/json"
      },
    })
    .then(function (resp) {
      setNews(resp.data.matches);
    });

  return (
    <div>
      <CssBaseline />
      <h3>Jogos</h3>
      <Container maxWidth="xl">
        <div
          className="card-group"
          sx={{ sm: "none", md: "none", xlg: "block" }}
        >
          {news?.map((n) => (
            <Card sx={{ width: 700 }} className="cards">
              <CardContent>
                <div>
                  <img
                    src={validCompetition(n.competition.name)}
                    className="img-competition"
                  />
                </div>
                <Typography gutterBottom variant="body2" component="div">
                  {n.competition.name}
                </Typography>
                <Typography gutterBottom variant="h8" component="div">
                  {n.homeTeam.name} {n.score.fullTime.homeTeam} X{" "}
                  {n.score.fullTime.awayTeam} {n.awayTeam.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {ConvertDate(n.utcDate)}
                </Typography>
              </CardContent>
              <CardActions>
                <p>{validStatusMatch(n.status)}</p>
              </CardActions>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Matchs;
