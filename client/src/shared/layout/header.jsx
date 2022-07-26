import * as React from "react";
import AppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import Divider from "@mui/material/Divider";
import ArchiveIcon from "@mui/icons-material/Archive";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Avatar from "@mui/material/Avatar";
import { userIcon } from "../../utils/images";
import Link from "@mui/material/Link";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";

import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";

export default function Header({ handleDrawerToggle, drawerWidth }) {
  const [cookies, setCookie] = useCookies();
  const token=cookies.accessToken;
  const user=JSON.parse(atob(token.split(".")[1]));
  const history=useHistory();

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));
  const StyledMenu = styled((props) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      {...props}
    />
  ))(({ theme }) => ({
    "& .MuiPaper-root": {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 180,
      color:
        theme.palette.mode === "light"
          ? "rgb(55, 65, 81)"
          : theme.palette.grey[300],
      boxShadow:
        "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
      "& .MuiMenu-list": {
        padding: "4px 0",
      },
      "& .MuiMenuItem-root": {
        "& .MuiSvgIcon-root": {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        "&:active": {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity
          ),
        },
      },
    },
  }));
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const ariaLabel = { "aria-label": "description" };
  const handleLogout = () => {
    setCookie("accessToken", "");
    history.push("/");
    
  }
  return (
    <AppBar
      position="static"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
      className="header"
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <div className="header-top">
          <div className="header-search">
            <Search className="header-search-input">
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </div>
          <div className="user-info">
            <div className="user-dropdown">
              <Button
                id="demo-customized-button"
                aria-controls={open ? "demo-customized-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                variant="#C9CED6"
                color="#C9CED6"
                className="user-dropdown"
                disableElevation
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
                spacing={2}
              >
                <div>
                  <h3>{user.name}</h3>
                  <h6>{user.department}</h6>
                </div>
                <Avatar alt="Remy Sharp" src={userIcon} />
              </Button>
              <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                  "aria-labelledby": "demo-customized-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose} disableRipple>
                  <EditIcon />
                  Edit
                </MenuItem>
                <MenuItem onClick={handleClose} disableRipple>
                  <FileCopyIcon />
                  Duplicate
                </MenuItem>
                <Divider sx={{ my: 0.5 }} />
                <MenuItem onClick={handleClose} disableRipple>
                  <ArchiveIcon />
                  Archive
                </MenuItem>
                <MenuItem onClick={handleClose} disableRipple>
                  <MoreHorizIcon />
                  More
                </MenuItem>
              </StyledMenu>
            </div>
            <div className="user-options">
              <div>
                <Link href="#" color="#C9CED6" underline="none">
                  <Badge color="secondary" variant="dot">
                    <NotificationsOutlinedIcon />
                  </Badge>
                </Link>
              </div>
              <div>
                
                <Link  color="#C9CED6" underline="none" onClick={()=>handleLogout()}>
                  <LogoutIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
}
