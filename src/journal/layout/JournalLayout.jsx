import { Box } from "@mui/material"
import { NavBar } from "../components";

const drawerWidth = 240;


export const JournalLayout = ({children}) => {
  return (
    <Box sx={{display: 'flex'}}>
        <NavBar
          drawerWidth={drawerWidth}
        />
        {/* SideBar */}

        <Box 
            component='main'
            sx={{flexFlow: 1, p:3}}>
                {children}

        </Box>
      
    </Box>
  )
}


