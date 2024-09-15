import { useState } from "react"

export default function Card({ elementForInvest }) {
    const [name, setName] = useState(elementForInvest.nameInvest.toLowerCase())

    return (
        <div className="card-single">
            <div className="card-title" style={{color: elementForInvest.defaultColor}}>
                <h3>{elementForInvest.nameInvest}</h3>
                {elementForInvest.defaultIcon}
            </div>
            <div className="current">
                <p>Valor Investido: {elementForInvest.currentValue}U$</p>
            </div>
            <div className="options">
                <a href={`/grafico/${name}`} className="grafico-btn">
                    Acompanhar Grafico
                </a>
                <a href="/atualizar-valor" className="atualizar-btn">
                    Remover ou alterar valor
                </a>
            </div>
        </div>
    )
}