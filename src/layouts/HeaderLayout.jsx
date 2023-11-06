import MenuIcon from "@mui/icons-material/Menu"
import { IconButton, Typography } from "@mui/joy"
import { AppBar, Toolbar } from "@mui/material"

const HeaderLayout = ({ open, theme, changeOpenState }) => {
    return (
        <>
            <AppBar position="fixed" open={open} sx={{
                ...(open && {
                    width: `calc(100% - 300px)`,
                    marginLeft: `300px`,
                    transition: theme.transitions.create(["margin", "width"], {
                        easing: theme.transitions.easing.easeOut,
                        duration: theme.transitions.duration.enteringScreen
                    })
                })
            }}>
                <Toolbar>
                    <IconButton
                        color="neutral"
                        edge="start"
                        onClick={() => { changeOpenState(true) }}
                        sx={{
                            mr: 2,
                            ":hover": { backgroundColor: `#1976d2`, transition: `0.7s` },
                            ...(open && { display: "none" })
                        }}
                    >
                        <MenuIcon sx={{ color: 'white' }} />
                    </IconButton>
                    <Typography color="string">
                        Heder 입니다
                    </Typography>
                </Toolbar>
            </AppBar >
        </>
    )
}

export default HeaderLayout
