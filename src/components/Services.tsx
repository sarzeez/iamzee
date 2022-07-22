import React, { useState } from 'react'

const ServiceItem = (props:any) => {

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
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p>I develop the user interface.</p>
                        </li>
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p>Web page development.</p>
                        </li>
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p>I position your company brand</p>
                        </li>
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
            type: 'developer'
        },
        {
            title: 'Backend',
            type: 'developer'
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