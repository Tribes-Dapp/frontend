import Image from 'next/image'
import asset3 from '@/assets/asset3.svg'
import walletIcon from '@/assets/walletIcon.svg'
import BidCard from '@/components/BidCard'
import TribesCard from '@/components/TribeCard'
import Voucher from '@/components/Voucher'

export default function Profile() {

    return (
        <div className=''>
            <div className='relative'>
                <Image src={asset3} className='absolute left-0 -top-28 z-0' alt="logo" width={400} height={50} />
            </div>
            <div className="relative z-10 pt-32 px-28">
                <h1 className="text-5xl font-medium">Profile</h1>
                <div className='flex items-baseline	gap-2 my-4'>
                    <Image src={walletIcon} className='' alt="logo" width={40}/>
                    <p className='text-3xl font-medium'>0x000000000000000000000</p>
                </div>
            </div>
            <div className='flex'>
            <div className="relative z-10 pt-12 px-28 divide-y divide-gray-500 w-[70%]">
                <div className='flex gap-20 py-4'>
                    <button className='font-medium text-2xl rounded-lg hover:scale-[97%] duration-300 ease-in-out'>
                        My bids
                    </button>
                    <button className='font-medium text-2xl rounded-lg hover:scale-[97%] duration-300 ease-in-out'>
                        Created tribes
                    </button>
                </div>
                <div className='grid grid-cols-3 gap-4 pt-8'>
                    < BidCard
                        rate='10%'
                        bid='0.1'
                        end_auction='12/12/2023'
                        creator='0x0000000000000'
                        status='Bid accepted'
                    />
                    < TribesCard />
                    
                </div>
            </div>
            <div className='w-[30%] min-h-[90%] bg-gray rounded-l-3xl'>
                <div className='flex flex-col items-center justify-center py-12'>
                    <p className='text-3xl font-medium'>Vouchers</p>
                    < Voucher />            
                </div>
            </div>
            </div>
        </div>

    )
}
