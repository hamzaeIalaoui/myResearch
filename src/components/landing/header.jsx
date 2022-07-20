import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useTheme } from "@material-ui/core";
import { Logo, microsoftIcon } from "../../utils/images";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";

const drawerWidth = 240;
const navItems = [
  "Home",
  "Features",
  "Solutions",
  "How it Works",
  "Our Sponsors",
  "Contact Us",
  "Footer",
];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const theme = useTheme();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <div style={theme.palette.primary.navLogo}>
          <img style={theme.palette.primary.navLogoImg} src={Logo} alt="" />
        </div>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <AppBar component="nav" style={theme.palette.primary.navMain}>
        <Toolbar style={theme.palette.primary.navMain}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <div style={theme.palette.primary.navLogo}>
              <img style={theme.palette.primary.navLogoImg} src={Logo} alt="" />
            </div>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Stack direction="row" spacing={2} className="align-items-center">
              <ul className="d-flex gap-3 ">
                {navItems.map((item) => (
                  <li>
                    <Link style={theme.palette.primary.navItems} key={item}>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
              <Stack>
                <Button style={theme.palette.primary.navButton}>
                  <span className="d-inline-flex">
                    <img src={microsoftIcon} alt="" />
                  </span>
                  Login with Microsoft
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
}

export default DrawerAppBar;
