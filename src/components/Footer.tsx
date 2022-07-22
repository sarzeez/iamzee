/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from 'react';
import { useWindowPosition } from '../hooks/cutomHooks'
function Footer() {

    const [scrollup, setScrollup] = useState(false)
    const scrollY = useWindowPosition();
    useEffect(() => {
        function scrollHeader() {
            if(scrollY >= 80) {
                setScrollup(true)
            } else {
                setScrollup(false)
            }
        }

        scrollHeader()
    }, [scrollY])

    return (
        <>
            <footer className="footer">
                <div className="footer__bg">
                    <div className="footer__container container grid">
                        <div>
                            <h1 className="footer__title">iamzee</h1>
                            <span className="footer__subtitle">Frontend developer</span>
                        </div>
                        <ul className="footer__links">
                            <li>
                                <a href="#services" className="footer__link">Services</a>
                            </li>
                            <li>
                                <a href="#portfolio" className="footer__link">Portfolio</a>
                            </li>
                            <li>
                                <a href="#contact" className="footer__link">Contactme</a>
                            </li>
                        </ul>
                        <div className="footer__socials">
                            <a href="https://www.facebook.com" target={'_blank'} className="footer__social" rel="noreferrer">
                                <i className="uil uil-facebook-f"></i>
                            </a>
                            <a href="https://www.instagram.com" target={'_blank'} className="footer__social" rel="noreferrer">
                                <i className="uil uil-instagram"></i>
                            </a>
                            <a href="https://www.facebook.com" target={'_blank'} className="footer__social" rel="noreferrer">
                                <i className="uil uil-twitter-alt"></i>
                            </a>
                        </div>
                    </div>
                    <p className="footer__copy">&#169;iamzee. All right reserved</p>
                </div>
            </footer>
            <a href="#" className={`scrollup ${scrollup ? 'show-scroll' : ''}`} id="scroll-up">
                <i className="uil uil-arrow-up scrollup__icon"></i>
            </a>
        </>
    )
}

export default Footer