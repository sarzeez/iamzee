
function Contact() {
    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Contact Me</h2>
            <span className="section__subtitle">Get in touch</span>

            <div className="contact__container container grid">
                <div>
                    <div className="contact__information">
                        <i className="uil uil-phone contact__icon"></i>
                        <div>
                            <h3 className="contact__title">Call Me</h3>
                            <span className="contact__subtitle">+998994624913</span>
                        </div>
                    </div>

                    <div className="contact__information">
                        <i className="uil uil-envelope contact__icon"></i>
                        <div>
                            <h3 className="contact__title">Email</h3>
                            <span className="contact__subtitle">sarzeez1997@gmail.com</span>
                        </div>
                    </div>

                    <div className="contact__information">
                        <i className="uil uil-map-marker contact__icon"></i>
                        <div>
                            <h3 className="contact__title">Location</h3>
                            <span className="contact__subtitle">Tashkent - Uzbekistan</span>
                        </div>
                    </div>
                </div>
                <form className="contact__form grid">
                    <div className="contact__inputs grid">
                        <div className="contact__content">
                            <label htmlFor="formName" className="contact__label">Name</label>
                            <input id="formName" type="text" className="contact__input" />
                        </div>
                        <div className="contact__content">
                            <label htmlFor="formEmail" className="contact__label">Email</label>
                            <input id="formEmail" type="email" className="contact__input" />
                        </div>
                    </div>
                    <div className="contact__content">
                        <label htmlFor="formProject" className="contact__label">Project</label>
                        <input id="formProject" type="text" className="contact__input" />
                    </div>
                    <div className="contact__content">
                        <label htmlFor="formMessage" className="contact__label">Message</label>
                        <textarea name="message" id="formMessage" cols={0} rows={7} className="contact__input"></textarea>
                    </div>

                    <div>
                        <a href="#12" className="button button--flex">
                            Send Message
                            <i className="uil uil-message button__icon"></i>
                        </a>
                    </div>
                    
                </form>
            </div>
        </section>
    )
}

export default Contact