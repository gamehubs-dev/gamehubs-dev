import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import './styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: {
    default: 'GameHubs Dev - iGaming Intelligence Platform',
    template: '%s | GameHubs Dev',
  },
  description:
    'Open-source iGaming intelligence platform delivering real-time online gaming market data, regulatory compliance guides, and industry analytics across 20+ global markets.',
  keywords: [
    'iGaming',
    'online gaming',
    'market research',
    'gaming industry',
    'regulatory compliance',
    'KYC',
    'AML',
    'Asia-Pacific gaming',
    'market analytics',
    'gaming regulations',
    'PAGCOR',
    'online casino',
    'sports betting',
    'esports',
    'mobile gaming',
  ],
  authors: [{ name: 'GameHubs Research', url: 'https://gamehubs.top' }],
  creator: 'GameHubs Research',
  publisher: 'GameHubs Research',
  metadataBase: new URL('https://gamehubs.top'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://gamehubs.top',
    siteName: 'GameHubs Dev',
    title: 'GameHubs Dev - iGaming Intelligence Platform',
    description:
      'Open-source iGaming intelligence platform delivering real-time online gaming market data, regulatory compliance guides, and industry analytics.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'GameHubs Dev - iGaming Intelligence Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GameHubs Dev - iGaming Intelligence Platform',
    description:
      'Open-source iGaming intelligence platform delivering real-time online gaming market data and regulatory compliance guides.',
    images: ['/og-image.png'],
    creator: '@GameHubsResearch',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
