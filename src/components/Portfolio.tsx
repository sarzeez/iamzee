import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

import PortfolioImage1 from '../assets/images/portfolio1.jpg'
import PortfolioImage2 from '../assets/images/portfolio2.jpg'
import PortfolioImage3 from '../assets/images/portfolio3.jpg'

function Portfolio() {

    const portfolios = [
        {
            title: 'Modern Website',
            description: 'Website adaptable to all devices, with ui components and animated interactions.',
            img: PortfolioImage1
        },
        {
            title: 'Brand Design',
            description: 'Website adaptable to all devices, with ui components and animated interactions.',
            img: PortfolioImage2
        },
        {
            title: 'Online Store',
            description: 'Website adaptable to all devices, with ui components and animated interactions.',
            img: PortfolioImage3
        }
    ]

    return (
        <section className="portfolio section" id="portfolio">
            <h2 className="section__title">Portfolio</h2>
            <span className="section__subtitle">Most recent work</span>
            <div className="portfolio_container container">
                <Swiper
                    cssMode={true}
                    loop={true}
                    navigation={true}
                    pagination={{clickable: true}}
                    mousewheel={true}
                    keyboard={true}
                    className="swiper-slide-center"
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                >
                        {
                            portfolios.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className="portfolio__content grid">
                                        <img src={item.img} alt="portfolio" className="portfolio__img" />
                                        <div className="portfolio__data">
                                            <h3 className="portfolio__title">{item.title}</h3>
                                            <p className="portfolio__description">Website adaptable to all devices, with ui components and animated interactions.</p>
                                            <a href="#12" className="button button--flex button--small portfolio__button">
                                                Demo
                                                <i className="uil uil-arrow-right button__icon"></i>
                                            </a>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                </Swiper>
            </div>
        </section>
    )
}

export default Portfolio