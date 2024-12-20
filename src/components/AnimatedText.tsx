import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface Props {
  text: string;
  className?: string;
}

export default function AnimatedText({ text, className = '' }: Props) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    gsap.fromTo(
      element,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );
  }, []);

  return (
    <div ref={elementRef} className={className}>
      {text}
    </div>
  );
}