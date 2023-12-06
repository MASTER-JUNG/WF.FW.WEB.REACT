import { Box } from "@mui/joy";
import { Drawer } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import * as React from 'react';
import { Outlet } from "react-router-dom";
import HeaderLayout from './HeaderLayout';
import SideLayout from "./SideLayout";

const RootLayout = () => {

    const [open, setOpen] = React.useState(false);
    const [marginLeft, setMarginLeft] = React.useState(0);
    const theme = useTheme();

    const changeOpenState = (val) => {
        if(val) {
            setMarginLeft(300)
        } else {
            setMarginLeft(0)
        }
        setOpen(val)
    }

    React.useEffect(() => {
    }, [open])

    return (
        <>
            <Box sx={{ display: `flex`, width: `100%` }}>
                <HeaderLayout open={open} theme={theme} changeOpenState={changeOpenState} />
            </Box >
            <Drawer
                sx={{
                    width: `300px`,
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                        width: `300px`,
                        boxSizing: "border-box"
                    }
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <Box sx={{ pl: `24px` }}>
                    <SideLayout changeOpenState={changeOpenState} />
                </Box>
            </Drawer>
            <Box sx={{ marginLeft:{marginLeft}, marginTop:`300px`}}>
            <Outlet />
            </Box>
        </>
    )
}

export default RootLayout