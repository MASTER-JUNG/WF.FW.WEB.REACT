import { listItemButtonClasses } from '@mui/joy'

const ListStyle = () =>  {
  return({

          '--List-nestedInsetStart': '32px',
          '--ListItem-startActionWidth': '0px',
          '--ListItem-startActionTranslateX': '-50%',
          [`& .${listItemButtonClasses.root}.${listItemButtonClasses.selected}`]: {
            fontWeight:`bold`,
            borderLeft: '3px solid red',
          },
          // [`& .${listItemButtonClasses.root}`]: {
          //   borderLeftColor: 'divider',
          // }
  })
}
export {ListStyle}
