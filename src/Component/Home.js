import React, { useState, useEffect } from 'react';
import '../CSS/Home.css';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

/* ─────────────────────────────────────────────────────────────────
   useTypewriter
   Properly types each string character-by-character, pauses,
   then deletes it before moving to the next string.

   typeSpeed   – ms per character while typing   (default 90ms)
   deleteSpeed – ms per character while deleting (default 45ms)
   pauseTime   – ms to hold the full string      (default 1800ms)
───────────────────────────────────────────────────────────────── */
const useTypewriter = (
    texts,
    typeSpeed = 90,
    deleteSpeed = 45,
    pauseTime = 1800
) => {
    const [display, setDisplay]       = useState('');
    const [textIndex, setTextIndex]   = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isPausing, setIsPausing]   = useState(false);

    useEffect(() => {
        const current = texts[textIndex];

        // ── Pause before deleting ──────────────────────────────
        if (isPausing) {
            const t = setTimeout(() => {
                setIsPausing(false);
                setIsDeleting(true);
            }, pauseTime);
            return () => clearTimeout(t);
        }

        // ── Delete one character ───────────────────────────────
        if (isDeleting) {
            if (display.length === 0) {
                setIsDeleting(false);
                setTextIndex((i) => (i + 1) % texts.length);
                return;
            }
            const t = setTimeout(
                () => setDisplay((d) => d.slice(0, -1)),
                deleteSpeed
            );
            return () => clearTimeout(t);
        }

        // ── Type one character ─────────────────────────────────
        if (display.length < current.length) {
            const t = setTimeout(
                () => setDisplay(current.slice(0, display.length + 1)),
                typeSpeed
            );
            return () => clearTimeout(t);
        }

        // ── Full string shown — start pause ────────────────────
        setIsPausing(true);

    }, [display, textIndex, isDeleting, isPausing, texts, typeSpeed, deleteSpeed, pauseTime]);

    return display;
};

/* ─── Fade-in on scroll ─────────────────────────────────────── */
const FadeInElement = ({ children }) => {
    const [ref, inView] = useInView({ triggerOnce: true });
    const fadeIn = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(20px)',
        config: { duration: 500 },
    });
    return <animated.div ref={ref} style={fadeIn}>{children}</animated.div>;
};

/* ─── Component ─────────────────────────────────────────────── */
const Home = () => {
    const titles = [
        "I am Mahammad Rabbani",
        "I am Java Full Stack Engineer",
        "I am Backend Developer",
        "I am AWS Cloud Developer",
    ];

    const displayText = useTypewriter(titles, 90, 45, 1800);

    return (
        <React.Fragment>
            <section className="home" id="home">
                <FadeInElement>
                    <h3>HI THERE <span className="wave">👋</span></h3>
                </FadeInElement>

                <FadeInElement>
                    <h1>
                        <span className="typewriter-text">
                            {displayText}
                            <span className="typewriter-cursor">|</span>
                        </span>
                    </h1>
                </FadeInElement>

                <FadeInElement>
                    <p>
                        Java Full Stack Engineer with 2.5+ years designing and deploying
                        enterprise-grade microservices at Virtusa and Tech Mahindra.
                        Experienced in cutting API latency by 25–30%, processing 10K+ daily
                        Kafka events in production, and delivering cloud-native systems on AWS
                        (Lambda, ECS, RDS, S3). Passionate about building scalable,
                        fault-tolerant backends and clean Angular frontends.
                    </p>
                </FadeInElement>
            </section>

            <section className="about" id="about">
                <div className="row container">
                    <div className="counter">
                        {[
                            { value: '2.5+', label: 'Years of Experience' },
                            { value: '10+',  label: 'Projects Completed'  },
                            { value: '5+',   label: 'Certifications'      },
                            { value: '2',    label: 'Companies Worked'    },
                        ].map(({ value, label }) => (
                            <FadeInElement key={label}>
                                <div className="box content">
                                    <span>{value}</span>
                                    <h3>{label}</h3>
                                </div>
                            </FadeInElement>
                        ))}
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Home;