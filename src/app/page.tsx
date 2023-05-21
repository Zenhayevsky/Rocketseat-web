import { Button } from './components/Button';
import { User } from 'lucide-react'

export default function Home() {
  return (
  <main className='grid grid-cols-2 min-h-screen'>

    {/* left */}
    <div className='bg-[url(../assets/bg-stars.svg)] bg-cover p-16 flex flex-col border-r border-white/10 items-start justify-between px-28 overflow-hidden py-16 relative'>
      {/* blur */}
      <div className='absolute right-0 top-1/2 h-[288px] w-[526px] rounded-full -translate-y-1/2 translate-x-1/2  bg-purple-700 opacity-50 blur-full'/>
      {/* stripes */}
      <div className='absolute bottom-0 right-3 top-0 w-2 bg-stripes'/>
       
      {/* sign in */}
      <a href='' className='flex items-center gap-3 text-left hover:text-gray-50 transition-colors'>
        <div className='flex h-10 w-10 items-center justify-center rounded-full bg-gray-400'>
          <User className='h-5 w-5 text-gray- 500'/>
        </div>

        <p className='text-sm leading-snug max-w-[140px]'><span className='underline'>Crie sua conta</span> e salve suas memórias!</p>
      </a>
    </div>

    {/* right */}
    <div className='flex flex-col p-16 bg-[url(../assets/bg-stars.svg)] bg-cover p-16'>
      <div className='flex flex-1 items-center justify-center'>
        <p className='text-center leading-relaxed w-[360px]'>
          Você ainda não registrou nenhuma lembrança, comece a{' '}
          <a href=''className='underline hover:text-gray-50'>criar agora!</a>
        </p>
      </div>
    </div>

  </main>)
}
