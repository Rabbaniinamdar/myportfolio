import React from 'react';
import '../CSS/Experience.css';

const experiences = [
    {
        company: 'Virtusa',
        role: 'Software Engineer — Microservices & Backend',
        location: 'Hyderabad, India',
        period: 'Jan 2026 – Present',
        color: '#d200d2',
        highlights: [
            'Reduced inter-service latency by 30% by architecting asynchronous event-driven workflows using Apache Kafka producers/consumers, processing 10K+ transactions daily across distributed microservices.',
            'Improved API throughput by 25% by implementing Redis caching strategies and optimizing complex multi-join SQL queries, eliminating N+1 database calls in high-frequency paths.',
            'Drove 99.9% service uptime by engineering fault-tolerant distributed systems with Resilience4j circuit breakers, retry mechanisms, and centralized Spring Cloud Config management.',
            'Accelerated team delivery velocity by 20% by leading microservice integrations — service discovery (Eureka), API Gateway routing, and Docker-based cloud deployments on AWS ECS.',
        ],
        tech: ['Java', 'Spring Boot', 'Apache Kafka', 'Redis', 'Docker', 'AWS ECS', 'Resilience4j', 'Spring Cloud'],
    },
    {
        company: 'Tech Mahindra',
        role: 'Software Engineer — Full Stack (Angular + Spring Boot)',
        location: 'Hyderabad, India',
        period: 'Dec 2023 – Dec 2025',
        color: '#b30000',
        highlights: [
            'Delivered 50% of a greenfield Material Handling System from design to production using Spring Boot microservices and Angular in an Agile squad of 8, serving 200+ warehouse floor operators.',
            'Accelerated data retrieval by 35% by redesigning the MySQL schema with optimized indexing and rewriting slow Hibernate ORM queries, reducing dashboard load times from 4.2s to 2.7s.',
            'Improved API response times by 25% through microservices decomposition, containerizing 6 services with Docker, and introducing Spring Cache for frequently-accessed reference data.',
            'Eliminated a critical JWT authentication vulnerability in a legacy Spring Security system, resolving token refresh race conditions and hardening role-based access control for 500+ users.',
        ],
        tech: ['Angular', 'Spring Boot', 'JWT', 'MySQL', 'Docker', 'Jenkins', 'AWS', 'Hibernate', 'AG Grid'],
    },
];

const Experience = () => {
    return (
        <section className="experience-section" id="experience">
            <h1 className="heading">My <span>Experience</span></h1>
            <div className="experience-timeline">
                {experiences.map((exp, index) => (
                    <div className="exp-card" key={index}>
                        <div className="exp-left">
                            <div className="exp-dot" style={{ background: exp.color }}></div>
                            <div className="exp-period">{exp.period}</div>
                            <div className="exp-location">{exp.location}</div>
                        </div>
                        <div className="exp-right">
                            <div className="exp-header">
                                <h2 className="exp-company" style={{ color: exp.color }}>{exp.company}</h2>
                                <h3 className="exp-role">{exp.role}</h3>
                            </div>
                            <ul className="exp-highlights">
                                {exp.highlights.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                            <div className="exp-tech">
                                {exp.tech.map((t, i) => (
                                    <span className="tech-tag" key={i}>{t}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;