import Image from "next/image";
import rectangle from '@/assets/rectangle.svg'
import Link from "next/link";
type TribesCardProps = {
    id: string
    raised: any;
    status: any;
};

const TribesCard: React.FC<TribesCardProps> = (props) => {

    return (
        <div className='w-[90%] border-[3px] rounded-3xl flex flex-col relative cursor-pointer'>
            <Link href={`/launchpad/${props.id}`}>
                <div className="bg-gradient-to-r from-purple h-1/4 w-full rounded-t-3xl absolute z-0"></div>
                <div className=' backdrop-blur-sm bg-white/50 rounded-t-3xl w-full  h-1/4 absolute  z-0' ></div>
                <div className="relative z-20 flex justify-center items-center">
                    <Image src={rectangle} className=' rounded-3xl mt-12' alt="logo" width={250} height={100} />
                </div>

                <div className="flex flex-col justify-center items-center my-8 gap-y-2">
                    <p className="text-2xl font-medium">Raised amount:</p>
                    <p className="text-2xl">{props.raised}%</p>
                    <p className="text-2xl font-medium mt-4">Status</p>
                    <p className="text-2xl">{props.status}</p>
                </div>
            </Link>

        </div>
    );
}

export default TribesCard;
