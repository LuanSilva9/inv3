import { useState } from "react";

export default function Card({ elementForInvest }) {
    const [name, setName] = useState(elementForInvest.nameInvest.toLowerCase());
    const [openForm, setOpenForm] = useState(false);
    const [currentValue, setCurrentValue] = useState(elementForInvest.currentValue)

    

    async function toggleChange() {
        await setOpenForm(!openForm);
    }

    async function currentChange(event) {
        event.preventDefault();
        
        elementForInvest.currentValue = ( (!currentValue || isNaN(currentValue) || currentValue < 0) ? 0 : currentValue );

        toggleChange();
    }

    function getStyle(open) {
        return open ? { border: `1px solid ${elementForInvest.defaultColor}`, background: elementForInvest.defaultColor, color: "#fff" } : { border: `1px solid ${elementForInvest.defaultColor}`, color: elementForInvest.defaultColor, background:"#fff" }
    }

    return (
        <div className="card-single">
            <div className="card-title" style={{ textAlign: "center", color: elementForInvest.defaultColor }}>
                <h3>{elementForInvest.nameInvest}</h3>
                {elementForInvest.defaultIcon}
            </div>
            {
                openForm ? (
                    <div className="current">
                        <form className="current-form" onSubmit={currentChange}>
                            <label htmlFor="investiments">Valor Investido: </label>
                            <div className="form-control">
                                <input type="text" name="investiments" id="investiments" onChange={(e) => setCurrentValue(e.target.value)} value={currentValue} />

                                <button type="submit" className="alterar-btn" style={getStyle(false)}>
                                    Alterar valor
                                </button>
                            </div>
                        </form>
                    </div>
                ) : (
                    <div className="current">
                        <p>Valor Investido: {elementForInvest.currentValue}U$</p>
                    </div>
                )
            }
            
            <div className="options">
                <a href={`/grafico/${name}`} className="grafico-btn">
                    Acompanhar Grafico
                </a>
                <button onClick={toggleChange} style={getStyle(true)} className="atualizar-btn">
                    {openForm ? "Cancelar" : "Alterar valor"}
                </button>
            </div>
        </div>
    );
}
