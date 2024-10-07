import Banner from "./pages/Banner";
import NewsLetter from "./pages/Newsletter";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="flex flex-row-reverse my-5"><NewsLetter></NewsLetter></div>
        </div>
    );
};

export default Home;