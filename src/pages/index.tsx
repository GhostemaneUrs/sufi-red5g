import Image from 'next/image'
import Link from 'next/link'
import sufi from '@/image/sufi-logo.svg'
import { useForm } from 'src/hooks/useForm'
import { useRouter } from 'next/router'

const Home = (): JSX.Element => {
  const router = useRouter()
  const { values, isValid, handleChangeValues } = useForm({
    email: '',
    password: ''
  })

  return (
    <main className='w-full max-w-[1440px] m-auto flex flex-col justify-content align-center min-h-screen'>
      <div className='w-full max-w-[400px] m-auto flex flex-col justify-center items-center'>
        <div className='mb-8 text-center'>
          <Image priority width={264} height={76} src={sufi} alt='Sufi' />
          <h1 className='text-[#413E4D] tracking-normal text-[40px] font-bold'>
            Sufipay
          </h1>
          <span className='text-[#413E4D] tracking-normal text-[16px]'>
            Administrador comercial
          </span>
        </div>
        <div className='shadow-container rounded-xl bg-white w-full p-4 mb-8'>
          <form className='w-full' noValidate>
            <div className='relative mb-3'>
              <input
                id='email'
                name='email'
                value={values.email}
                type='email'
                onChange={e => {
                  const res = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
                  if (e.target.value === '' || res.test(e.target.value)) {
                    handleChangeValues(e)
                  }
                }}
                placeholder='mail@usermail.com'
                className='peer w-full border solid border-[#ABB9C780] rounded-md h-[56px] outline-none placeholder-transparent focus:outline-none text-[#413E4D] text-base px-4 pt-3'
              />
              <label
                htmlFor='email'
                className='absolute left-4 -top-[5x] text-[#ABB9C7] text-[12px] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-[#ABB9C7] peer-placeholder-shown:top-[16px] peer-focus:-top-0 peer-focus:text-[12px]'
              >
                Usuario
              </label>
            </div>
            <div className='relative'>
              <input
                id='password'
                name='password'
                type='password'
                onChange={e => {
                  handleChangeValues(e)
                }}
                placeholder='••••••••••••'
                className='peer w-full border solid border-[#ABB9C780] rounded-md h-[56px] outline-none placeholder-transparent focus:outline-none text-[#413E4D] text-base px-4 pt-3'
              />
              <label
                htmlFor='password'
                className='absolute left-4 -top-[5x] text-[#ABB9C7] text-[12px] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-[#ABB9C7] peer-placeholder-shown:top-[16px] peer-focus:-top-0 peer-focus:text-[12px]'
              >
                Contraseña
              </label>
            </div>
          </form>
        </div>
        <button
          type='button'
          disabled={!isValid}
          onClick={() => {
            router.push('/disbursement')
          }}
          className='py-[14px] text-center text-white text-base bg-[#DD3542] rounded-3xl w-full max-w-[174px] uppercase font-bold mb-6'
        >
          Ingresar
        </button>
        <Link
          href=''
          className='text-[12px] text-[#413E4D] underline decoration-[#413E4D]'
        >
          No recuerdo mi contraseña
        </Link>
      </div>
    </main>
  )
}

export default Home
