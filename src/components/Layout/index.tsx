import { Header } from '@/component/Header'
import { type PropsWithChildren } from 'react'

interface LayoutProps {
  children: PropsWithChildren<React.ReactNode>
}

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className='flex flex-col min-h-screen w-full'>
      <Header />
      <main className='flex-grow w-full'>{children}</main>
    </div>
  )
}
