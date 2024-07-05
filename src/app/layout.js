import {Inter} from "next/font/google";
import './globals.css'

const inter = Inter({ subsets: ["latin"], weight: '400'});

export const metadatos = {
  titulo: "Formulario de contacto",
  descripcion: "Formulario de contacto creado con Next.js",
};

export default function LayoutRaiz({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}