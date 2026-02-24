import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import BlogDetail from "./pages/BlogDetail";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminProjects from "./pages/admin/AdminProjects";
import AdminBlogs from "./pages/admin/AdminBlogs";
import Login from "./pages/Login";
import RequireAuth from "./components/RequireAuth";
export default function App() {
    return (_jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/projects", element: _jsx(Projects, {}) }), _jsx(Route, { path: "/about", element: _jsx(About, {}) }), _jsx(Route, { path: "/contact", element: _jsx(Contact, {}) }), _jsx(Route, { path: "/blogs", element: _jsx(Blogs, {}) }), _jsx(Route, { path: "/blogs/:id", element: _jsx(BlogDetail, {}) }), _jsx(Route, { path: "/login", element: _jsx(Login, {}) }), _jsx(Route, { path: "/admin", element: _jsx(RequireAuth, { children: _jsx(AdminDashboard, {}) }) }), _jsx(Route, { path: "/admin/projects", element: _jsx(RequireAuth, { children: _jsx(AdminProjects, {}) }) }), _jsx(Route, { path: "/admin/blogs", element: _jsx(RequireAuth, { children: _jsx(AdminBlogs, {}) }) })] }));
}
