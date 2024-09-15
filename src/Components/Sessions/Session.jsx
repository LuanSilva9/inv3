import Card from "../Cards/Card";

export default function Session({ investTypeProps }) {
    if(!investTypeProps) return <h2>Não achamos nenhum investimento por aqui...</h2>;

    const categoryInvests = investTypeProps.investProps;

    return (
        <section className="investimentos">
            <div className="fillColor" style={{ background: investTypeProps.color || "gray" }}></div>

            <div className="investimentos-presents">
                <h2 style={{ color: investTypeProps.color || "black" }} > Investimento - {investTypeProps.icon} {investTypeProps.name}</h2>
            </div>

            <div className="investimentos-card">
                { categoryInvests.map((element, index) => <Card key={index}  elementForInvest={element}/>) } 
            </div>
        </section>
    )
}