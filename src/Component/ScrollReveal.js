import React, { useEffect, useRef } from 'react';
import '../CSS/ScrollReveal.css';

/**
 * ScrollReveal
 * Wraps any section and animates it into view when it enters the viewport.
 *
 * Props:
 *   direction  - 'up' | 'left' | 'right' | 'fade'  (default: 'up')
 *   delay      - CSS delay in ms, e.g. 100  (default: 0)
 *   threshold  - 0–1 how much of the element must be visible (default: 0.12)
 *   className  - extra class names to pass through
 */
const ScrollReveal = ({
    children,
    direction = 'up',
    delay = 0,
    threshold = 0.12,
    className = '',
}) => {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add('sr-visible');
                    observer.unobserve(el); // fire once
                }
            },
            { threshold }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold]);

    return (
        <div
            ref={ref}
            className={`sr-wrapper sr-${direction} ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

export default ScrollReveal;