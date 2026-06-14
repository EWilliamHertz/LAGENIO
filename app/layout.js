import './globals.css';
import Script from 'next/script';

export const metadata = {
  title: 'LAGENIO Rhino 1 Pro | Nordic Import',
  description: 'The Ultimate Nordic Multi-Tool',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Core styling backup for proxy and sandbox environments */}
        <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
      </head>
      <body class="bg-gray-900 text-gray-100 m-0 p-0 antialiased">{children}</body>
    </html>
  )
}