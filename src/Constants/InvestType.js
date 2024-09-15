import { BsNvidia } from "react-icons/bs";
import { FaAmazon, FaApple, FaBitcoin, FaEthereum, FaMicrosoft } from "react-icons/fa";
import { GiAnimalHide } from "react-icons/gi";
import { LuJapaneseYen } from "react-icons/lu";
import { RiMoneyPoundCircleFill } from "react-icons/ri";
import { SiPolygon } from "react-icons/si";

const getRandomValue = () => (Math.random() * 1000).toFixed(2);

const InvestType = [
    {
        name: "Ações",
        icon: <RiMoneyPoundCircleFill />,
        color: "#4a6d23",
        investProps: [
            {
                nameInvest: "Nvidia®",
                currentValue: getRandomValue(),
                defaultColor: "#5a8a1d",
                defaultIcon: <BsNvidia />
            },
            {
                nameInvest: "Amazon®",
                currentValue: getRandomValue(),
                defaultColor: "#e09b2b",
                defaultIcon: <FaAmazon />
            },
            {
                nameInvest: "Apple Inc.®",
                currentValue: getRandomValue(),
                defaultColor: "#424242",
                defaultIcon: <FaApple />
            },
            {
                nameInvest: "Microsoft",
                currentValue: getRandomValue(),
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
                currentValue: getRandomValue(),
                defaultColor: "#f2a40e",
                defaultIcon: <FaBitcoin />
            },
            {
                nameInvest: "Etherum",
                currentValue: getRandomValue(),
                defaultColor: "#4c4c4c",
                defaultIcon: <FaEthereum />
            },
            {
                nameInvest: "HoneyBadgers",
                currentValue: getRandomValue(),
                defaultColor: "#e37124",
                defaultIcon: <GiAnimalHide />
            },
            {
                nameInvest: "Satoshi",
                currentValue: getRandomValue(),
                defaultColor: "#5a5a5a",
                defaultIcon: <LuJapaneseYen />
            },
            {
                nameInvest: "Matic",
                currentValue: getRandomValue(),
                defaultColor: "#6c4da4",
                defaultIcon: <SiPolygon />
            }
        ]
    }
];

export default InvestType;
