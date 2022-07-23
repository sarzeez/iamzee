import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

import PortfolioImage1 from '../assets/images/portfolio1.PNG'
import PortfolioImage2 from '../assets/images/portfolio2.PNG'
import PortfolioImage3 from '../assets/images/portfolio3.jpg'
import softdata from '../assets/images/softdata.jpg'

function Portfolio() {

    const portfolios = [
        {
            title: 'Softdata',
            description: 'Website adaptable to all devices, with ui components and animated interactions.',
            img: softdata,
            link: 'https://sarzeez.github.io/softdata/'
        },
        {
            title: 'Grid layout with Tailwind CSS',
            description: 'Website adaptable to all devices, with ui components and animated interactions.',
            img: PortfolioImage1,
            link: 'https://sarzeez.github.io/grid-tailwind-css/'
        },
        {
            title: 'RememberThat',
            description: 'Website adaptable to all devices, with ui components and animated interactions.',
            img: PortfolioImage2,
            link: 'https://sparkling-moxie-7bf207.netlify.app/'
        },
        
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
                                            <a href={item.link} target={'_blank'} className="button button--flex button--small portfolio__button" rel="noreferrer">
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