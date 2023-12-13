import Image from 'next/image'
import rectangle from '@/assets/rectangle.svg'

const InvestmentCard: React.FC = () => {

    return (
        <div className='border-[3px] rounded-3xl w-[40%] flex-shrink-0 h-[75vh] mt-[-7vh]'>
            <div className="bg-gradient-to-r from-purple h-1/4 w-[35%] rounded-t-3xl absolute "></div>
            <div className=' backdrop-blur-sm bg-white/50 rounded-t-3xl w-[35%]  h-1/4 absolute  z-0' ></div>
            <div className="relative z-20 flex justify-center items-center">
                <Image src={rectangle} className=' rounded-3xl mt-16' alt="logo" width={500} height={100} />
            </div>
            <div className='mx-20 my-6 justify-center items-center '>
                <div className='py-2'>
                    <p className='font-medium text-lg'>Expected yield</p>
                    <input className='w-full h-8 rounded-lg border-[2px] px-1 focus:outline-none bg-[#f1f1f1]' />
                </div>
                <div className='py-2'>
                    <p className='font-medium text-lg'>Value</p>
                    <input className='w-full h-8 rounded-lg border-[2px] px-1 focus:outline-none bg-[#f1f1f1]' />
                </div>
                <button className='w-full bg-softBlack text-white font-medium text-lg py-2 px-20 rounded-xl hover:scale-[97%] duration-300 ease-in-out mt-8'>Button</button>

            </div>
        </div>
    );
}

export default InvestmentCard;
