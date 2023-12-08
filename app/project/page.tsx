import Image from 'next/image'
import asset3 from '@/assets/asset3.svg'
import InvestmentCard from '@/components/InvestmentCard'
import ProjectData from '@/components/ProjectData'

export default function Project() {

    return (
        <div className=''>
            <div className='relative'>
                <Image src={asset3} className='absolute left-0 -top-28 z-0' alt="logo" width={400} height={50} />
            </div>
            <div className="relative z-10 pt-32 px-28 flex justify-between">
                < ProjectData
                title='Learn Python on Web 3'
                rate='10%'
                bid_amount='0.1'
                minimum_required='2'
                raised={2}
                status='Finished'
                end_auction='2 days'
                description='Learn how to use your Python to develop decentralized applications on Web 3.0.
                Learn how to master your python skills and apply it to breate decentralized apps
                Course and classes with Msc Felipe an AI specialist and seasoned developer using python for AI DApps in Web 3.0 '
                 />
                < InvestmentCard />
            </div>
        </div>

    )
}
