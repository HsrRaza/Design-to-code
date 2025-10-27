import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainLayouts from "./Layouts/MainLayouts"
import DashboardPage from "./pages/DashboardPage"


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
