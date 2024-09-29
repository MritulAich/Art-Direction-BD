import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <Swiper className="carousel w-screen lg:h-screen h-[500px] text-center lg:m-6 md:m-3"
                spaceBetween={0} effect={'fade'} navigation={true} speed={1000} fadeEffect={{ crossFade: true }}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination]}
            >

                <SwiperSlide className='w-full relative carousel-item bg-contain bg-no-repeat'
                    style={{
                        backgroundImage: 'url(https://res.cloudinary.com/dvaclg6kh/image/upload/v1727431601/458983262_1052617216873731_652113998977414189_n.jpg_n1ivlb.jpg)',
                        backgroundPosition: 'center'
                    }}>

                    <div className="absolute lg:mt-[8%] md:mt-[8%] lg:ml-[15%] md:ml-[15%] mt-[18%] ml-[4%] bg-gradient-to-b from-indigo-100 lg:p-4 md:p-2 p-2 rounded-xl">
                        <h1 className="mb-4 lg:text-4xl md:text-3xl text-lg font-semibold text-cyan-950">Every wedding tells a story <br />we are here to document yours</h1>
                        <Link to='/contact' className="btn btn-primary">Book Now</Link>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='w-full relative carousel-item bg-contain bg-no-repeat'
                    style={{
                        backgroundImage: 'url(https://res.cloudinary.com/dvaclg6kh/image/upload/v1727431372/441254655_3364893640321237_2559340215616599110_n.jpg_wvxzt0.jpg)',
                        backgroundPosition: 'center'
                    }} >

                    <h1 className='absolute lg:ml-[22%] md:ml-[22%] ml-[8%] mt-[24%] lg:mt-[8%] md:mt-[8%] lg:text-5xl md:text-3xl text-2xl poppins-regular text-yellow-100'>COLORFUL PHOTOS FOR COLORFUL PEOPLE</h1>
                </SwiperSlide>

                <SwiperSlide className='w-full carousel-item bg-contain bg-no-repeat'
                    style={{
                        backgroundImage: 'url(https://res.cloudinary.com/dvaclg6kh/image/upload/v1727527146/rsz_wedding-slide_uu9vtq.png)',
                        backgroundPosition: 'center'
                    }} >
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;