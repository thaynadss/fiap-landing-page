"use client";
import { useState } from "react";
import styles from "./Faq.module.scss";
import type { FaqItem } from "./Faq.interface";
import { BREAKPOINTS } from "@/app/constants/breakpoints";

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "QUANDO POSSO ME MATRICULAR?",
    answer: "Você pode se matricular em qualquer dia e hora, basta acessar a página do curso e se inscrever."
  },
  {
    question: "POSSO FAZER DOIS OU MAIS CURSOS AO MESMO TEMPO?",
    answer: "Sim. Apenas atente-se às datas, elas devem ser diferentes, porque cada curso tem sua dinâmica."
  },
  {
    question: "QUAIS OS PRÉ-REQUISITOS?",
    answer: "Cada curso tem seus pré-requisitos descritos na própria página. Identifique-os, para que você obtenha um melhor aproveitamento do seu SHIFT."
  },
  {
    question: "QUAL A DURAÇÃO DOS CURSOS?",
    answer: "De 6 a 42 horas."
  },
  {
    question: "PRECISO LEVAR ALGUM MATERIAL PARA AS AULAS?",
    answer: "Não. Os materiais utilizados em sala de aula são fornecidos pela FIAP e as aulas mais técnicas são realizadas em nossos próprios laboratórios. Sugerimos somente que traga o que preferir para suas anotações."
  },
  {
    question: "VOU RECEBER CERTIFICADO DE CONCLUSÃO DE CURSO?",
    answer: "Sim. Ao cumprir pelo menos 75% da carga horária do curso, você receberá um Certificado Digital, que poderá ser acessado na plataforma."
  }
];

export function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    if (window.innerWidth > BREAKPOINTS.md) {
      setHoveredIndex(index);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > BREAKPOINTS.md) {
      setHoveredIndex(null);
    }
  };

  const handleClick = (index: number) => {
    if (window.innerWidth <= BREAKPOINTS.md) {
      setActiveIndex(activeIndex === index ? null : index);
    }
  };

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>FAQ</h2>
      <p className={styles.subtitle}>Dúvidas Frequentes</p>

      <div className={styles.faqGrid}>
        {FAQ_ITEMS.map((item, index) => (
          <div
            key={index}
            className={`${styles.faqItem} ${
              (hoveredIndex === index || activeIndex === index) ? styles.active : ""
            }`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(index)}
          >
            <p className={styles.question}>{item.question}</p>
            <p className={styles.answer}>{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 