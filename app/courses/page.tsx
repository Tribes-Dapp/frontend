import Image from 'next/image'
import asset3 from '@/assets/asset3.svg'
import filterImage from '@/assets/filterImage.svg'
import magnifier from '@/assets/magnifier.svg'
import ProjectCard from '@/components/ProjectCard'
import CourseCard from '@/components/CourseCard'

export default function Courses() {

    return (
        <div className=''>
            <div className='relative'>
                <Image src={asset3} className='absolute left-0 -top-28 z-0' alt="logo" width={400} height={50} />
            </div>
            <div className="relative z-10 pt-32 px-28">
                <h1 className="text-5xl font-medium">Available courses</h1>
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
                <p className='text-4xl font-medium'>All Courses</p>
                <CourseCard 
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
                price={284}
                type='Pre-sale'
                />
            </div>
        </div>

    )
}
