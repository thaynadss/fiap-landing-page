"use client";
import { useEffect, useState } from "react";
import Link from 'next/link'
import Image from 'next/image'
import styles from './Header.module.scss'

export function Header() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const scrollPercentage = (currentScroll / windowHeight) * 100;
      
      setScrollProgress(scrollPercentage);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/svgs/logo-fiap.svg" 
            alt="Logo da FIAP"
            width={110}
            height={32}
            priority
          />
        </Link>
      </div>
      <div 
        className={styles.progressBar} 
        style={{ width: `${scrollProgress}%` }}
      />
    </header>
  )
}