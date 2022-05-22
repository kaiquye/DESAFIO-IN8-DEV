import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContextApiProvider from "../contextApi/contextApi";
import HomePage from "../pages/home";
import NotFound from "../pages/Not-Found";

function RoutesApp() {

    return (
        <BrowserRouter>
            <ContextApiProvider>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="*" element={
                        <NotFound />
                    } />
                </Routes>
            </ContextApiProvider>
        </BrowserRouter>
    )

}

export default RoutesApp
