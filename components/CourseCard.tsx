import Image from "next/image";
import rectangle from '@/assets/rectangle.svg'
import asset5 from '@/assets/asset5.svg'
import arrow from '@/assets/arrow.svg'


type CourseCardProps = {
  description: string;
  price: any;
  type: any;
};

const CourseCard: React.FC<CourseCardProps> = (props) => {

  return (
    <div className='flex gap-12 mt-16'>
      <div className='h-96 w-3/4  rounded-3xl border border-[3px] shadow-xl relative'>
        <Image className='absolute -left-40 -top-56 overflow-hidden' src={asset5} alt="logo" width={750} height={50} />
        <div className=' backdrop-blur-sm bg-white/20  w-1/5  h-full rounded-l-3xl absolute  z-10' ></div>
        <div className='flex items-center absolute z-20'>
          <Image src={rectangle} className=' rounded-2xl ml-28 my-16' alt="logo" width={400} height={400} />
          <div className='w-[50%] ml-24'>
            <p className='text-3xl font-medium my-6'>Description</p>
            <p className='w-[100%] text-xl my-6'>{props.description}</p>
          </div>

        </div>
      </div>
      <div className='bg-softGreen h-96 w-1/4 rounded-3xl border border-[3px] shadow-xl flex justify-center flex-col items-center'>
        <p className='text-3xl font-medium py-6'>Buy course</p>
          <div className='divide-y-[3px]'>
            <div className='flex flex-col items-center justify-center w-36 p-4'>
              <p className='text-xl font-medium'>Price</p>
              <p className='text-lg'>${props.price}</p>
            </div>
            <div className='flex flex-col items-center justify-center w-36 p-4'>
              <p className='text-xl font-medium'>Type</p>
              <p className='text-lg'>{props.type}</p>
            </div>
          </div>
        <div className='flex justify-center items-center pt-2'>
          <button className='bg-softBlack text-white font-medium text-lg py-3 px-4 rounded-xl hover:scale-[97%] duration-300 ease-in-out'>
            <Image src={arrow} alt="arrow" width={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
