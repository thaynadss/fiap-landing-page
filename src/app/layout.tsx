import "./styles/globals.scss";
import type { Metadata } from "next";
import { Header } from "./components/Header/Header";

export const metadata: Metadata = {
  title: "FIAP",
  description: "Cursos Presenciais e On-line: Graduação, Pós-Graduação/MBA e Cursos de Curta Duração. FIAP é Tecnologia, Inovação e Empreendedorismo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
