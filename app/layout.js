export const metadata = {
  title: 'Ferracini Piracicaba · Coleção 2026',
  description: 'Sapatos selecionados Ferracini Piracicaba. Curadoria exclusiva pra você encontrar o seu par ideal.',
  openGraph: {
    title: 'Ferracini Piracicaba · Coleção 2026',
    description: 'Curadoria exclusiva pra você encontrar o seu par ideal.',
    type: 'website',
    locale: 'pt_BR',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#F4F0EA',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
