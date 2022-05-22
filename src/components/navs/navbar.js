import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SportsSoccerOutlinedIcon from "@mui/icons-material/SportsSoccerOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Matchs from "../matchs_day/matchs";
import style from "../matchs_day/cards-style.css";
import navbar from "../navs/navbar.css"
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import News from "../news/news";
import Competitions from "../competitions/competitions";
import Negociations from "../negociations/negociations";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Futebol APP
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <CloseOutlinedIcon />
            ) : (
              <CloseOutlinedIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <Link className="link" to="/">
            <ListItem button>
              <ListItemIcon>
                <SportsSoccerOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Jogos" />
            </ListItem>
          </Link>
          <Link className="link" to="/competitions">
            <ListItem button>
              <ListItemIcon>
                <EmojiEventsOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Competições" />
            </ListItem>
          </Link>
          <Link className="link" to="/news">
            <ListItem button>
              <ListItemIcon>
                <NewspaperOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Notícias" />
            </ListItem>
          </Link>
          <Link className="link" to="/negociations">
            <ListItem button>
              <ListItemIcon>
                <TimelineOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Mercado da bola" />
            </ListItem>
          </Link>
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Routes>
          <Route path="/" element={<Matchs />}></Route>
          <Route path="/news" element={<News />}></Route>
          <Route path="/competitions" element={<Competitions />}></Route>
          <Route path="/negociations" element={<Negociations />}></Route>
        </Routes>
      </Main>
    </Box>
  );
}
