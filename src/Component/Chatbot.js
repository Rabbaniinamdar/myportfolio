import React, { useState, useRef, useEffect } from 'react';
import '../CSS/Chatbot.css';

/* ─── Suggested questions shown before first message ───────── */
const SUGGESTED = [
    "What is Rabbani's tech stack?",
    "Tell me about his work experience",
    "What projects has he built?",
    "Is he open to new opportunities?",
    "What are his AWS skills?",
    "Describe his Java & Spring Boot expertise",
    "What's his Notice Period?",
];

/* ─── Bot greeting shown immediately on open ───────────────── */
const GREETING = {
    role: 'assistant',
    text: "Hi! 👋 I'm Rabbani's AI assistant. Ask me anything about his skills, experience, or projects — I'm here to help you learn more about him as a candidate.",
};

const Chatbot = () => {
    const [open, setOpen]         = useState(false);
    const [messages, setMessages] = useState([GREETING]);
    const [input, setInput]       = useState('');
    const [loading, setLoading]   = useState(false);
    const [showSuggest, setShowSuggest] = useState(true);
    const bottomRef = useRef(null);
    const inputRef  = useRef(null);

    /* Auto-scroll to latest message */
    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, loading]);

    /* Focus input when chat opens */
    useEffect(() => {
        if (open) setTimeout(() => inputRef.current?.focus(), 300);
    }, [open]);

    const sendMessage = async (text) => {
        const userText = (text || input).trim();
        if (!userText || loading) return;

        setInput('');
        setShowSuggest(false);
        setMessages(prev => [...prev, { role: 'user', text: userText }]);
        setLoading(true);

        try {
            /* ── Call your Spring Boot proxy ─────────────────────────
               The backend forwards this to Claude with Rabbani's
               system prompt — your API key never touches the browser.
            ────────────────────────────────────────────────────────── */
            const res = await fetch('http://localhost:8088/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: userText }),
            });

            if (!res.ok) throw new Error(`HTTP ${res.status}`);

            const data = await res.json();
            setMessages(prev => [...prev, { role: 'assistant', text: data.reply }]);
        } catch (err) {
            setMessages(prev => [
                ...prev,
                {
                    role: 'assistant',
                    text: "Sorry, I couldn't reach the server right now. Please try again shortly.",
                    error: true,
                },
            ]);
        } finally {
            setLoading(false);
        }
    };

    const handleKey = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    const handleReset = () => {
        setMessages([GREETING]);
        setShowSuggest(true);
        setInput('');
    };

    return (
        <>
            {/* ── Floating trigger button ─────────────────────── */}
            <button
                className={`chatbot-fab ${open ? 'chatbot-fab--open' : ''}`}
                onClick={() => setOpen(o => !o)}
                aria-label="Open chatbot"
            >
                {open ? (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <line x1="18" y1="6" x2="6" y2="18"/>
                        <line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                ) : (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20 2H4a2 2 0 00-2 2v18l4-4h14a2 2 0 002-2V4a2 2 0 00-2-2zm-2 10H6V10h12v2zm0-4H6V6h12v2z"/>
                    </svg>
                )}
                {!open && <span className="chatbot-fab__ping" />}
            </button>

            {/* ── Chat window ─────────────────────────────────── */}
            <div className={`chatbot-window ${open ? 'chatbot-window--open' : ''}`}>

                {/* Header */}
                <div className="chatbot-header">
                    <div className="chatbot-header__info">
                        <div className="chatbot-avatar">R</div>
                        <div>
                            <div className="chatbot-header__name">Rabbani's Assistant</div>
                            <div className="chatbot-header__status">
                                <span className="chatbot-status-dot" />
                                Always online
                            </div>
                        </div>
                    </div>
                    <button className="chatbot-reset-btn" onClick={handleReset} title="Clear chat">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 102.13-9.36L1 10"/>
                        </svg>
                    </button>
                </div>

                {/* Messages */}
                <div className="chatbot-messages">
                    {messages.map((msg, i) => (
                        <div
                            key={i}
                            className={`chatbot-msg chatbot-msg--${msg.role} ${msg.error ? 'chatbot-msg--error' : ''}`}
                        >
                            {msg.role === 'assistant' && (
                                <div className="chatbot-msg__avatar">R</div>
                            )}
                            <div className="chatbot-msg__bubble">
                                {msg.text}
                            </div>
                        </div>
                    ))}

                    {/* Typing indicator */}
                    {loading && (
                        <div className="chatbot-msg chatbot-msg--assistant">
                            <div className="chatbot-msg__avatar">R</div>
                            <div className="chatbot-msg__bubble chatbot-typing">
                                <span /><span /><span />
                            </div>
                        </div>
                    )}

                    {/* Suggested questions — visible before first user message */}
                    {showSuggest && !loading && (
                        <div className="chatbot-suggestions">
                            <p className="chatbot-suggestions__label">Try asking:</p>
                            {SUGGESTED.map((q) => (
                                <button
                                    key={q}
                                    className="chatbot-suggestion-chip"
                                    onClick={() => sendMessage(q)}
                                >
                                    {q}
                                </button>
                            ))}
                        </div>
                    )}

                    <div ref={bottomRef} />
                </div>

                {/* Input */}
                <div className="chatbot-input-row">
                    <input
                        ref={inputRef}
                        className="chatbot-input"
                        type="text"
                        placeholder="Ask about skills, experience..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKey}
                        disabled={loading}
                    />
                    <button
                        className="chatbot-send-btn"
                        onClick={() => sendMessage()}
                        disabled={!input.trim() || loading}
                        aria-label="Send"
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M2 21l21-9L2 3v7l15 2-15 2v7z"/>
                        </svg>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Chatbot;