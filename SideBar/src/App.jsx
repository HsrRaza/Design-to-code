import { BrowserRouter, Route, Routes } from "react-router-dom"
import DashboardPage from "./Page/DashboardPage"
import MainLayouts from "./layout/MainLayout"



function App() {
  

  return (
    <>
   <BrowserRouter>
        <Routes>
          <Route to="/"  element={<MainLayouts/>}>
          <Route index element={<DashboardPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
