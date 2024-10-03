import HeroSection from "../../Components/Hero/HeroSection";
import SessionGroup from "../../Components/Sessions/SessionGroup";

export default function Home() {
    return (
        <>
            <HeroSection/>
            <SessionGroup limits={[0, 1]}/>
        </>
    )
}