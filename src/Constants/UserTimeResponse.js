const date = new Date();

export default function Time() {
    const mensagem = date.getHours() > 18 ? "Boa Noite!" : "Bom Dia";

    return <h2>{mensagem}</h2>
}