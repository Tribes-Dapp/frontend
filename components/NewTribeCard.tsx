'use client'
import Image from "next/image";
import plusIcon from '@/assets/plusIcon.svg'
import Popup from '@/components/PopUp';
import closeIcon from '@/assets/closeIcon.svg'
import { useState, ChangeEvent } from "react";
import axios from 'axios';

const NewTribesCard: React.FC = () => {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [creator_rate_pct, setCreatorRatePct] = useState("");
    const [affiliate_rate_pct, setAffiliateRatePct] = useState("");
    const [min_viable_value, setMinViableValue] = useState("");
    const [pledged_value, setPledgedValue] = useState("");
    const [auction_end_time, setAuctionEndTime] = useState("");
    const [minimum_bid, setMinimumBid] = useState("");
    const [presale_start_time, setPresaleStartTime] = useState("");
    const [presale_end_time, setPresaleEndTime] = useState("");
    const [presale_price, setPresalePrice] = useState("");
    const [sale_start_time, setSaleStartTime] = useState("");
    const [sale_end_time, setSaleEndTime] = useState("");
    const [sale_price, setSalePrice] = useState("");
    const [fileImg, setFileImg] = useState<File | null>(null);
    const [urlIPFS, setUrlIPFS] = useState("");

    const [isPopupOpen, setPopupOpen] = useState(false);

    const openPopup = () => setPopupOpen(true);
    const closePopup = () => setPopupOpen(false);

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFileImg(e.target.files?.[0] || null);
      };


    const sendFileToIPFS = async () => {
        if (fileImg) {
          try {
            const formData = new FormData();
            formData.append('file', fileImg);
            console.log(process.env.PINATA_API_KEY)
      
            const resFile = await axios.post('https://api.pinata.cloud/pinning/pinFileToIPFS', formData, {
              headers: {
                'pinata_api_key':  process.env.PINATA_API_KEY,
                'pinata_secret_api_key': process.env.PINATA_SECRET_API_KEY,
                'Content-Type': 'multipart/form-data',
              },
            });
      
            const ImgHash = `https://ipfs.io/ipfs/${resFile.data.IpfsHash}`;
            console.log(ImgHash)
            setUrlIPFS(ImgHash);

            return "Ok";

          } catch (error) {
            console.log('Error sending File to IPFS: ');
            console.log(error);
          }
        }
      };
 

    return (
        <div className='w-[90%] border-[3px] rounded-3xl flex flex-col relative'>
            <div className="flex justify-center items-center h-full">
                <button onClick={openPopup}>
                    <Image src={plusIcon} alt="logo" width={70} height={70} />
                </button>
            </div>

            <Popup isOpen={isPopupOpen} onClose={closePopup}>
                <div className="flex justify-between">
                    <h1 className="text-3xl font-medium">Create new tribe</h1>
                    <button
                        onClick={closePopup}
                    >
                        <Image
                            alt="close"
                            draggable={false}
                            src={closeIcon}
                            width={15}
                            height={15}
                        />
                    </button>
                </div>
                <div className="grid grid-cols-2 gap-10">
                    <div className="py-4">
                        <h1 className="pt-2 font-medium">Name</h1>
                        <input
                            value={name}
                            type='text'
                            onChange={(e) => setName(e.target.value)}
                            className="rounded-xl w-full h-8 px-4 focus:outline-none text-sm border"
                        />
                        <h1 className="pt-2 font-medium">Description</h1>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="rounded-xl w-full px-4 py-2 focus:outline-none text-sm border"
                        ></textarea>
                        <h1 className="pt-2 font-medium">Creator rate</h1>
                        <input
                            value={creator_rate_pct}
                            onChange={(e) => setCreatorRatePct(e.target.value)}
                            className="rounded-xl w-full h-8 px-4 focus:outline-none text-sm border"
                        />
                        <h1 className="pt-2 font-medium">Affiliate rate</h1>
                        <input
                            value={affiliate_rate_pct}
                            onChange={(e) => setAffiliateRatePct(e.target.value)}
                            className="rounded-xl w-full h-8 px-4 focus:outline-none text-sm border"
                        />
                        <h1 className="pt-2 font-medium">Min viable value</h1>
                        <input
                            value={min_viable_value}
                            onChange={(e) => setMinViableValue(e.target.value)}
                            className="rounded-xl w-full h-8 px-4 focus:outline-none text-sm border"
                        />
                        <h1 className="pt-2 font-medium">Pledged value</h1>
                        <input
                            value={pledged_value}
                            onChange={(e) => setPledgedValue(e.target.value)}
                            className="rounded-xl w-full h-8 px-4 focus:outline-none text-sm border"
                        />
                        <h1 className="pt-2 font-medium">Auction End Time</h1>
                        <input
                            value={auction_end_time}
                            type="date"
                            onChange={(e) => setAuctionEndTime(e.target.value)}
                            className="rounded-xl w-full h-8 px-4 focus:outline-none text-sm border"
                        />
                        <h1 className="pt-2 font-medium">Minimum bid</h1>
                        <input
                            value={minimum_bid}
                            onChange={(e) => setMinimumBid(e.target.value)}
                            className="rounded-xl w-full h-8 px-4 focus:outline-none text-sm border"
                        />
                    </div>
                    <div className="py-4">
                        <h1 className="pt-2 font-medium">Pre-sale start time</h1>
                        <input
                            value={presale_start_time}
                            type="date"
                            onChange={(e) => setPresaleStartTime(e.target.value)}
                            className="rounded-xl w-full h-8 px-4 focus:outline-none text-sm border"
                        />
                        <h1 className="pt-2 font-medium">Pre-Sale end time</h1>
                        <input
                            value={presale_end_time}
                            type="date"
                            onChange={(e) => setPresaleEndTime(e.target.value)}
                            className="rounded-xl w-full h-8 px-4 focus:outline-none text-sm border"
                        />
                        <h1 className="pt-2 font-medium">Pre-Sale price</h1>
                        <input
                            value={presale_price}
                            onChange={(e) => setPresalePrice(e.target.value)}
                            className="rounded-xl w-full h-8 px-4 focus:outline-none text-sm border"
                        />
                        <h1 className="pt-2 font-medium">Sale start time</h1>
                        <input
                            value={sale_start_time}
                            type="date"
                            onChange={(e) => setSaleStartTime(e.target.value)}
                            className="rounded-xl w-full h-8 px-4 focus:outline-none text-sm border"
                        />
                        <h1 className="pt-2 font-medium">Sale end time</h1>
                        <input
                            value={sale_end_time}
                            type="date"
                            onChange={(e) => setSaleEndTime(e.target.value)}
                            className="rounded-xl w-full h-8 px-4 focus:outline-none text-sm border"
                        />
                        <h1 className="pt-2 font-medium">Sale price</h1>
                        <input
                            value={sale_price}
                            onChange={(e) => setSalePrice(e.target.value)}
                            className="rounded-xl w-full h-8 px-4 focus:outline-none text-sm border"
                        />
                        <h1 className="pt-2 font-medium">CID</h1>
                        <input
                            type='file'
                            onChange={handleFileChange}
                            className="relative m-0 block w-full min-w-0 flex-auto rounded-xl border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                        />
                        
                    </div>
                </div>
                <button
                    onClick={sendFileToIPFS}
                    className="w-full h-10 bg-black text-whiteBackground mt-4 rounded-xl "
                >
                    Create
                </button>
            </Popup>
        </div>
    );
}

export default NewTribesCard;
