import Logo from "../../Constants/Logo";

export default function Footer() {
    return (
        <footer>
            <div className="footer-box-top">
                <Logo color={"#fff"} size={"40px"} />
            </div>

            <div className="footer-box-bottom">
                <p>Esse Website foi criado para fins educacionais, de modo que não estamos lidando com valores reais e nem com dados reais, isso é apenas uma simulação.</p>
                <p><a href="https://github.com/LuanSilva9">Luan Silva</a> &copy; 2024</p>
            </div>

        </footer>
    )
}