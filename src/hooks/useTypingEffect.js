// ── Custom hook for animated typing effect ──
import { useState, useEffect, useRef } from 'react';

const useTypingEffect = (strings, options = {}) => {
  const {
    typingSpeed = 80,
    deletingSpeed = 50,
    pauseDuration = 2000,
  } = options;

  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [stringIndex, setStringIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const timeoutRef = useRef(null);

  useEffect(() => {
    const currentString = strings[stringIndex];

    const tick = () => {
      if (!isDeleting) {
        // Typing forward
        if (charIndex < currentString.length) {
          setDisplayText(currentString.slice(0, charIndex + 1));
          setCharIndex(prev => prev + 1);
          timeoutRef.current = setTimeout(tick, typingSpeed);
        } else {
          // Pause before deleting
          timeoutRef.current = setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        // Deleting
        if (charIndex > 0) {
          setDisplayText(currentString.slice(0, charIndex - 1));
          setCharIndex(prev => prev - 1);
          timeoutRef.current = setTimeout(tick, deletingSpeed);
        } else {
          setIsDeleting(false);
          setStringIndex(prev => (prev + 1) % strings.length);
          timeoutRef.current = setTimeout(tick, 400);
        }
      }
    };

    timeoutRef.current = setTimeout(tick, typingSpeed);
    return () => clearTimeout(timeoutRef.current);
  }, [charIndex, isDeleting, stringIndex, strings, typingSpeed, deletingSpeed, pauseDuration]);

  return displayText;
};

export default useTypingEffect;
