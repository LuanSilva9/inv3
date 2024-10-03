import { Route, Routes } from "react-router-dom";

import Home from "./Routes/Home/Home";
import NovoInvestimento from "./Routes/PainelInvestimento/NovoInvestimento";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/adicionar-investimento" element={<NovoInvestimento/>}/>
        </Routes>

    )
}