import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/home";

function RoutesApp() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="*" element={
                    <h1>PAGINA NÂO ENCONTRADA</h1>
                } />
            </Routes>
        </BrowserRouter>
    )

}

export default RoutesApp
