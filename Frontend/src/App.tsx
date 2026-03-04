import Navbar from "./Components/Layout/Navbar/Navbar";
import Home from "./Components/Elements/Home/Home";
import Integrations from "./Components/Elements/Integrations/Integrations";
import Impact from "./Components/Elements/Impact/Impact";
import MissionVision from "./Components/Elements/MissionVision/MissionVision";
import Plans from "./Components/Elements/Plans/Plans";
import ContactUs from "./Components/Elements/ContactUs/ContactUs";
import { useScroll } from "./Hook/useScroll";
import Footer from "./Components/Elements/Footer/Footer";

function App() {
    const scroll = useScroll();

    return (
        <>
            <Navbar scroll={scroll} />
            <main className="min-h-screen pt-10">
                <Home handleScroll={scroll.handleScroll} />
                <Integrations />
                <Impact />
                <MissionVision />
                <Plans />
                <ContactUs />
            </main>
            <Footer handleScroll={scroll.handleScroll} />
        </>
    );
}

export default App;
