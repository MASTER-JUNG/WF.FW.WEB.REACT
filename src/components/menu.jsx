import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import DashboardIcon from '@mui/icons-material/Dashboard'

const menu = () => {

    const menuList = ["A", "B", "C"]

    return (
        <ListItemButton>
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="DashBoard" />
        </ListItemButton>
    )
}

export default menu
