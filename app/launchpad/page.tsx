'use client'
import { useState } from 'react'
import Image from 'next/image'
import asset3 from '@/assets/asset3.svg'
import filterImage from '@/assets/filterImage.svg'
import magnifier from '@/assets/magnifier.svg'
import ProjectCard from '@/components/ProjectCard'
import Popup from '@/components/PopUp'
import closeIcon from '@/assets/closeIcon.svg'
import closeIconWhite from '@/assets/closeIconWhite.svg'

const courseData = {
    "courses": [
        {
            "title": "Curso de Desenvolvimento Python para DApps",
            "id": "1",
            "image": "https://ipfs.io/ipfs/QmYxmjjJUUzbWBxdDAGYoNSsioDfWpw1XE37RZGygkrbUT",
            "yield": "10",
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
            "yield": "9",
            "bid_amount": "0.2",
            "minimum_required": "3",
            "raised": 5,
            "status": "Aberto",
            "end_auction": "5 dias",
            "description": "Aprofunde seus conhecimentos em Machine Learning com este curso avançado. Explore algoritmos complexos, técnicas de otimização e casos de uso do mundo real. Instruído por Dr. Maria, uma especialista em Machine Learning com anos de experiência em pesquisa e aplicação prática."
        },
    ]
}

export default function Launchpad() {

    const [isPopupOpen, setPopupOpen] = useState(false);
    const openPopup = () => setPopupOpen(true);
    const closePopup = () => setPopupOpen(false);

    const [searchTerm, setSearchTerm] = useState('');
    const [minYield, setMinYield] = useState('');
    const [maxYield, setMaxYield] = useState('');
    const [filtersApplied, setFiltersApplied] = useState(false);

    const handleFilterButtonClick = () => {
        if (filtersApplied && (minYield || maxYield)) {
            setSearchTerm('');
            setMinYield('');
            setMaxYield('');
            setFiltersApplied(false);
        } else {
            setPopupOpen(true);
        }
    };

    const filteredCourses = courseData.courses.filter((course) =>
    (
        (course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            course.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (!filtersApplied || ((!minYield || parseInt(course.yield) >= parseInt(minYield)) &&
            (!maxYield || parseInt(course.yield) <= parseInt(maxYield))))

    )
    );

    const handleFilterSave = () => {
        if (minYield || maxYield) {
            setFiltersApplied(true);
        }
        setPopupOpen(false);
    };


    return (
        <div className=''>
            <div className='relative'>
                <Image src={asset3} className='absolute left-0 -top-28 -z-10' alt="logo" width={400} height={50} />
            </div>
            <div className="relative z-10 pt-32 px-28">
                <h1 className="text-5xl font-medium">Creator's launchpad</h1>
                <p className="font-medium pt-8 text-xl w-[38%]">
                    Explore the open projects to receive found on different areas and
                    funding stage. Place a bid to support the project or just guarantee
                    your spot over a pre-sale event
                </p>
            </div>
            <div className="relative z-10 pt-12 px-28">
                <div className='flex gap-4'>
                    <button onClick={handleFilterButtonClick} className={`flex gap-2 items-center border-2 px-4 py-1 rounded-lg ${filtersApplied ? 'bg-black text-white' : ''}`}>
                        {filtersApplied ? (<Image src={closeIconWhite} className='text-white' alt="logo" width={10} height={15} />) : (<Image src={filterImage} className='text-white	' alt="logo" width={17} height={15} />)
                        }
                        <p className='text-xl font-medium relative z-30'>Filter</p>
                    </button>
                    <div className='w-full flex border-2 gap-2 rounded-lg '>
                        <Image src={magnifier} className='mx-3' alt="logo" width={17} height={15} />
                        <input
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className='w-full h-full rounded-lg focus:outline-none bg-[#f1f1f1]' />
                    </div>
                </div>
            </div>
            <div className='relative z-0 py-12 px-28'>
                <p className='text-4xl font-medium'>All launchpads</p>
                {filteredCourses.map((course) => (
                    <ProjectCard
                        key={course.id}
                        image={course.image}
                        id={course.id}
                        title={course.title}
                        description={course.description}
                        expected={course.minimum_required}
                        raised={course.raised}
                        yield={course.yield}
                        status={course.status}
                    />
                ))}
            </div>

            <Popup isOpen={isPopupOpen} onClose={closePopup}>
                <div className='w-[50vh]'>
                    <div className="flex justify-between">
                        <h1 className="text-3xl font-medium">Filter</h1>
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
                        <input
                            type="number"
                            value={minYield}
                            onChange={(e) => setMinYield(e.target.value)}
                            placeholder="Min Yield"
                            className='w-[40%] border-[3px] text-xl rounded-xl h-12 px-4 focus:outline-none '
                        />
                        <input
                            type="number"
                            value={maxYield}
                            onChange={(e) => setMaxYield(e.target.value)}
                            placeholder="Max Yield"
                            className='w-[40%] border-[3px] text-xl rounded-xl h-12 px-4 focus:outline-none '
                        />
                    </div>
                    <button
                        onClick={handleFilterSave}
                        className="w-full h-12 bg-black text-xl text-whiteBackground mt-4 rounded-xl font-medium"
                    >
                        Apply filter
                    </button>
                </div>
            </Popup>
        </div>

    )
}
