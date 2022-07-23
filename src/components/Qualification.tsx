import { useState } from 'react'

function Qualification() {

    const [tabIndex, setTabIndex] = useState(false)

    return (
        <section className="qualification section" id='qualification'>
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>
            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div onClick={() => setTabIndex(false)} className={`qualification__button button--flex ${!tabIndex ? 'qualification__active-button' : ''}`}>
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        Education
                    </div>
                    <div onClick={() => setTabIndex(true)} className={`qualification__button button--flex ${tabIndex ? 'qualification__active-button' : ''}`}>
                        <i className="uil uil-briefcase-alt qualification__icon"></i>
                        Work
                    </div>
                </div>
                <div className="qualificaton__sections">
                    <div className={`qualification__content ${tabIndex ? '' : 'qualification__active'}`} data-content>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Informatin Security</h3>
                                <span className="qualification__subtitle">Tashkent - TUIT</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2016-2020
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Informatin Security</h3>
                                <span className="qualification__subtitle">Tashkent - TUIT</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2016-2020
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`qualification__content ${tabIndex ? 'qualification__active' : ''}`} data-content>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Hello Security</h3>
                                <span className="qualification__subtitle">Tashkent - TUIT</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2016-2020
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Informatin Security</h3>
                                <span className="qualification__subtitle">Tashkent - TUIT</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2016-2020
                                </div>
                            </div>
                           
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Informatin Security</h3>
                                <span className="qualification__subtitle">Tashkent - TUIT</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2016-2020
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification