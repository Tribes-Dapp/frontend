
type BidCardProps = {
    rate: any;
    bid: any;
    end_auction: any;
    creator: any;
    status: any;
};

const BidCard: React.FC<BidCardProps> = (props) => {

    return (
        <div className='w-[90%] border-[3px] p-6 rounded-3xl flex flex-col'>
            <p>12/12/2023</p>
            <div className='flex items-center justify-center gap-8'>
                <div className='flex flex-col items-center py-8'>
                    <p className='text-3xl font-medium'>{props.rate}</p>
                    <p className='text-xl'>Return rate</p>
                </div>
                <div className='flex flex-col items-center py-8'>
                    <p className='text-3xl font-medium'>{props.bid} ETH</p>
                    <p className='text-xl'>Bid value</p>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center py-4'>
                <p className='text-2xl font-medium'>{props.end_auction}</p>
                <p className='text-lg'>End of auction</p>
            </div>
            <div className='flex flex-col items-center justify-center  py-4'>
                <p className='text-2xl font-medium'>{props.creator}</p>
                <p className='text-lg'>Auction creator</p>
            </div>
            <div className='flex flex-col items-center justify-center  py-4'>
                <p className='text-xl font-medium bg-purple px-4 py-1 rounded-lg'>{props.status}</p>
            </div>
        </div>
    );
}

export default BidCard;
