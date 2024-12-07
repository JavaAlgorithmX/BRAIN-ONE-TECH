import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AboutUs from "./pages/aboutUs";
import Home from "./pages/home";
import AppLayout from "./components/AppLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { AnimatePresence } from "framer-motion";

import Courses from "./pages/courses";

import { ModalProvider } from "./store/modelContext";
import DevloperModal from "./pages/model/developer-model";

import CourseDetilsStatic from "./pages/CourseDetailStatic";
import Projects from "./pages/Projects";
import Products from "./pages/Products";
import ConsultingPage from "./pages/ConsultingNew";

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
              <Route path="/consulting" element={<ConsultingPage />} />
              <Route path="/courses" element={<Courses />} />
            
              <Route path="/courses/:id" element={<CourseDetilsStatic />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/products" element={<Products />} />
            </Route>
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
