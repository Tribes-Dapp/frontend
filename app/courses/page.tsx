'use client'
import { useState } from 'react'
import Image from 'next/image'
import asset3 from '@/assets/asset3.svg'
import filterImage from '@/assets/filterImage.svg'
import magnifier from '@/assets/magnifier.svg'
import CourseCard from '@/components/CourseCard'
import { CourseProvider } from '@/contexts/CourseContext';
import closeIconWhite from '@/assets/closeIconWhite.svg';
import Popup from '@/components/PopUp'
import closeIcon from '@/assets/closeIcon.svg'

const courseData = {
    "courses": [
        {
            "title": "Curso de Desenvolvimento Python para DApps",
            "id": "1",
            "image": "https://ipfs.io/ipfs/QmYxmjjJUUzbWBxdDAGYoNSsioDfWpw1XE37RZGygkrbUT",
            "price": 10,
            "type": "Sale",
            "rate": "10",
            "bid_amount": "0.1",
            "minimum_required": "2",
            "raised": 2,
            "status": "Finalizado",
            "end_auction": "2 dias",
            "description": "Aprenda como usar o Python para desenvolver aplicativos descentralizados na Web 3.0. Aperfeiçoe suas habilidades em Python e aplique-as na criação de aplicativos descentralizados. Curso e aulas com Msc Felipe, especialista em IA e desenvolvedor experiente que utiliza Python para DApps em Web 3.0."
        },
        {
            "title": "Curso Avançado de Machine Learning",
            "id": "2",
            "image": "https://ipfs.io/ipfs/QmPsiKetVi4Pn45F19uEGo1B8hM3VNGGfuwEuBvvW6mG1H",
            "rate": "9",
            "price": 10,
            "type": "Pre-sale",
            "bid_amount": "0.2",
            "minimum_required": "3",
            "raised": 5,
            "status": "Aberto",
            "end_auction": "5 dias",
            "description": "Aprofunde seus conhecimentos em Machine Learning com este curso avançado. Explore algoritmos complexos, técnicas de otimização e casos de uso do mundo real. Instruído por Dr. Maria, uma especialista em Machine Learning com anos de experiência em pesquisa e aplicação prática."
        },
    ]
}

export default function Courses() {

    const [isPopupOpen, setPopupOpen] = useState(false);
    const openPopup = () => setPopupOpen(true);
    const closePopup = () => setPopupOpen(false);

    const [searchTerm, setSearchTerm] = useState('');
    const [type, setType] = useState('');
    const [filtersApplied, setFiltersApplied] = useState(false);

    const handleFilterButtonClick = () => {
        if (filtersApplied && type) {
            setSearchTerm('');
            setType('');
            setFiltersApplied(false);
        } else {
            setPopupOpen(true);
        }
    };

    const filteredCourses = courseData.courses.filter((course) =>
    (
      (course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (!filtersApplied || course.type == type) 
    )
  );

  const handleFilterSave = () => {
    if (type || searchTerm) {
        setFiltersApplied(true);
    }
    setPopupOpen(false);
    };


    return (
        <div className='relative'>
            <div className=''>
                <Image src={asset3} className='absolute left-0 -top-28 -z-10' alt="logo" width={400} height={50} />
            </div>
            <div className="relative z-0 pt-32 px-28">
                <h1 className="text-5xl font-medium">Available courses</h1>
                <p className="font-medium pt-8 text-xl w-[38%]">
                    Explore the open projects to receive found on different areas and
                    funding stage. Place a bid to support the project or just guarantee
                    your spot over a pre-sale event
                </p>
            </div>
            <div className="relative z-0 pt-12 px-28">
                <div className='flex gap-4'>
                    <button onClick={handleFilterButtonClick} className={`flex gap-2 items-center border-2 px-4 py-1 rounded-lg ${filtersApplied ? 'bg-black text-white' : ''}`}>
                        {filtersApplied ? (<Image src={closeIconWhite} className='text-white' alt="logo" width={10} height={10} />) : (<Image src={filterImage} className='text-white	' alt="logo" width={17} height={15} />)
                        }
                        <p className='text-xl font-medium relative z-30'>Filter</p>
                    </button>
                    <div className='w-full flex border-2 gap-2 rounded-lg'>
                        <Image src={magnifier} className='mx-3' alt="logo" width={17} height={15} />
                        <input
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className='w-full h-full rounded-lg focus:outline-none bg-[#f1f1f1]' />
                    </div>
                </div>
            </div>
            <div className='relative z-0 px-28 my-12'>
                <p className='text-4xl font-medium'>All Courses</p>
                <CourseProvider>
                    {filteredCourses.map((filteredCourse) => (
                        <CourseCard
                            key={filteredCourse.id}
                            image={filteredCourse.image}
                            title={filteredCourse.title}
                            description={filteredCourse.description}
                            price={filteredCourse.price}
                            type={filteredCourse.type}
                        />
                    ))}
                </CourseProvider>

            </div>

            <Popup isOpen={isPopupOpen} onClose={closePopup}>
                <div className='w-[50vh]'>
                    <div className="flex justify-between">
                        <h1 className="text-2xl font-medium">Filter</h1>
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
                    <div className='flex justify-center gap-6 my-6'>
                        <select
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                            className='w-[40%] rounded-xl w-full px-4 h-12 focus:outline-none text-sm border border-[3px] text-xl cursor-pointer'
                        >
                            <option value="">Select Type</option>
                            <option value="Sale">Sale</option>
                            <option value="Pre-sale">Pre-sale</option>
                        </select>
                    </div>
                    <button
                        onClick={handleFilterSave}
                        className="w-full h-12 bg-black text-white mt-4 rounded-xl text-xl"
                    >
                        Apply filter
                    </button>
                </div>
            </Popup>
        </div>

    )
}
