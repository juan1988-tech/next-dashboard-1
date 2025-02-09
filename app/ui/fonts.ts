import { Lusitana, Quicksand } from 'next/font/google';

export const quicksand = Quicksand({
    subsets: ['latin'], // Subconjuntos de caracteres (opcional)
    weight: ['300', '400', '500', '600', '700'], // Pesos disponibles
    style: ['normal'], // Estilos disponibles (normal, italic)
    variable: '--font-quicksand', // Variable CSS para usar la fuente
})

export const lusitana = Lusitana({
    subsets: ['latin'],
    weight: ['400', '700'],
})

