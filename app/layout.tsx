import type { Metadata } from 'next'
import './globals.css'
import { ToastProvider } from '@/components/ui/toast'

export const metadata: Metadata = {
  title: 'StoryQuest - Therapeutic Stories for Children in Care',
  description: 'Trauma-informed interactive stories to support healing and growth for children in care',
  keywords: ['therapeutic stories', 'children in care', 'foster care', 'trauma-informed', 'healing'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <ToastProvider>
          {children}
        </ToastProvider>
      </body>
    </html>
  )
}
