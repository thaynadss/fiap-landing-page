'use client'
import Image from 'next/image';
import styles from './WaterAnimation.module.scss';
import { useEffect, useRef, useState } from 'react';

const frames = Array.from({ length: 192 }, (_, index) => 
  index.toString().padStart(3, '0')
);

export function WaterAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const handleScroll = () => {
      if (!containerRef.current) return;

      const { top, height } = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollPosition = windowHeight - top;
      const scrollPercentage = Math.min(Math.max(scrollPosition / height, 0), 1);
      
      const frameIndex = Math.min(
        Math.floor(scrollPercentage * (frames.length - 1)),
        frames.length - 1
      );
      
      setCurrentFrame(frameIndex);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();    

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  return (
    <div ref={containerRef} className={styles.container}>
      <Image
        src={`/imgs/water/water_${frames[currentFrame]}.jpg`}
        alt={`Animação de água ${currentFrame}`}
        fill
        objectFit="cover"
      />
    </div>
  );
} 