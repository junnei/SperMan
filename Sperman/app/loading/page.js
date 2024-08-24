"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { LuBadgeCheck } from "react-icons/lu";

const LoadingPage = () => {
    const router = useRouter(); // Initialize the router
    const [progress, setProgress] = useState(0);
    const [activeStep, setActiveStep] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev < 100) {
                    return prev + 1;
                } else {
                    clearInterval(interval);
                    return prev;
                }
            });
        }, 30); // 30ms interval for 3 seconds total

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const totalSteps = 4;
        const stepDuration = 3000 / totalSteps; // 750ms per step to fit within 3 seconds

        const stepInterval = setInterval(() => {
            setActiveStep((prev) => {
                if (prev < totalSteps) {
                    return prev + 1;
                } else {
                    clearInterval(stepInterval);
                    return prev;
                }
            });
        }, stepDuration); // Adjusted to ensure all steps are completed within 3 seconds

        // After 3 seconds, navigate to the VerifiedPage
        const timeout = setTimeout(() => {
            router.push('/verified'); // Navigate to the verified page
        }, 3000);

        return () => {
            clearInterval(stepInterval);
            clearTimeout(timeout); // Clear timeout on component unmount
        };
    }, [router]);

    const checkColor = (step) => (activeStep >= step ? 'text-purple-600' : 'text-black');

    return (
        <div className='p-4'>
            <div className='py-4'>
                <h1 className='text-2xl py-4'>Processing... {progress}%</h1>
                <p>zkPass transgate will take about 1 minute. You can minimize this screen and view the progress in “Recent tasks”</p>
            </div>
            <div className='space-y-4 mt-4'>
                <div className='flex flex-row'>
                    <LuBadgeCheck size="24" className={checkColor(1)} />
                    <p className='ml-2'>Verify personal information</p>
                </div>
                <div className='flex flex-row'>
                    <LuBadgeCheck size="24" className={checkColor(2)} />
                    <p className='ml-2'>Verify personal medical history</p>
                </div>
                <div className='flex flex-row'>
                    <LuBadgeCheck size="24" className={checkColor(3)} />
                    <p className='ml-2'>Verify family medical history</p>
                </div>
                <div className='flex flex-row'>
                    <LuBadgeCheck size="24" className={checkColor(4)} />
                    <p className='ml-2'>Verify education information</p>
                </div>
            </div>
            <button className='w-full text-center mt-8 border border-black text-black px-4 py-2 rounded-lg'>
                Minimize
            </button>
        </div>
    );
};

export default LoadingPage;