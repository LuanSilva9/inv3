import InvestType from "../../Constants/InvestType"
import Session from "./Session"

export default function SessionGroup({ limits }) {
    return (
        <div className="session-groups">
            {
                limits.map((element, index) => <Session key={index} investTypeProps={InvestType[element]}/> )
            }
        </div>
    )
}