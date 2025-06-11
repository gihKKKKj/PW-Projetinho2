import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/index";
import Sobre from "./Pages/Sobre/index";
import Projetos from "./Pages/Projetos/index";
import Contatos from "./Pages/Contatos/index";
import Page404 from "./Pages/Page404";
import { HashRouter } from 'react-router-dom'

function AppRoutes() {
    return (
        <HashRouter basename="/PW-Projetinho">
            <Routes>
                <Route path="/" element={ <Home />} />
                <Route path="/Sobre" element={ <Sobre />} />
                <Route path="/Projetos" element={ <Projetos />} />
                <Route path="/Contatos" element={ <Contatos />} />
                <Route path="*" element={ <Page404 /> } />
            </Routes>
        </HashRouter>
    );
}
export default AppRoutes;