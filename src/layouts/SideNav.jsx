import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import IconButton from '@mui/joy/IconButton';
import Menu from '@mui/icons-material/Menu';

import Drawer from '@mui/joy/Drawer';

import * as React from 'react';

const NavSider = () => {
    const [open, setOpen] = React.useState(true);

    return (
        <>
            <IconButton variant="outlined" color="neutral" onClick={() => setOpen(true)}>
                <Menu />
            </IconButton>
            <Drawer open={open} onClose={() => setOpen(false)}>
                <Box sx={{
                    width: '220px',
                    pl: '24px'
                }}>
                    <List sx={{
                        '--List-insetStart': '32px',
                        '--ListItem-paddingY': '0px',
                        '--ListItem-paddingRight': '16px',
                        '--ListItem-paddingLeft': '21px',
                        '--ListItem-startActionWidth': '0px',
                        '--ListItem-startActionTranslateX': '-50%',
                    }}>
                        <ListItem>
                            <ListItemButton>TEST</ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton>TEST</ListItemButton>
                        </ListItem><ListItem>
                            <ListItemButton>TEST</ListItemButton>
                        </ListItem><ListItem>
                            <ListItemButton>TEST</ListItemButton>
                        </ListItem><ListItem>
                            <ListItemButton>TEST</ListItemButton>
                        </ListItem><ListItem>
                            <ListItemButton>TEST</ListItemButton>
                        </ListItem>
                    </List>
                </Box >
            </Drawer>
        </>
    )
}

export default NavSider