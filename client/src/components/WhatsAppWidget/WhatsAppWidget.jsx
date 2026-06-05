import { useState, useEffect, useRef } from 'react';
import styles from './WhatsAppWidget.module.css';

const PHONE = '919037946833';

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [pulse, setPulse] = useState(true);
  const [message, setMessage] = useState('');
  const inputRef = useRef(null);

  // Auto-open after 2.5s on first load — desktop only
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) return; // no auto-popup on mobile

    const openTimer = setTimeout(() => {
      setOpen(true);
      setVisible(true);
    }, 2500);
    const pulseTimer = setTimeout(() => setPulse(false), 6000);
    return () => {
      clearTimeout(openTimer);
      clearTimeout(pulseTimer);
    };
  }, []);

  // Focus input when chat opens
  useEffect(() => {
    if (open && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 350);
    }
  }, [open]);

  const toggle = () => {
  setOpen(prev => !prev);
  setPulse(false);
  if (open) {
    setTimeout(() => setVisible(false), 300); // match your CSS transition duration
  } else {
    setVisible(true);
  }
};

  const sendMessage = () => {
    const text = message.trim() || 'Hi';
    const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setMessage('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const now = new Date();
  const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div className={styles.wrapper}>
      {/* Chat popup */}
      {visible && (
        <div className={`${styles.chatBox} ${open ? styles.chatOpen : styles.chatClosed}`}>

          {/* Header */}
          <div className={styles.header}>
            <div className={styles.avatar}>
              <span>C</span>
              <span className={styles.onlineDot} />
            </div>
            <div className={styles.headerInfo}>
              <p className={styles.headerName}>Catalyst Hub</p>
              <p className={styles.headerStatus}>Typically replies instantly</p>
            </div>
            <button className={styles.closeBtn} onClick={toggle} aria-label="Close chat">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Messages area */}
          <div className={styles.messages}>
            <div className={styles.dateChip}>Today</div>
            <div className={styles.bubble}>
              <p>Hi there! 👋</p>
              <span className={styles.timestamp}>
                {timeStr}
                <svg viewBox="0 0 16 11" fill="#53bdeb" width="14" height="10">
                  <path d="M11.071.653L5.047 8.405 2.2 5.206.653 6.6l4.394 4.747L12.8 2.2z"/>
                  <path d="M15.071.653L9.047 8.405 7.5 6.6l-1.5 1.5 3.047 3.247L16.8 2.2z" opacity=".5"/>
                </svg>
              </span>
            </div>
            <div className={styles.bubble}>
              <p>How can I help you today?</p>
              <span className={styles.timestamp}>
                {timeStr}
                <svg viewBox="0 0 16 11" fill="#53bdeb" width="14" height="10">
                  <path d="M11.071.653L5.047 8.405 2.2 5.206.653 6.6l4.394 4.747L12.8 2.2z"/>
                  <path d="M15.071.653L9.047 8.405 7.5 6.6l-1.5 1.5 3.047 3.247L16.8 2.2z" opacity=".5"/>
                </svg>
              </span>
            </div>
          </div>

          {/* Input bar */}
          <div className={styles.inputBar}>
            <textarea
              ref={inputRef}
              className={styles.input}
              placeholder="Type a message…"
              value={message}
              onChange={e => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              rows={1}
              aria-label="WhatsApp message"
            />
            <button
              className={`${styles.sendBtn} ${message.trim() ? styles.sendBtnActive : ''}`}
              onClick={sendMessage}
              aria-label="Send on WhatsApp"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
              </svg>
            </button>
          </div>

          {/* Footer */}
          <div className={styles.footer}>
            <svg viewBox="0 0 24 24" fill="#25D366" width="13" height="13">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
            </svg>
            <span>Chat via WhatsApp</span>
          </div>
        </div>
      )}

      {/* Floating toggle button */}
      <button
        className={`${styles.fab} ${pulse ? styles.pulse : ''}`}
        onClick={toggle}
        aria-label="Chat on WhatsApp"
        style={{ display: open ? 'none' : 'flex' }}
      >
        <svg viewBox="0 0 24 24" fill="#fff" width="28" height="28">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
        <span className={styles.unreadDot} />
      </button>
    </div>
  );
}
