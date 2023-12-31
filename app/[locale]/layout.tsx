import './globals.css'
import { Inter } from 'next/font/google'

import { NextIntlClientProvider, useMessages } from "next-intl";
import ActiveSectionContextProvider from '@/context/active-section-context'
import ThemeContextProvider from '@/context/theme-context'

import Header from '@/components/header'
import Footer from '@/components/footer'
import SwitchGroup from '@/components/switch-group'
import { Locales } from '@/lib/types';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Jason Protfolio',
  description: "This is Jason's Protfolio page.",
}

export default function RootLayout({
  children, locale
}: {
  children: React.ReactNode,
  locale: Locales[number]
}) {

  const messages = useMessages();

  return (
    <html lang={locale} className="!scroll-smooth">
      <body className={`${inter.className} bg-gray-50 text-gray-950 
      relative pt-28 sm:pt-32 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}>
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] 
        rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] 
        rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 
        2xl:left-[-5rem] dark:bg"></div>
        <NextIntlClientProvider
          messages={messages}
          locale={locale}
        >
          <ThemeContextProvider>
            <ActiveSectionContextProvider>
              <Header />
              {children}
              <Footer />
              <SwitchGroup />
              {/* <LocaleSwitcher /> */}
            </ActiveSectionContextProvider>
          </ThemeContextProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}