import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import Features from "./components/Features/Features";
import Advantages from "./components/Advantages/Advantages";
import Testimonial from "./components/Testimonial/Testimonial";
import Faq from "./components/Faq/Faq";
import DownloadBanner from "./components/DownloadBanner/DownloadBanner";
import Footer from "./components/Footer/Footer";

const App = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <Features />
            <Advantages />
            <Testimonial />
            <Faq />
            <DownloadBanner />
            <Footer />
        </div>
    );
};

export default App;
