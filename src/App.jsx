import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import LoginPage from "./components/LoginPage";
import Hero from "./components/Hero";
import AdminRegister from "./components/AdminRegister";
import CompanyRegister from "./components/CompanyRegister";
import NotFound from "./components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound/>} />

        <Route path="/" element={<Navigate to={"/hero"} />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/login" element={<LoginPage />} />

        <Route path="/adm-register" element={<AdminRegister />} />

        <Route path="/cmp-register" element={<CompanyRegister />} />

        <Route path="/hero" element={<Hero />} />

        {/* Input rute lain di sini */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
