import { Collapse } from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import StarBorder from '@mui/icons-material/StarBorder';
import SendIcon from '@mui/icons-material/Send';
import List from '@mui/material/List';
import * as React from 'react'

const menuList = [{
    menu_id: '09c56280-4083-11ee-ad21-b04f13ecab01T',
    menu_name: '시스템',
    menu_type: 'P',
    isChild: true
}, {
    menu_id: '09c56280-4083-11ee-ad21-b04f13ecab012',
    menu_name: '메뉴관리',
    menu_type: 'C',
    isChild: false
}]

const Menu = ({ m }) => {
    return (
        <>
            <ListItemButton key={m.menu_id}>
                <ListItemText primary={m.menu_name} />
            </ListItemButton>
            {
                m.isChild && <SubMenu m={m} />}
        </>
    )
}

const SubMenu = ({ m }) => {
    return (
        <>
            <ListItemButton key={m.menu_id}>
                <ListItemIcon>
                    <SendIcon />
                </ListItemIcon>
                <ListItemText primary={m.menu_name} />
            </ListItemButton>
        </>
    )
}

const listitems = (
    <>
        {menuList.map(m => {
            return (
                <Menu key={m.menu_id} m={m}></Menu>
            )
        })}
    </>
);


export default listitems