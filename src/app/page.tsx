import { Button } from './components/Button';

export default function Home() {
  return (
  <main className='grid grid-cols-2 min-h-screen'>

    {/* left */}
    <div className='flex flex-col border-r border-white/10 items-start justify-between px-28 overflow-hidden py-16 relative'>
      {/* blur */}
      <div className='absolute right-0 top-1/2 h-[288px] w-[526px] rounded-full -translate-y-1/2 translate-x-1/2  bg-purple-700 opacity-50 blur-full'/>
      {/* stripes */}
      <div className='absolute bottom-0 right-3 top-0 w-2 bg-stripes'/>
    </div>

    {/* right */}
    <div className='flex flex-col p-16'>
      <div className='flex flex-1 items-center justify-center'>
        <p className='text-center leading-relaxed w-[360px]'>
          Você ainda não registrou nenhuma lembrança, comece a{' '}
          <a href=''className='underline hover:text-gray-50'>criar agora!</a>
        </p>
      </div>
    </div>

  </main>)
}
