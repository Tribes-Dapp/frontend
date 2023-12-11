import Link from 'next/link'
import Image
 from 'next/image'
export default function NotFound() {
  return (
    <div className='flex gap-2 justify-center items-center h-[80vh]'>
       <div>
        <Image src='/404.svg' alt='404' width={500} height={500} />
      </div>
      <div>
        <p className='text-5xl font-semibold mb-12 text-softBlack'>Page Not Found</p>
        <Link className='bg-softBlack text-white font-medium text-2xl py-2 px-28 rounded-xl' href="/">Return Home</Link>
      </div>
    </div>
  )
}