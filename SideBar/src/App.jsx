import { BrowserRouter, Route, Routes } from "react-router-dom"
import DashboardPage from "./Page/DashboardPage"
import MainLayouts from "./layout/MainLayout"
import TeamPage from "./Page/TeamPage"
import InvoicePage from "./Page/InvoicePage"



function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route to="/" element={<MainLayouts />}>
            <Route index element={<DashboardPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/invoice" element={<InvoicePage />} />
            {/* <Route path="/integration" element={<IntegrationPage />} />
            <Route path="/finance" element={<FinancePage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
