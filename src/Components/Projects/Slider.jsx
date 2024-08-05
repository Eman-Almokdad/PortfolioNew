import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom'

const Slider = ({ slides }) => {


    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            /* slidesPerView={2} */
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            breakpoints={{
                // when window width is >= 640px
                640: {
                    /* width: 640, */
                    slidesPerView: 1,
                },
                // when window width is >= 768px
                768: {
                    /* width: 768, */
                    slidesPerView: 2,
                },
            }}
        /*    scrollbar={{ draggable: true }} */
        >
            {slides.map((element, index) => {
                return (
                    <SwiperSlide className="portfolio-item " key={index}>
                        <div className="portfolio-image">
                            <img src={element.img} alt="" />
                        </div>
                        <h3>{element.title} </h3>
                        <h4>Skills:{element.tools}</h4>
                        <div className="portfolio-cta">
                            <Link to={`/Projects/${element.id}`} className="btn">Detailes</Link>
                            <a href={element.demo} className="btn btn-primary">Live Demo</a>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}

export default Slider
