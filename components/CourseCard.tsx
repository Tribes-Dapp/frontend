'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import rectangle from '@/assets/rectangle.svg';
import asset5 from '@/assets/asset5.svg';
import asset8 from '@/assets/asset8.svg';
import arrow from '@/assets/arrow.svg';
import Popup from '@/components/PopUp';
import closeIcon from '@/assets/closeIcon.svg';
import { useCourseContext } from '@/contexts/CourseContext';

type CourseCardProps = {
  title: string;
  description: string;
  price: number;
  type: any;
  image: string;
};

const CourseCard: React.FC<CourseCardProps> = (props) => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const closePopup = () => setPopupOpen(false);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const { title, description, price, type, setTitle, setDescription, setPrice, setType } = useCourseContext();

  const handlePopUp = () => {
    setPopupOpen(true);
    setTitle(props.title);
    setDescription(props.description);
    setPrice(props.price);
    setType(props.type);
  }
  

  return (
    <div className="flex gap-12 mt-16">
      <div className="h-96 w-3/4 rounded-3xl  border-[3px] shadow-xl relative overflow-hidden">
      <Image className='absolute -left-0  overflow-hidden -z-50' src={asset8} alt="logo" width={250} height={100} />
        <div className="backdrop-blur-sm bg-white/20  w-[25%]  h-full rounded-l-3xl absolute z-10"></div>
        <div className="flex items-center justify-between h-full relative z-20 overflow-hidden">
            <div></div>
            <div className='rounded-2xl overflow-hidden'>
              <img src={props.image} alt="Minha Figura" width={380} /> 
            </div>
            <div className="w-[60%] pl-24">
              <p className="text-3xl font-medium my-6 w-[90%]">{props.title}</p>
              <p className="w-[90%] text-lg my-6">{props.description}</p>
            </div>
        </div>
      </div>
      <div className="bg-softGreen h-96 w-1/4 rounded-3xl border-[3px] shadow-xl flex justify-center flex-col items-center">
        <p className="text-3xl font-medium py-6">Buy course</p>
        <div className="divide-y-[3px]">
          <div className="flex flex-col items-center justify-center w-36 p-4">
            <p className="text-xl font-medium">Price</p>
            <p className="text-lg">{props.price} ETH</p>
          </div>
          <div className="flex flex-col items-center justify-center w-36 p-4">
            <p className="text-xl font-medium">Type</p>
            <p className="text-lg">{props.type}</p>
          </div>
        </div>
        <div className="flex justify-center items-center pt-2">
          <button className="bg-softBlack text-white font-medium text-lg py-3 px-4 rounded-xl" onClick={handlePopUp}>
            <Image src={arrow} alt="arrow" width={20} />
          </button>
          <Popup isOpen={isPopupOpen} onClose={closePopup}>
            <div className="flex justify-between w-[50vh]">
              <h1 className="text-3xl font-medium">Buy course</h1>
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
            <div className='my-8'>
              <p className='text-xl font-medium my-2'>{title} </p>
              <p className='leading-7 w-[50vh]'>{description}</p>
              <p className='mt-2 font-medium text-lg'>Status: {type}</p>
              <div className='flex items-center'>
                <p className='mt-2 font-medium text-lg'>Amount: </p>
                <div className="flex ml-4">
                  <button
                    className="px-2 py-1 cursor-pointer"
                    onClick={handleDecrement}
                  >
                    -
                  </button>
                  <input
                    type="text"
                    value={quantity}
                    readOnly
                    className="w-8 h-8 text-center border rounded-lg"
                  />
                  <button
                    className="px-2 py-1 cursor-pointer"
                    onClick={handleIncrement}
                  >
                    +
                  </button>
                </div>
              </div>
              <p className='mt-8 font-medium text-2xl'>Final price: {quantity * price} ETH</p>
            </div>
            <button
              className="w-full h-10 bg-black text-whiteBackground mt-4 rounded-xl "
            >
              Buy
            </button>
          </Popup>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
