import { HashRouter, Route, Routes } from "react-router-dom";
import DetailsPage from "../../pages/DetailsPage";
import ErrorPage from "../../pages/ErrorPage";
import HomePage from "../../pages/HomePage/HomePage";

const Router = () => {

    return (
        <HashRouter>
            <Routes>
                <Route exact path="/" element={<HomePage />}/>
                <Route exact path="/details/:id" element={<DetailsPage />}/>
                <Route path="*" element={<ErrorPage />}/>
            </Routes>
        </HashRouter>
    )
}

export default Router;