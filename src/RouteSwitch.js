import { HashRouter, Route, Routes } from "react-router-dom"
import App from "./App"
import Login from "./pages/Login"

function RouteSwitch() {
  return (
    <HashRouter>
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/app" element={<App/>} />
        </Routes>
    </HashRouter>
  )
}

export default RouteSwitch