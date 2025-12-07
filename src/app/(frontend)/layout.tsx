import React from 'react'
import './styles.css'

export const metadata = {
  description: 'Clean Bold - A creative digital studio crafting innovative solutions for brands that dare to be different',
  title: 'Clean Bold Studio | Creative Digital Agency',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
