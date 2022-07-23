import React, { useState } from 'react'

interface ServiceItemProps {
    item: {
        title: string;
        type: string;
        skills: string[]
    }
}

const ServiceItem = (props:ServiceItemProps) => {

    const { item } = props;
    const [modalState, setModalState] = useState(false)

    return (
        <div className="services__content">
            <div>
                <i className="uil uil-web-grid services__icon"></i>
                <h3 className="services__title">{item.title} <br />{item.type}</h3>
            </div>
            <span onClick={() => {setModalState(true)}} className="button button--flex button--small button--link services__button">
                View more
                <i className="uil uil-arrow-right button__icon"></i>
            </span>
            <div className={`services__modal ${modalState ? 'active__modal' : ''}`}>
                <div className="services__modal-content">
                    <h4 className="services__modal-title">{item.title} <br />{item.type}</h4>
                    <i onClick={() => {setModalState(false)}} className="uil uil-times services__modal-close"></i>
                    <ul className="services__modal-services grid">
                        {
                            item.skills.map((skill, index) => (
                                <li key={index} className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>{skill}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

function Services() {

    const myServices = [
        {
            title: 'Frontend',
            type: 'developer',
            skills: [
                'Developing and implementing highly responsive user interface components using react concepts.',
                'Writing application interface codes using JavaScript following react.js workflows.',
                'Developing and implementing front-end architecture to support user interface concepts.',
                'Monitoring and improving front-end performance.'
            ]
        },
        {
            title: 'Mobile',
            type: 'developer',
            skills: [
                'I design and implement user interface components for JavaScript-based web and mobile applications using React ecosystem.',
                ' Native APIs for tight integrations with both platforms – Android and iOS.',
                'Implementing clean, smooth animations to provide an excellent user interface.',
                'Working with third-party dependencies and APIs.'
            ]
        }
    ]

    return (
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What I offer</span>
            <div className="services__container container grid">
                {
                    myServices.map((item, index) => (
                        <ServiceItem key={index} item={item} />
                    ))
                }
            </div>
        </section>
    )
}

export default Services