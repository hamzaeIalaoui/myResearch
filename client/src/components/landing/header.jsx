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
import { msalLogin } from '../../server_assets/auth-provider';
import { useCookies } from 'react-cookie';
import axios from "axios";


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
  const [access_token, setAccessToken] = React.useState('');
  const theme = useTheme();
  const [cookies, setCookie] = useCookies();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  React.useEffect(() => {
    if (access_token) {
      window.location.href = "http://localhost:3000/home";
    }
  }, [access_token]);

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
  const handleLogin = async () => {
    const data = await msalLogin();


    if (data) {
      await axios.post("http://localhost:4000/login", {
        email: process.env.REACT_APP_EMAIL,
        password: process.env.REACT_APP_PASSWORD,
      }).then((res) => {

        axios.post("http://localhost:3001/api/users/sign-in-outlook", {
          accessToken: data.accessToken,

        },
          {
            headers: {
              'Authorization': "Bearer " + res.data.accessToken,
              'Content-Type': 'application/json'


            }
          }

        ).then((res) => {
          setCookie('accessToken', res.data);
          setAccessToken(res.data);


        }
        ).catch((err) => {
          console.log(err);
        }
        )



      }
      ).catch((err) => {
        console.log(err);
      }
      )










    }
  }

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
                <Button style={theme.palette.primary.navButton} onClick={() => handleLogin()}>
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
