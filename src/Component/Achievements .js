import React from 'react';
import '../CSS/Achievements.css'

const achievements = [
    {
        icon: '🏆',
        title: 'Bravo Award',
        subtitle: 'Top Individual Recognition',
        description: 'Awarded the Bravo Award for exceptional performance — the highest individual recognition at a prior organization.',
        color: '#FFD700',
    },
    {
        icon: '💻',
        title: 'Coding Ninjas — Level 7',
        subtitle: 'Competitive Programming',
        description: 'Attained Level 7 on the Coding Ninjas competitive programming platform, demonstrating strong problem-solving and DSA skills.',
        color: '#d200d2',
    },
    {
        icon: '♟️',
        title: 'District Chess Champion',
        subtitle: 'Strategic Excellence',
        description: 'Won the District-level Chess Championship, reflecting strong analytical thinking and strategic planning abilities.',
        color: '#00b4d8',
    },
];

const Achievements = () => {
    return (
        <section className="achievements-section" id="achievements">
            <h1 className="heading">My <span>Achievements</span></h1>
            <div className="achievements-container">
                {achievements.map((ach, index) => (
                    <div className="achievement-card" key={index} style={{ '--accent': ach.color }}>
                        <div className="achievement-icon">{ach.icon}</div>
                        <div className="achievement-body">
                            <h2 className="achievement-title" style={{ color: ach.color }}>{ach.title}</h2>
                            <h4 className="achievement-subtitle">{ach.subtitle}</h4>
                            <p className="achievement-desc">{ach.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Achievements;