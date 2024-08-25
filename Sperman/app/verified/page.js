"use client"

import { LuBadgeCheck } from "react-icons/lu";
import { useRouter } from 'next/navigation';
const VertifiedPage = () => {
    const router = useRouter();

    const handleContinueClick = () => {
        router.push('/'); // Navigate to the loading page
    };

    return (
        <div className='h-full p-4'>
            <div className='py-4'>
                <LuBadgeCheck size="24" className=" text-purple-600" />
                <h1 className='text-2xl py-4'>Fully qualified sperm donor!</h1>
                <p>You have completed all validation processes!</p>
            </div>

            <button
                onClick={handleContinueClick}
                className='w-full text-center mt-8 bg-purple-500 text-white px-4 py-2 rounded-lg'>
                Continue
            </button>
        </div>
    );
};

export default VertifiedPage;
