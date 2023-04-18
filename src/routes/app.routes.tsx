import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { UserForm } from "../pages/UserForm";
import { CompanyForm } from "../pages/CompanyForm";
import { RegisterForm } from "../pages/RegisterForm";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<UserForm />} />
      <Route path="/companies" element={<CompanyForm />} />
      <Route path="/register" element={<RegisterForm />} />
    </Routes>
  )
}