import React from 'react';
import ecommrec from '../images/ecommrec.png';
import project1 from '../images/project1.png';
import project2 from '../images/project2.png';
import project3 from '../images/project3.png';
import project4 from '../images/bkit.png';
import project5 from '../images/project5.png';
import project6 from '../images/project6.png';
import '../CSS/Projects.css';

const Projects = () => {
    const projects = [
        // ─── PROFESSIONAL PROJECTS (from resume) ────────────────────────────
        {
            name: 'CitiCore Banking Platform',
            git: 'https://github.com/Rabbaniinamdar',
            imageSrc: null, // Replace with actual screenshot when available
            badge: 'Backend',
            tech: ['Spring Boot', 'Microsevices', 'MySQL', 'Docker', 'Jenkins', 'AWS ECS'],
            disc: `Architected a Citibank-inspired microservices banking system featuring account management, fund transfers,
            and transaction history. Containerized with Docker, deployed on AWS ECS, and automated via Jenkins CI/CD
            pipelines with zero-downtime rolling updates.`,
        },
        {
            name: 'Job Search Portal',
            git: 'https://github.com/Rabbaniinamdar/JobApplication',
            imageSrc: null, // Replace with actual screenshot when available
            badge: 'Backend',
            tech: ['Spring Boot', 'JWT', 'Microsevices', 'AWS RDS', 'AWS ECS/ECR'],
            disc: `Engineered role-based authentication with JWTs supporting distinct Admin and Candidate flows.
            Deployed a containerized backend on AWS ECS/ECR with RDS (MySQL) for production-grade persistence.`,
        },
        {
            name: 'E-Commerce Application',
            git: 'https://github.com/Rabbaniinamdar/E-Commerce.git',
            imageSrc: ecommrec,
            badge: 'Featured',
            tech: ['React.js', 'Spring Boot', 'MySQL', 'AWS S3', 'Elastic Beanstalk'],
            disc: `Full-stack shopping platform with RESTful APIs, admin product management, AWS S3 asset storage,
            and auto-scaled deployment on Elastic Beanstalk. Reduced deployment time by 60% vs. manual EC2 setup.`,
        },

        // ─── COLLEGE / PERSONAL PROJECTS ────────────────────────────────────
        {
            name: 'Restaurant Table Booking',
            git: 'https://github.com/Rabbaniinamdar/InamdarDelights',
            link: 'https://rabbaniinamdar.github.io/InamdarDelights/',
            imageSrc: project1,
            badge: null,
            tech: ['React.js', 'Material UI', 'JavaScript'],
            disc: 'Restaurant table booking application with responsive and user-friendly reservation system.',
        },
        {
            name: 'Hotel Menu & Booking App',
            link: 'https://rabbaniinamdar.github.io/Ecommerce/',
            imageSrc: project2,
            badge: null,
            tech: ['HTML', 'CSS', 'JS', 'AJAX', 'Bootstrap'],
            disc: 'Responsive Hotel Menu and Booking App with dynamic updates and seamless travel planning UX.',
        },
        {
            name: 'Shopping Application',
            imageSrc: project3,
            badge: null,
            tech: ['React.js', 'REST API'],
            disc: 'Dynamic shopping application with real-time data updates and a responsive interface.',
        },
        {
            name: 'College Application (BKIT)',
            link: 'https://rabbaniinamdar.github.io/Bkit-Bhalki/',
            git: 'https://github.com/Rabbaniinamdar/Bkit-Bhalki',
            imageSrc: project4,
            badge: null,
            tech: ['HTML', 'CSS', 'JavaScript'],
            disc: 'College web application with modern design and interactive functionalities for BKIT Bhalki.',
        },
        {
            name: 'Text Converter',
            link: 'https://rabbaniinamdar.github.io/myapp/',
            git: 'https://github.com/Rabbaniinamdar/myapp',
            imageSrc: project5,
            badge: null,
            tech: ['React.js'],
            disc: 'Versatile text utility: upper/lowercase, clipboard copy, remove extra spaces, and word count.',
        },
        {
            name: 'News Application',
            link: 'https://github.com/Rabbaniinamdar/NewsMonkey.git',
            imageSrc: project6,
            badge: null,
            tech: ['React.js', 'News API'],
            disc: 'Dynamic news app with real-time updates via News API and a user-friendly interface.',
        },
    ];

    return (
        <section className="portfolio" id="portfolio">
            <h1 className="heading">My <span>Projects</span></h1>
            <div className="box-container">
                {projects.map((project) => (
                    <div className={`box ${project.badge ? 'box-featured' : ''}`} key={project.name}>
                        {project.imageSrc ? (
                            <img src={project.imageSrc} alt={project.name} />
                        ) : (
                            <div className="placeholder-img">
                                <span>{project.name.charAt(0)}</span>
                            </div>
                        )}
                        {project.badge && <div className="project-badge">{project.badge}</div>}
                        <div className="overlay-content">
                            <div className="project-discription">
                                <h1>{project.name}</h1>
                                <p>{project.disc}</p>
                                <div className="project-tech-tags">
                                    {project.tech && project.tech.map((t, i) => (
                                        <span key={i} className="project-tech-tag">{t}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="project_link">
                                {project.git && (
                                    <button><a href={project.git} target="_blank" rel="noopener noreferrer">GitHub</a></button>
                                )}
                                {project.link && (
                                    <button><a href={project.link} target="_blank" rel="noopener noreferrer">Go Live</a></button>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;