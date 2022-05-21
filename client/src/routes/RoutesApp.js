import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContextApiProvider from "../contextApi/contextApi";
import HomePage from "../pages/home";

function RoutesApp() {

    return (
        <BrowserRouter>
            <ContextApiProvider>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="*" element={
                        <h1>PAGINA NÂO ENCONTRADA</h1>
                    } />
                </Routes>
            </ContextApiProvider>
        </BrowserRouter>
    )

}

export default RoutesApp
