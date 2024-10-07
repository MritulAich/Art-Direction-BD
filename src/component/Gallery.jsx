import { useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Zoom } from "yet-another-react-lightbox/plugins";
import { Helmet } from "react-helmet";


const Gallery = () => {
    const [images, setImages] = useState([]);
    useEffect(() => {
        fetch('https://art-direction-bd-server.vercel.app/gallery')
            .then(res => res.json())
            .then(data => setImages(data))
    }, []);

    // search function
    const [searchQuery, setSearchQuery] = useState('');
    useEffect(() => {
        const fetchImages = async () => {
            let url = 'https://art-direction-bd-server.vercel.app/gallery';
            if (searchQuery) {
                url = `https://art-direction-bd-server.vercel.app/search?q=${encodeURIComponent(searchQuery)}`;
            }
            const response = await fetch(url);
            const data = await response.json();
            setImages(data);
        };

        fetchImages();
    }, [searchQuery]);

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    // lightbox
    const [open, setOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const openLightbox = (index) => {
        setCurrentIndex(index);
        setOpen(true);
    };


    return (
            <div>
                <h2 className="lg:text-3xl md:text-3xl text-xl scroll-smooth divider italic text-center my-8">Photographs</h2>
                <label className="input flex items-center lg:w-[400px] md:w-[400px] gap-2 my-6 mx-auto lg:ml-12 md:ml-12">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd" />
                    </svg>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={handleSearch}
                        placeholder="ex. Wedding, Engagement, Birthday, Boishakh,"
                        className="w-full"
                    />
                </label>
                
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-8 md:gap-6 lg:m-12 md:m-8 m-2 ">
                {
                    images.slice(0,16).map((image, index) =>
                        <div key={image._id}>
                            <img 
                                src={image.url} className="w-full h-full object-cover" alt="not found"
                                onClick={()=>openLightbox(index)}
                                style={{cursor: 'pointer'}}
                            />
                        </div>)
                }

                {open && (
                <Lightbox
                    open={open}
                    close={() => setOpen(false)}
                    slides={images.map(image => ({ src: image.url }))}
                    index={currentIndex}
                    onIndexChange={setCurrentIndex}
                    plugins={[Zoom]}
                    zoom={{ maxZoomPixelRatio: 3 }}
                />
            )}


                </div>
                <h4 className="text-right mr-10 mb-4 lg:-mt-4 md:-mt-4 mt-1">
                    <a className="text-blue-700 text-xl hover:underline" href="https://www.facebook.com/artdirectionbd/photos_by">see more....</a>
                </h4>
            
                {/* Films */}
                <h2 className="lg:text-3xl md:text-2xl text-xl divider italic font-medium text-center mt-24 mb-12">Films</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-1 lg:m-4 md:m-2 m-1 mb-24 lg:gap-8 md:gap-6 gap-4">
                 <iframe className="w-[312px] md:w-[500px] lg:[500px] lg:h-[315px] md:h-[315px] h-[220px]" src="https://www.youtube.com/embed/9CrgdAjeuto?si=PRBpG_lLGgix7g0n" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                 <iframe className="w-[312px] md:w-[500px] lg:[500px] lg:h-[315px] md:h-[315px] h-[220px]" src="https://www.youtube.com/embed/oYeIobciLjQ?si=do6CHQPvdYgsLQHu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>               
                 <iframe className="w-[312px] md:w-[500px] lg:[500px] lg:h-[315px] md:h-[315px] h-[220px]" src="https://www.youtube.com/embed/sx00dlkf_TY?si=1HfqrK9NSQn02ljm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                 <iframe className="w-[312px] md:w-[500px] lg:[500px] lg:h-[315px] md:h-[315px] h-[220px]" src="https://www.youtube.com/embed/t6yEyyrpfvI?si=cMUP25iyDmvPWGCN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>

                <Helmet>
                    <title>Gallery</title>
                </Helmet>
            </div>
    );
};

export default Gallery;
