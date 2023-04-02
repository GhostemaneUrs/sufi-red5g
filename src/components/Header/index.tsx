import Link from 'next/link'
import Image from 'next/image'
import sufi from '@/image/sufi-logo.svg'
import { CiLogin } from 'react-icons/ci'

export const Header: React.FC = () => {
  return (
    <header className='flex justify-end items-center bg-white py-6 shadow-header px-6'>
      <div className='flex justify-end items-center w-full'>
        <Image priority width={100} height={100} src={sufi} alt='Logo' />
      </div>
      <Link href='/' className='flex justify-end items-center w-full gap-3'>
        <span className='text-[#31323F] text-[14px] font-bold'>
          Cerrar sesión
        </span>
        <CiLogin className='material-icons text-[#31323F] text-2xl' />
      </Link>
    </header>
  )
}
