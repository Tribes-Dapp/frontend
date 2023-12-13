
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
                <div className='flex flex-col items-center py-4'>
                    <p className='text-2xl font-medium text-center'>{props.rate}</p>
                    <p className='text-lg text-center'>Return rate</p>
                </div>
                <div className='flex flex-col items-center py-4'>
                    <p className='text-2xl font-medium'>{props.bid} ETH</p>
                    <p className='text-lg text-center'>Bid value</p>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center py-2'>
                <p className='text-xl font-medium text-center'>{props.end_auction}</p>
                <p className='text-lg text-center'>End of auction</p>
            </div>
            <div className='flex flex-col items-center justify-center  py-4'>
                <p className='text-xl font-medium text-center'>{props.creator}</p>
                <p className='text-lg text-center'>Auction creator</p>
            </div>
            <div className='flex flex-col items-center justify-center  py-4'>
                <p className='text-xl font-medium bg-purple px-4 py-1 rounded-lg text-center'>{props.status}</p>
            </div>
        </div>
    );
}

export default BidCard;
