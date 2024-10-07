import AboutUs from "./pages/AboutUs";
import Banner from "./pages/Banner";
import NewsLetter from "./pages/Newsletter";
import Reviews from "./pages/Reviews";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Reviews></Reviews>
            <div className="flex flex-row-reverse my-5"><NewsLetter></NewsLetter></div>
        </div>
    );
};

export default Home;