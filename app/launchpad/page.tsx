import Image from 'next/image'
import asset3 from '@/assets/asset3.svg'
import filterImage from '@/assets/filterImage.svg'
import magnifier from '@/assets/magnifier.svg'
import ProjectCard from '@/components/ProjectCard'

const courseData = {
    "courses": [
      {   
        "title": "Curso de Desenvolvimento Python para DApps",
        "id": "1",
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
          "rate": "9",
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

    return (
        <div className=''>
            <div className='relative'>
                <Image src={asset3} className='absolute left-0 -top-28 z-0' alt="logo" width={400} height={50} />
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
                    <button className='flex gap-2 items-center border-2 px-4 py-1 rounded-lg hover:scale-[97%] duration-300 ease-in-out'>
                        <Image src={filterImage} alt="logo" width={17} height={15} />
                        <p className='text-xl font-medium relative z-30'>Filtro</p>
                    </button>
                    <div className='w-full flex border-2 gap-2 rounded-lg '>
                        <Image src={magnifier} className='mx-3' alt="logo" width={17} height={15} />
                        <input className='w-full h-full rounded-lg focus:outline-none bg-[#f1f1f1]' />
                    </div>
                </div>
            </div>
            <div className='relative z-0 pt-12 px-28'>
                <p className='text-4xl font-medium'>All launchpads</p>
                {courseData.courses.map((course) => (
                    <ProjectCard 
                    id={course.id}
                    title={course.title}
                    description={course.description}
                    expected={course.minimum_required}
                    raised={course.raised}
                    yield={course.rate}
                    status={course.status}
                    />
                ))}
            </div>
        </div>

    )
}
