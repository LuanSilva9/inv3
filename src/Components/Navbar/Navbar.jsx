import Logo from "../../Constants/Logo";
import { FaWallet } from "react-icons/fa";

export default function Navbar() {
    return (
        <header className="navbar">
            <nav className="navbar-content">
                <div className="logo">
                    <Logo color={"white"}/>
                </div>

                <a className="adicionar-investimento" href={"/adicionar-investimento"}> <FaWallet/> Adicionar Investimento</a>
            </nav>
        </header>
    )
}