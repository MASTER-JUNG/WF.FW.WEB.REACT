import { KeyboardArrowDown } from '@mui/icons-material'
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import { Divider, IconButton, List, ListItem, ListItemButton, Typography } from "@mui/joy"
import { styled } from "@mui/material/styles"
import * as React from 'react'
import * as style from './SideLayoutStyle'
import { Link } from 'react-router-dom'

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
}));
const parentMenuList = [
    {
        menu_id: '1',
        menu_name: '시스템',
        menu_type: 'P'
    },
    {
        menu_id: '2',
        menu_name: '자율운영',
        menu_type: 'P'
    }
]

const childMenuList = [
    {
        parent_menu_id: '1',
        menu_id: '1',
        menu_name: '메뉴관리',
        menu_type: 'C',
        program_name: 'menu',
    },
    {
        parent_menu_id: '1',
        menu_id: '2',
        menu_name: '사용자 관리',
        menu_type: 'C',
        program_name: 'user',
    },
    {
        parent_menu_id: '2',
        menu_id: '3',
        menu_name: 'MONITORING 관리',
        menu_type: 'C'
    },
    {
        parent_menu_id: '2',
        menu_id: '4',
        menu_name: 'GMES 관리',
        menu_type: 'C'
    }
]

const Menu = () => {
    const [open, setOpen] = React.useState({ id: '', isOpen: false })

    const changeOpenStates = (value) => {
        setOpen(value);
    }

    const MenuIsOpen =(m, o) => {
        if(o.id === m.menu_id && !o.isOpen || o.id !== m.menu_id)
            return true
        else
            return false
    }

    return parentMenuList.map(m => {
        return (
            <ListItem
                key={m.menu_id}
                nested
                sx={{ my: 1 }}
            >
                <ListItemButton onClick={() => changeOpenStates({ id: m.menu_id, isOpen: MenuIsOpen(m,open) ? true: false })}>
                    <IconButton variant="plain" size="sm" color="neutral">
                        <KeyboardArrowDown sx={{ transform: (open.id === m.menu_id && open.isOpen) ? 'initial' : 'rotate(-90deg)' }} />
                    </IconButton>
                    <Typography level="inherit" sx={{ fontWeight: (open.id === m.menu_id && open.isOpen) ? 'bold' : undefined, color: (open.id === m.menu_id && open.isOpen) ? 'text.primary' : 'inherit', }}>
                        {m.menu_name}
                    </Typography>
                </ListItemButton>
                {(open.id === m.menu_id && open.isOpen) && (
                    <ChildMenu parentId={m.menu_id}></ChildMenu>
                )}
            </ListItem>
        )
    })
}

const ChildMenu = ({ parentId }) => {
    const [selected, setSelected] = React.useState({ id: '', isSelected: false });
    return (
        childMenuList.filter(x => x.parent_menu_id === parentId).map(m => {
            return (
                <List key={m.menu_id} sx={{ '--ListItem-paddingY': '8px' }}>
                    <ListItem sx={{marginLeft:`24px`}}>
                        <ListItemButton sx={{borderLeftColor:`divider`, paddingLeft:`30px`}} selected={selected.id === m.menu_id && selected.isSelected}
                            onClick={() => setSelected({ id: m.menu_id, isSelected: true })}>
                            
          <Link to="user">View Products Page</Link>
                                <Typography level="inherit" >{m.menu_name}</Typography>
                        </ListItemButton>
                    </ListItem>
                </List>
            )
        })
    )
}

const SideLayout = ({ changeOpenState }) => {
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <DrawerHeader>
                <IconButton onClick={() => { changeOpenState(false) }}>
                    <ChevronLeftIcon />
                </IconButton>
            </DrawerHeader>
            <Divider />

            <List
                size="sm"
                sx={style.ListStyle}
            >
                <Menu />
            </List>
        </>
    )
}

export default SideLayout

