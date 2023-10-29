import { Poppins } from 'next/font/google'
import './globals.css'
import type { Metadata } from 'next'

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Carbon Emissions',
  description: 'Welcome to our comprehensive resource on carbon emissions. Here, we demystify the complex world of carbon emissions, offering insights into their sources, environmental consequences, and most importantly, how we can collectively work to reduce them. Whether you are an individual looking to make sustainable choices or a business seeking innovative solutions, our website provides the knowledge and tools you need to understand, mitigate, and adapt to the challenges of a carbon-conscious world. Join us in the journey towards a greener, more sustainable future.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  console.log("asdfasdfa", children)

  return (
    <html>
      <body className={poppins.className}>
        <main>{children}</main>
      </body>
    </html>
  )
}
