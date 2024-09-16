import { BsNvidia } from "react-icons/bs";
import { FaAmazon, FaApple, FaBitcoin, FaEthereum, FaMicrosoft } from "react-icons/fa";
import { GiAnimalHide } from "react-icons/gi";
import { IoIosBusiness } from "react-icons/io";
import { LuJapaneseYen } from "react-icons/lu";
import { SiPolygon } from "react-icons/si";

const InvestType = [
    {
        name: "Ações",
        icon: <IoIosBusiness />,
        color: "#6264b3",
        investProps: [
            {
                nameInvest: "Nvidia®",
                currentValue: 0,
                defaultColor: "#5a8a1d",
                defaultIcon: <BsNvidia />
            },
            {
                nameInvest: "Amazon®",
                currentValue: 0,
                defaultColor: "#e09b2b",
                defaultIcon: <FaAmazon />
            },
            {
                nameInvest: "Apple Inc.®",
                currentValue: 0,
                defaultColor: "#424242",
                defaultIcon: <FaApple />
            },
            {
                nameInvest: "Microsoft",
                currentValue: 0,
                defaultColor: "#0064a3",
                defaultIcon: <FaMicrosoft />
            }
        ]
    },
    {
        name: "Criptomoeda",
        icon: <FaBitcoin />,
        color: "#6d8ded",
        investProps: [
            {
                nameInvest: "Bitcoin",
                currentValue: 0,
                defaultColor: "#f2a40e",
                defaultIcon: <FaBitcoin />
            },
            {
                nameInvest: "Etherum",
                currentValue: 0,
                defaultColor: "#4c4c4c",
                defaultIcon: <FaEthereum />
            },
            {
                nameInvest: "HoneyBadgers",
                currentValue: 0,
                defaultColor: "#e37124",
                defaultIcon: <GiAnimalHide />
            },
            {
                nameInvest: "Satoshi",
                currentValue: 0,
                defaultColor: "#5a5a5a",
                defaultIcon: <LuJapaneseYen />
            },
            {
                nameInvest: "Matic",
                currentValue: 0,
                defaultColor: "#6c4da4",
                defaultIcon: <SiPolygon />
            }
        ]
    }
];

export default InvestType;
