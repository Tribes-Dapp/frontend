'use client'
import React, { useState } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image'
import asset3 from '@/assets/asset3.svg'
import InvestmentCard from '@/components/InvestmentCard'
import ProjectData from '@/components/ProjectData'

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

  

const ProjectDetailPage = ({ params: { slug } }: { params: { slug: string } }) => {

  const selectedCourse = courseData.courses.find((course) => course.id === slug);

  if (!selectedCourse) notFound();

  return (
    <div className=''>
            <div className='relative'>
              <Image src={asset3} className='absolute left-0 -top-28 -z-10' alt="logo" width={400} height={50} />
            </div>
            <div className="relative z-10 pt-32 px-28 flex justify-between">
                < ProjectData
                title={selectedCourse.title}
                rate={selectedCourse.rate}
                bid_amount={selectedCourse.bid_amount}
                minimum_required={selectedCourse.minimum_required}
                raised={selectedCourse.raised}
                status={selectedCourse.status}
                end_auction={selectedCourse.end_auction}
                description={selectedCourse.description}
                 />
                < InvestmentCard />
            </div>
    </div>
  );
};

export default ProjectDetailPage;
