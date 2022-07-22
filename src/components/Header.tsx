import { useState, useLayoutEffect, useEffect } from 'react';
import { useWindowPosition } from '../hooks/cutomHooks'

function Header() {

    const scrollY = useWindowPosition()
    const sections = document.querySelectorAll('section[id]')
    const [menu, setMenu] = useState(false)
    const [scrollHeader, setScrollHeader] = useState(false)
    
    // dark light theme
    const themeButton = document.getElementById('theme-button')
    const darkTheme = 'dark-theme'
    const iconTheme = 'uil-sun';

    const selectedTheme = localStorage.getItem('selected-theme')
    const selectedIcon = localStorage.getItem('selected-icon')

    const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'

    const getCurrentIcon = () => document.body.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

    const handleClickToggeTheme = () => {
        document.body.classList.toggle(darkTheme);
        themeButton?.classList.toggle(iconTheme);
        localStorage.setItem('selected-theme', getCurrentTheme())
        localStorage.setItem('selected-icon', getCurrentIcon())
    }

    const handeClickOpenMenu = () => {
        setMenu(true)
    }

    const handleClickCloseMenu = () => {
        setMenu(false)
    }

    useEffect(() => {
        if(selectedTheme) {
            document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
            themeButton?.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
        }
    }, [selectedIcon, selectedTheme, themeButton?.classList])

    

    useLayoutEffect(() => {
        function scrollActive(){
            sections.forEach((current:any) =>{
                const sectionHeight = current.offsetHeight
                const sectionTop = current.offsetTop - 50;
                let sectionId = current.getAttribute('id')
        
                if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                    document?.querySelector('.nav__menu a[href*=' + sectionId + ']')?.classList.add('active-link')
                }else{
                    document?.querySelector('.nav__menu a[href*=' + sectionId + ']')?.classList.remove('active-link')
                }
            })
        }
        window.addEventListener('scroll', scrollActive);
        scrollActive();
        return () => window.removeEventListener('scroll', scrollActive);
    }, [sections, scrollY]);

    useEffect(() => {
        function scrollHeader() {
            if(scrollY >= 80) {
                setScrollHeader(true)
            } else {
                setScrollHeader(false)
            }
        }

        scrollHeader()
    }, [scrollY])

    return (
        <header className={`header ${scrollHeader ? 'scroll-header' : ''}`} id='header'>
            <nav className="nav container">
                <a href="#iamzee" className="nav__logo">iamzee</a>
                <div className={`nav__menu ${menu ? 'show__menu' : ''}`}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" className="nav_link" onClick={handleClickCloseMenu}>
                            <i className='uil uil-estate nav__icon'></i> Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="nav_link" onClick={handleClickCloseMenu}>
                            <i className='uil uil-user nav__icon'></i> About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" className="nav_link" onClick={handleClickCloseMenu}>
                            <i className='uil uil-file-alt nav__icon'></i> Skills
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#services" className="nav_link" onClick={handleClickCloseMenu}>
                            <i className='uil uil-briefcase-alt nav__icon'></i> Services
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#portfolio" className="nav_link" onClick={handleClickCloseMenu}>
                            <i className='uil uil-scenery nav__icon'></i> Portfolio
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" className="nav_link" onClick={handleClickCloseMenu}>
                            <i className='uil uil-message nav__icon'></i> ContactMe
                            </a>
                        </li>
                    </ul>
                    <i className="uil uil-times nav__close" onClick={handleClickCloseMenu}></i>
                </div>
                <div className="nav__btns">
                    <i onClick={handleClickToggeTheme} className="uil uil-moon change-theme" id="theme-button"></i>

                    <div className="nav__toggle" onClick={handeClickOpenMenu}>
                        <i className="uil uil-apps"></i>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header