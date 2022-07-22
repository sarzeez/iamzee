import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import testImg1 from '../assets/images/testimonial1.jpg'
import testImg2 from '../assets/images/testimonial2.jpg'
import testImg3 from '../assets/images/testimonial3.jpg'

const clients = [
    {
        fullname: 'Sara Smith',
        img: testImg1,
        type: 'Client',
        star: 5,
        description: 'I get a good impression, I carry out my project with all the possible quality and attention and support 24 hours a day.'
    },
    {
        fullname: 'Mat Robinson',
        img: testImg2,
        type: 'Client',
        star: 4,
        description: 'I get a good impression, I carry out my project with all the possible quality and attention and support 24 hours a day.'
    },
    {
        fullname: 'Raul Harris',
        img: testImg3,
        type: 'Client',
        star: 5,
        description: 'I get a good impression, I carry out my project with all the possible quality and attention and support 24 hours a day.'
    }
]

function Testimonial() {
    return (
        <section className="testimonial section" id="testimonial">
            <h2 className="section__title">Testimonial</h2>
            <span className="section__subtitle">My clien saying</span>
            <div className="testimonial__container container">
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}
                    loop={true}
                    grabCursor={true}
                    modules={[Pagination]}
                    spaceBetween={48}
                    breakpoints={{
                        568: {
                            slidesPerView: 2,
                        }
                    }}
                >
                    {
                        clients.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="testimonial__content">
                                    <div className="testimonial__data">
                                        <div className="testimonial__header">
                                            <img src={item.img} alt="testImage1" className="testimonial__img" />
                                            <div>
                                                <h3 className="testimonial__name">{item.fullname}</h3>
                                                <span className="testimonial__client">{item.type}</span>
                                            </div>
                                        </div>
                                        <div>
                                            {
                                                Array(item.star).fill('').map((_, i) => (
                                                    <i key={i} className="uil uil-star testimonial__icon-star"></i>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <p className="testimonial__description">
                                    I get a good impression, I carry out my project with all the possible quality and attention and support 24 hours a day.
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default Testimonial