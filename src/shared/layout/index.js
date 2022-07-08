import * as React from "react";
import Header from "./header"
import SideBar from "./sideBar"
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

export default function Layout({ children }) {
    const drawerWidth = 80;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (<>
        <CssBaseline />
        <Header handleDrawerToggle={handleDrawerToggle} drawerWidth={drawerWidth} />
        <SideBar handleDrawerToggle={handleDrawerToggle} drawerWidth={drawerWidth} mobileOpen={mobileOpen} />
        <Box
            component="main"
            sx={{
                flexGrow: 1,
                p: 3,
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                marginLeft: "auto"
            }}
        >
            {children}
        </Box>
    </>
    );
}
