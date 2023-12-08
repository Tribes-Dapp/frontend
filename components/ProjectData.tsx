type ProjectDataProps = {
    title: any;
    rate: any;
    bid_amount: any;
    minimum_required: any;
    raised: any;
    status: any;
    end_auction: any;
    description: any;
};

const ProjectData: React.FC<ProjectDataProps> = (props) => {

    return (
        <div className='w-[50%]'>
            <h1 className="text-5xl font-medium">{props.title}</h1>
            <p className="font-medium pt-4 text-3xl">
                Created by 0x00000000000000
            </p>
            <div className='grid grid-cols-3 gap-1 my-12 w-[80%]'>
                <div className='flex flex-col justify-center items-center mt-2'>
                    <p className='text-4xl font-medium'>{props.rate}%</p>
                    <p className='w-[80%] text-lg text-center'>maximum rate of return</p>
                </div>
                <div className='flex flex-col justify-center items-center  mt-2'>
                    <p className='text-4xl font-medium'>{props.bid_amount} ETH </p>
                    <p className='w-[80%] text-lg text-center'>minimum bid amount</p>
                </div>
                <div className='flex flex-col justify-center items-center  mt-2'>
                    <p className='text-4xl font-medium'>{props.minimum_required} ETH</p>
                    <p className='w-[80%] text-lg text-center'>minimum required to start project</p>
                </div>
                <div className='flex flex-col justify-center items-center  mt-12'>
                    <p className='text-4xl font-medium'>{props.raised}%</p>
                    <p className='w-[80%] text-lg text-center'>Percentage raised</p>
                </div>
                <div className='flex flex-col justify-center items-center  mt-12'>
                    <p className='text-4xl font-medium'>{props.status}</p>
                    <p className='w-[80%] text-lg text-center'>Auction status</p>
                </div>
                <div className='flex flex-col justify-center items-center  mt-12'>
                    <p className='text-4xl font-medium'>{props.end_auction}</p>
                    <p className='w-[80%] text-lg text-center'>End of auction</p>
                </div>
            </div>
            <p className='leading-8	'>{props.description}</p>
        </div>
    );
}

export default ProjectData;
