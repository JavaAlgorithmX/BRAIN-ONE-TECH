import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AboutUs from "./pages/aboutUs";
import Auth from "./pages/auth";
import Home from "./pages/home";
// import { useState } from "react";
import AppLayout from "./components/AppLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { AnimatePresence } from "framer-motion";
import Consulting from "./pages/Consulting";
import UserProfile from "./pages/user-profile";
import Courses from "./pages/courses";
import CourseDetail from "./pages/courseDetail";
import ManageCourse from "./pages/admin/manageCourse";
import AdminLayout from "./pages/admin/adminLayout";
import Dashboard from "./pages/admin/adminDashboard";
import Students from "./pages/admin/manageStudent";
import Clients from "./pages/admin/manageClients";
import { Logout } from "./pages/logout";
import Blog from "./pages/blog";
import ReadBlog from "./pages/readBlog";
import { ModalProvider } from "./store/modelContext";
import DevloperModal from "./pages/model/developer-model";
import EditCourse from "./pages/admin/editCourse";
import AddCourse from "./pages/admin/addCourse";
import Projects from "./pages/Projects";
import Products from "./pages/Products";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
    <ModalProvider>
    <AnimatePresence mode="wait">
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false}></ReactQueryDevtools>
        <DevloperModal/>

        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout/>}>
              <Route path="/" element={<Home />} />
              <Route path="/aboutUs" element={<AboutUs />} />
              <Route path="/consulting" element={<Consulting />} />
              <Route path="/courses" element={<Courses />} />
              {/* <Route path="/courses-details" element={<CourseDetail />} /> */}
              {/* <Route path="/profile" element={<UserProfile />} /> */}
              <Route path="/logout" element={<Logout />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/products" element={<Products />} />
              {/* <Route path="/blog" element={<Blog />} /> */}
              {/* <Route path="/blog/:id" element={<ReadBlog/>} /> */}
              {/* <Route path="/course/:id" element={<CourseDetail/>} /> */}
              <Route path="/login" element={<Auth/>}/>
            </Route>
            

            {/* <Route element={<AdminLayout />}>
              <Route path="/admin" element={<Dashboard />} />
              <Route path="/admin/courses" element={<ManageCourse />} />
              <Route path="/admin/students" element={<Students />} />
              <Route path="/admin/clients" element={<Clients />} />
              <Route path="/admin/courses/:id" element={<EditCourse/>} />
              <Route path="/admin/courses/create" element={<AddCourse/>} />
            </Route> */}
          </Routes>
        </BrowserRouter>

        <Toaster
          position="top-center"
          gutter={6}
          containerStyle={{ margin: "5px" }}
          toastOptions={{
            success: {
              duration: 4000,
            },
            error: {
              duration: 4000,
            },
            style: {
              fontSize: "12px",
              maxWidth: "400px",
              padding: "10px 20px",
              backgroundColor: "light-green",
            },
          }}
        />
      </QueryClientProvider>
    </AnimatePresence>
    </ModalProvider>
  );
}

export default App;
