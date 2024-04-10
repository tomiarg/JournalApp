import { Navigate, Route, Routes } from "react-router-dom"
import { AuthRutes } from "../auth/routes/AuthRutes"
import { JournalRoutes } from "../journal/routes/JournalRoutes"

import {CircularLoading} from "../ui"

import { useCheckAuth } from "../hooks/useCheckAuth"


export const AppRouter = () => {

  const {status} = useCheckAuth()
 
  if(status==="checking"){
    return(
      <CircularLoading/>
    )
  }
  return (
    <Routes>
      {
        (status === 'authenticated')
          ? <Route path="/*" element={<JournalRoutes/>}/>
          :<Route path="/auth/*" element={<AuthRutes/>}/>
      }
        <Route path='/*' element= {<Navigate to='/auth/login'/>}/>

        


    </Routes>
  )
}

