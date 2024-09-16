const date = new Date();

export default function Time() {
    const hour = date.getHours();
    let message;

    if(hour >= 6 && hour < 12) {
        message = "Bom Dia!";
    }
    else if (hour >= 12 && hour < 18) {
        message = "Boa Tarde!";
    } 
    else if (hour >= 18 && hour < 24) {
        message = "Boa Noite!";
    }
    else if (hour >= 0 && hour < 6) {
        message = "Boa Madrugada!";
    }

    return <h2>{message}</h2>
}