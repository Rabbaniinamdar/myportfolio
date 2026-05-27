import React from 'react';
import Header       from './Component/Header';
import Home         from './Component/Home';
import Skills       from './Component/Skills';
import Experience   from './Component/Experience';
import Education    from './Component/Education';
import Projects     from './Component/Projects';
import Internship   from './Component/Internship';
import Achievements from './Component/Achievements ';
import Certificates from './Component/Certificates';
import Contact      from './Component/Contact';
import ScrollReveal from './Component/ScrollReveal';
import Chatbot      from './Component/Chatbot';       // ← NEW

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const MainPage = () => (
    <div>
        <Home />
        <ScrollReveal direction="up">    <Skills />      </ScrollReveal>
        <ScrollReveal direction="left">  <Experience />  </ScrollReveal>
        <ScrollReveal direction="up">    <Education />   </ScrollReveal>
        <ScrollReveal direction="right"> <Projects />    </ScrollReveal>
        <ScrollReveal direction="left">  <Internship />  </ScrollReveal>
        <ScrollReveal direction="up">    <Achievements /></ScrollReveal>
        <ScrollReveal direction="right"> <Certificates /></ScrollReveal>
        <ScrollReveal direction="up">    <Contact />     </ScrollReveal>
    </div>
);

const App = () => {
    return (
        <Router>
            {/* Chatbot floats globally on every page */}
            <Chatbot />

            <div>
                <Header />
                <Routes>
                    <Route path="/myportfolio"  element={<MainPage />} />
                    <Route path="/experience"   element={<Experience />} />
                    <Route path="/education"    element={<Education />} />
                    <Route path="/projects"     element={<Projects />} />
                    <Route path="/internship"   element={<Internship />} />
                    <Route path="/achievements" element={<Achievements />} />
                    <Route path="/certificates" element={<Certificates />} />
                    <Route path="/contact"      element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;