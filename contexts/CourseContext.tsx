'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react';

type CourseContextType = {
  title: string;
  description: string;
  setTitle: (title: string) => void;
  setDescription: (description: string) => void;
  price: number;
  setPrice: (price: number) => void;
  type: string;
  setType: (status: string) => void;
};

const CourseContext = createContext<CourseContextType | undefined>(undefined);

export const CourseProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [type, setType] = useState('');

  const contextValue: CourseContextType = {
    title,
    description,
    setTitle,
    setDescription,
    price,
    setPrice,
    type,
    setType,
  };

  return <CourseContext.Provider value={contextValue}>{children}</CourseContext.Provider>;
};

export const useCourseContext = () => {
  const context = useContext(CourseContext);
  if (!context) {
    throw new Error('useCourseContext must be used within a CourseProvider');
  }
  return context;
};
