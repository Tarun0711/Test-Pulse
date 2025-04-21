import React, { useEffect } from 'react';
import { Outlet } from "react-router-dom";
import Navbar from '../Components/Core/Home/Navbar';
import { setStep } from '../slices/QuizSlice';
import { useDispatch } from 'react-redux';

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(setStep(0));
    };
  });

  return (
    <div className='h-screen '>
      <Navbar/>
      <div className='md:mt-20  h-full mt-16'>
        <Outlet/>
      </div>
    </div>
  );
}