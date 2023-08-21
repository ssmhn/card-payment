import '@css/global.scss'
import { Open_Sans } from 'next/font/google'

const font = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Bank Card',
  description: 'Bank Card',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={font.className}>{children}</body>
    </html>
  )
}
