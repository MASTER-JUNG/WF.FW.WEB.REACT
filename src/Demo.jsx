import * as React from 'react';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton, { listItemButtonClasses } from '@mui/joy/ListItemButton';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';

const parentMenuList = [
    {
        menu_id: '1',
        menu_name: '시스템',
        meuu_type: 'P'
    },
    {
        menu_id: '2',
        menu_name: '자율운영',
        meuu_type: 'P'
    }
]

const childMenuList = [
    {
        parent_menu_id: '1',
        menu_id: '1',
        menu_name: '메뉴관리',
        meuu_type: 'C'
    },
    {
        parent_menu_id: '1',
        menu_id: '2',
        menu_name: '사용자 관리',
        meuu_type: 'C'
    },
    {
        parent_menu_id: '2',
        menu_id: '3',
        menu_name: 'MONITORING 관리',
        meuu_type: 'C'
    },
    {
        parent_menu_id: '2',
        menu_id: '4',
        menu_name: 'GMES 관리',
        meuu_type: 'C'
    }
]


const ChildMenu = ({ parentId }) => {
    const [selected, setSelected] = React.useState({ id: '', isSelected: false });
    return (
        childMenuList.filter(x => x.parent_menu_id === parentId).map(m => {

            return (
                <List key={m.menu_id} sx={{ '--ListItem-paddingY': '8px' }}>
                    <ListItem >
                        <ListItemButton selected={selected.id === m.menu_id && selected.isSelected}
                            onClick={() => setSelected({ id: m.menu_id, isSelected: true })}>
                            <Typography level="inherit" >{m.menu_name}</Typography></ListItemButton>
                    </ListItem>
                </List>
            )
        })
    )
}


export default function ExampleCollapsibleList() {
    const [open, setOpen] = React.useState({ id: '', isOpen: false });

    React.useEffect(() => {
        console.log(open); // 1을 넣었으니까 당연히 1이어야 하지 않을까?
    }, [open]);

    return (
        <Box
            sx={{
                width: '220px',
                pl: '24px',
            }}
        >
            <List
                size="sm"
                sx={(theme) => ({
                    // Gatsby colors

                    [theme.getColorSchemeSelector('dark')]: {
                        '--joy-palette-text-secondary': '#635e69',
                        '--joy-palette-primary-plainColor': '#d48cff',
                    },

                    '--List-insetStart': '32px',
                    '--ListItem-paddingY': '0px',
                    '--ListItem-paddingRight': '16px',
                    '--ListItem-paddingLeft': '21px',
                    '--ListItem-startActionWidth': '0px',
                    '--ListItem-startActionTranslateX': '-50%',

                    [`& .${listItemButtonClasses.root}`]: {
                        borderLeftColor: 'divider',
                    },
                    [`& .${listItemButtonClasses.root}.${listItemButtonClasses.selected}`]: {
                        borderLeftColor: 'currentColor',
                    },
                    '& [class*="startAction"]': {
                        color: 'var(--joy-palette-text-tertiary)',
                    },
                })}
            >
                {
                    parentMenuList.map(m => {
                        return (
                            <ListItem
                                key={m.menu_id}
                                nested
                                sx={{ my: 1 }}
                                startAction={
                                    <IconButton
                                        variant="plain"
                                        size="sm"
                                        color="neutral"
                                        onClick={() => setOpen({ id: m.menu_id, isOpen: !open.isOpen })}
                                    >
                                        <KeyboardArrowDown
                                            sx={{ transform: open ? 'initial' : 'rotate(-90deg)' }}
                                        />
                                    </IconButton>
                                }
                            >
                                <ListItem>
                                    <Typography
                                        level="inherit"
                                        sx={{
                                            fontWeight: open ? 'bold' : undefined,
                                            color: open ? 'text.primary' : 'inherit',
                                        }}
                                        onClick={() => setOpen({ id: m.menu_id, isOpen: !open.isOpen })}
                                    >
                                        {m.menu_name}
                                    </Typography>
                                </ListItem>
                                {(open.id === m.menu_id && open.isOpen) && (
                                    <ChildMenu parentId={m.menu_id}></ChildMenu>
                                )}
                            </ListItem>)
                    })
                }
            </List>
        </Box >
    );
}
