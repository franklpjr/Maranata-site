import { HashRouter, Route, Routes } from "react-router-dom";
import QuemSomosPage from "../../pages/QuemSomosPage";
import NossaHistoriaPage from "../../pages/NossaHistoriaPage";
import ErrorPage from "../../pages/ErrorPage";
import HomePage from "../../pages/HomePage/HomePage";

const Router = () => {

    return ( 
        <HashRouter>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/quemsomos/" element={<QuemSomosPage />}/>
                <Route path="/nossahistoria/" element={<NossaHistoriaPage />}/>
                <Route path="*" element={<ErrorPage />}/>
            </Routes>
        </HashRouter>
    )
}

export default Router;