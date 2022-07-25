import AboutImage from '../assets/images/about.jpg'
import cv from '../assets/pdf/cv.pdf'
function About() {
    return (
        <section className="about section" id="about">
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">My introduction</span>
            <div className="about__container container grid">
                <img src={AboutImage} alt="About" className="about__img" />

                <div className="about__data">
                    <p className="about__description">Honest and hardworking Front End developer skilled at designing sites and writing clean code.
                    Implement successful content based on user needs. Background includes graphics work and
                    performance optimization.</p>
                    <div className="about__info">
                        <div>
                            <span className="about__info-title">08+</span>
                            <span className="about__info-name">Years <br /> experience</span>
                        </div>
                        <div>
                            <span className="about__info-title">20+</span>
                            <span className="about__info-name">Completed <br/> projects</span>
                        </div>
                        <div>
                            <span className="about__info-title">05+</span>
                            <span className="about__info-name">Companies <br/> worked</span>
                        </div>
                    </div>
                    <div className="about__buttons">
                        <a download={'iamzee.pdf'} href={cv} className="button button--flex">
                            Download CV
                            <i className="uil uil-download-alt button__icon"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About