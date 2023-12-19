import { Box, Drawer } from "@mui/material"

export const SideBar = ({drawerWidth = 240}) => {
  return (
    <Box
        component='nav'
        sx={{width:{sm:drawerWidth}, flexShrink:{sm:0}}}
    >
        <Drawer
         variant="permanent"
         open
         sx={{
            display:{xs:'block'},
            '& .MuiDrawer-paper':{boxSizing:'border-box', width: drawerWidth}
         }}
        >

        </Drawer>
      
    </Box>
  )
}

