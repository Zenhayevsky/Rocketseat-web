import './globals.css'
import { Roboto_Flex as Roboto, Bai_Jamjuree as BaiJamjuree } from 'next/font/google'


const roboto = Roboto({ subsets: ['latin'], variable:'--font-roboto' })
const baijamjuree = BaiJamjuree({ subsets: ['latin'], weight: '700', variable:'--font-baijamjuree' })

export const metadata = {
  title: 'NLW spacetime',
  description: 'Uma capsula do tempo construida com React e tailwind'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${baijamjuree.variable} font-sans bg-gray-900 text-gray-100`}>{children}</body>
    </html>
  )
}
