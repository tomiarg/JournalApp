import { Typography } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NothingSelectedView } from "../views"


export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum voluptatibus facere, suscipit ab, libero incidunt earum ex aliquid esse quis dolores porro cum. Aspernatur itaque cumque adipisci doloremque. Magni, eligendi.
      </Typography> */}
      <NothingSelectedView/>
    </JournalLayout>
  )
}

