import Image from 'next/image'
import asset1 from '@/assets/asset1.svg'
import asset2 from '@/assets/asset2.svg'
import Button from '@/components/Button'

export default function Home() {

  return (
    <div className='w-full'>
      <div className='relative'>
        <Image draggable={false} className='absolute right-0 -top-20 -z-20' src={asset1} alt="logo" width={700} height={50} />
        <Image draggable={false} className='absolute left-0  -z-20' src={asset2} alt="logo" width={900} height={50} />
      </div>
      <div className="flex flex-col h-screen justify-center items-center">
        <div className="flex h-[75%] justify-center items-center backdrop-blur-sm bg-white/30 z-10 w-5/6 rounded-3xl shadow-2xl">
          <div className='flex flex-col items-center'>
            <div className='flex flex-col  items-center'>
              <p className='text-6xl font-medium my-4 text-softBlack'>Empower your community,</p>
              <p className='text-6xl	font-medium my-4 text-softBlack'>Empower your tribe!</p>
            </div>
            <p className='text-2xl mt-24 font-medium text-softBlack'>The web3 creator&apos;s economy enabler: building true communities</p>
            <div className='mt-20'>
              <Button text="Learn More" />
            </div>
          </div>
        </div>
        <div className='z-10 flex justify-center items-center'>
          <p className='text-5xl font-medium mt-24 text-softBlack'>The creator&apos;s current economic model is broken</p>
        </div>
      </div>
      <div className='mt-8 my-16'>
        <div className='flex mx-40 gap-12'>
          <div className='bg-purple h-96 w-1/4 rounded-3xl border-[3px] shadow-xl'> </div>
          <div className='bg-softGreen h-96 w-3/4 rounded-3xl border-[3px] shadow-xl'> </div>
        </div>
        <div className='flex mx-40 gap-12 mt-12'>
          <div className='bg-softGreen h-96 w-3/4  rounded-3xl  border-[3px] shadow-xl'> </div>
          <div className='bg-purple h-96 w-1/4 rounded-3xl  border-[3px] shadow-xl'> </div>
        </div>
        <div className='flex absolute botton-0 mx-40 gap-12 mt-12'>
          <div className='bg-white h-96 w-[170vh] rounded-t-3xl border border-t-[3px] border-x-[3px] shadow-xl'></div>
        </div>

      </div>


    </div>
  )
}
