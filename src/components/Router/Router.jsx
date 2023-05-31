import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailsPage from "../../pages/DetailsPage";
import ErrorPage from "../../pages/ErrorPage";
import HomePage from "../../pages/HomePage/HomePage";

const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/Maranata-site/" element={<HomePage />}/>
                <Route exact path="/details/:id" element={<DetailsPage />}/>
                <Route path="*" element={<ErrorPage />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;