import Image from 'next/image'
import asset3 from '@/assets/asset3.svg'
import asset5 from '@/assets/asset5.svg'
import rectangle from '@/assets/rectangle.svg'
import Button from '@/components/Button'
import filterImage from '@/assets/filterImage.svg'
import magnifier from '@/assets/magnifier.svg'

export default function Launchpad() {

    return (
        <div className=''>
            <div className='relative'>
                <Image src={asset3} className='absolute left-0 -top-28 z-0' alt="logo" width={400} height={50} />
            </div>
            <div className="relative z-10 pt-32 px-28">
                <h1 className="text-5xl font-medium">Creator's launchpad</h1>
                <p className="font-medium pt-8 text-xl w-[38%]">
                    Explore the open projects to receive found on different areas and
                    funding stage. Place a bid to support the project or just guarantee
                    your spot over a pre-sale event
                </p>
            </div>
            <div className="relative z-10 pt-12 px-28">
                <div className='flex gap-4'>
                    <button className='flex gap-2 items-center border-2 px-4 py-1 rounded-lg hover:scale-[97%] duration-300 ease-in-out'>
                        <Image src={filterImage} alt="logo" width={17} height={15} />
                        <p className='text-xl font-medium'>Filtro</p>
                    </button>
                    <div className='w-full flex border-2 gap-2 rounded-lg'>
                        <Image src={magnifier} className='mx-3' alt="logo" width={17} height={15} />
                        <input className='w-full h-full rounded-lg focus:outline-none bg-[#f1f1f1]' />
                    </div>
                </div>
            </div>
            <div className='relative z-10 pt-12 px-28'>
                <p className='text-4xl font-medium'>All launchpads</p>
                <div className='flex gap-12 mt-16'>
                    <div className='h-96 w-3/4  rounded-3xl border border-[3px] shadow-xl relative'>
                        <Image className='absolute -left-40 -top-56 overflow-hidden' src={asset5} alt="logo" width={750} height={50} />
                        <div className=' backdrop-blur-sm bg-white/20  w-1/5  h-full rounded-l-3xl absolute  z-10' ></div>
                        <div className='flex items-center absolute z-20'>
                            <Image src={rectangle} className=' rounded-2xl ml-28 my-16' alt="logo" width={400} height={400} /> 
                            <div className='w-[50%] ml-24'>
                                <p className='text-3xl font-medium my-6'>Description</p>
                                <p className='w-[100%] text-xl my-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </p>
                            </div>
                            
                        </div>
                    </div>
                    <div className='bg-purple h-96 w-1/4 rounded-3xl border border-[3px] shadow-xl'> </div>
                </div>
            </div>
        </div>

    )
}
