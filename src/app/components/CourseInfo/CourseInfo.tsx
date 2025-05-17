'use client'
import { useEffect, useRef } from 'react';
import styles from './CourseInfo.module.scss';

const TEXT1 = "CURSOS E IMERSÕES. UMA NOVA CULTURA DE MERCADO.";
const TEXT2 = "TECNOLOGIA, INOVAÇÃO E NEGÓCIOS. PRESENTE E FUTURO.";

export function CourseInfo() {
  const firstRowRef = useRef<HTMLDivElement>(null);
  const secondRowRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const scrollMultiplier = 1.5;
  const totalScroll = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY.current;
      
      if (firstRowRef.current && secondRowRef.current) {
        totalScroll.current += Math.abs(scrollDelta);
        
        if (totalScroll.current > 100) {
          const moveAmount = scrollDelta * scrollMultiplier;
          
          const firstTransform = parseFloat(firstRowRef.current.style.transform?.match(/-?\d+\.?\d*/)?.[0] || '0');
          const secondTransform = parseFloat(secondRowRef.current.style.transform?.match(/-?\d+\.?\d*/)?.[0] || '0');
          
          const newFirstTransform = firstTransform - moveAmount;
          const newSecondTransform = secondTransform + moveAmount;
          
          firstRowRef.current.style.transform = `translateX(${newFirstTransform}px)`;
          secondRowRef.current.style.transform = `translateX(${newSecondTransform}px)`;
          
          const GAP = 64;
          const textWidth = firstRowRef.current.children[0].clientWidth + GAP;
          
          if (Math.abs(newFirstTransform) >= textWidth) {
            firstRowRef.current.style.transform = 'translateX(0)';
          }
          if (Math.abs(newSecondTransform) >= textWidth) {
            secondRowRef.current.style.transform = 'translateX(0)';
          }
        }
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <section className={styles.header}>
      <div className={styles.headerText}>
        <div className={styles.textRow}>
          <div ref={firstRowRef} className={styles.textContent}>
            <span>{TEXT1}</span>
            <span>{TEXT1}</span>
            <span>{TEXT1}</span>
          </div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.textRow}>
          <div ref={secondRowRef} className={styles.textContent}>
            <span>{TEXT2}</span>
            <span>{TEXT2}</span>
            <span>{TEXT2}</span>
          </div>
        </div>
        <div className={styles.line}></div>
      </div>
    </section>
  );
} 