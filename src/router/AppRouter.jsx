import { Route, Routes } from "react-router-dom"
import { AuthRutes } from "../auth/routes/AuthRutes"
import { JournalRoutes } from "../journal/routes/JournalRoutes"


export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/auth/*" element={<AuthRutes/>}/>

        <Route path="/*" element={<JournalRoutes/>}/>


    </Routes>
  )
}

