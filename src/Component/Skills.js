import React from 'react';
import ProgressBar from '@ramonak/react-progress-bar';
import '../CSS/Skills.css';

const skillsData = [
    // Languages
    { category: 'Languages', name: 'Java', per: 90, color: '#f89820' },
    { category: 'Languages', name: 'JavaScript', per: 75, color: '#F0DB4F' },
    { category: 'Languages', name: 'HTML', per: 90, color: '#e34c26' },
    { category: 'Languages', name: 'CSS', per: 80, color: '#264de4' },

    // Frameworks
    { category: 'Frameworks', name: 'Spring Boot', per: 85, color: '#112404' },
    { category: 'Frameworks', name: 'Spring Security', per: 80, color: '#1031c1' },
    { category: 'Frameworks', name: 'Hibernate / JPA', per: 75, color: '#59666C' },
    { category: 'Frameworks', name: 'Microservices', per: 80, color: '#5d3232' },
    { category: 'Frameworks', name: 'Angular', per: 75, color: '#dd0031' },

    // Messaging & Data
    { category: 'Messaging & Data', name: 'Apache Kafka', per: 75, color: '#231F20' },
    { category: 'Messaging & Data', name: 'Redis', per: 70, color: '#DC382D' },
    { category: 'Messaging & Data', name: 'MySQL', per: 80, color: '#00758F' },

    // Cloud & DevOps
    { category: 'Cloud & DevOps', name: 'AWS (ECS, Lambda, S3, RDS)', per: 75, color: '#FF9900' },
    { category: 'Cloud & DevOps', name: 'Docker', per: 75, color: '#0db7ed' },
    { category: 'Cloud & DevOps', name: 'Jenkins / CI/CD', per: 70, color: '#D24939' },
    { category: 'Cloud & DevOps', name: 'GitHub', per: 80, color: '#171515' },
];

const categories = [...new Set(skillsData.map(s => s.category))];

const Skills = () => {
    return (
        <div>
            <section className="portfolio" id="skills">
                <h1 className="heading">My <span>Skills</span></h1>
                {categories.map((cat) => (
                    <div key={cat} className="skill-category">
                        <h2 className="skill-category-title">{cat}</h2>
                        {skillsData
                            .filter(skill => skill.category === cat)
                            .map((skill, index) => (
                                <div className="skills_bar" key={index}>
                                    <div className="box">
                                        <h1 className="skill" style={{ color: skill.color }}>{skill.name}</h1>
                                        <ProgressBar
                                            completed={skill.per}
                                            label={`${skill.per}%`}
                                            bgColor={skill.color}
                                            baseBgColor="Purple"
                                        />
                                    </div>
                                </div>
                            ))}
                    </div>
                ))}
            </section>
        </div>
    );
};

export default Skills;