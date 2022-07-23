import { useState } from 'react'

const SkillsItem = (props:any) => {

    const { item } = props;
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className={`skills__content ${isOpen ? 'skills__open' : 'skills__close'}`}>
            <div onClick={() => {setIsOpen(!isOpen)}} className="skills__header">
                <i className="uil uil-brackets-curly skills__icon"></i>
                <div>
                    <h1 className="skills__title">{item.title}</h1>
                    <span className="skills__subtitle">{item.experience}</span>
                </div>
                <i className="uil uil-angle-down skills__arrow"></i>
            </div>
            <div className="skills__list grid">
                {
                    item.technologies.map((tech:any, i:number) => (
                        <div key={i} className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">{tech}</h3>
                                <span className="skills__number">{item.percentage[i]}%</span>
                            </div>
                            <div className="skills__bar">
                                <span className={`skills__percentage skills__${tech.toLowerCase()}`}></span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

function Skills() {

    const skills = [
        {
            title: 'Frontend developer',
            experience: 'More than 1.5 years',
            technologies: ['HTML', 'CSS', 'JS', 'React JS'],
            percentage: [90, 80, 75, 85]
        },
        {
            title: 'Mobile developer',
            experience: '0.5 year',
            technologies: ['React Native'],
            percentage: [60, 65, 60, 60]
        }
    ]

    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My technical level</span>

            <div className="skills__container container grid">
                {
                    skills.map((item, index) => (
                        <div key={index}>
                            <SkillsItem
                                item={item}
                            />
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Skills