import React from "react";
import clsx from "clsx";

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import SearchIcon from "@material-ui/icons/Search";
import LiveTvOutlinedIcon from "@material-ui/icons/LiveTvOutlined";
import SettingsApplicationsOutlinedIcon from "@material-ui/icons/SettingsApplicationsOutlined";

// CUSTOMS
import useToggle from "./customs/hooks/useToggle";

// statics
import useStyles from "./customs/styles/MainSideBar";

export default function MiniDrawer({ children }) {
  const classes = useStyles();
  const [open, toggleOpen] = useToggle(); // default to false

  return (
    <div className={classes.root}>
      <CssBaseline />

      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={toggleOpen}>
            {open ? <ChevronLeftIcon /> : <MenuIcon />}
          </IconButton>
        </div>
        <Divider />

        <List className={classes.linksRoot}>
          <ListItem button>
            <ListItemIcon className={classes.icnBtn}>
              <SearchIcon />
            </ListItemIcon>
          </ListItem>

          <ListItem button>
            <ListItemIcon className={classes.icnBtn}>
              <HomeOutlinedIcon />
            </ListItemIcon>
          </ListItem>

          <ListItem button>
            <ListItemIcon className={classes.icnBtn}>
              <LiveTvOutlinedIcon />
            </ListItemIcon>
          </ListItem>

          <ListItem button>
            <ListItemIcon className={classes.icnBtn}>
              <SettingsApplicationsOutlinedIcon />
            </ListItemIcon>
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
}
