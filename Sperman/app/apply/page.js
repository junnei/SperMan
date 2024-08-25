"use client"

import React from 'react'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { CgSmileMouthOpen } from "react-icons/cg";
import { BiSolidVial } from "react-icons/bi";
import { CiMedicalCross } from "react-icons/ci";
import { LuBadgeCheck } from "react-icons/lu";

const ApplyPage = () => {
    const router = useRouter(); // Initialize the router

    const handleApplyClick = () => {
        router.push('/loading'); // Navigate to the loading page
    };
    return (
        <div className='p-4'>
            <div className='relative'>
                <Image
                    src="/apply.png"
                    alt="Apply Image"
                    width={500}
                    height={300}
                />
                <button
                    onClick={handleApplyClick}
                    className='absolute left-1/2 transform -translate-x-1/2 top-2/3 mt-4 bg-purple-500 text-white px-4 py-2 rounded'>
                    Apply Now
                </button>
            </div>
            <div className='space-y-4'>
                <h1 className='text-2xl'>Why be a sperm donor?</h1>
                <p className='text-base'>Benefits of donating sperm with sperman</p>
                <div className='flex felx-row'>
                    <CgSmileMouthOpen size="50" />
                    <p>Be a force for good and help families in need around the globe as a sperm donor!</p>
                </div>
                <div className='flex felx-row'>
                    <BiSolidVial size="50" />
                    <p>Earn generous sperm donor compensation, up to $4000 over 6 months.</p>
                </div>
                <div className='flex felx-row pb-4'>
                    <CiMedicalCross size="50" />
                    <p>Receive health screenings and exams at no-cost to you.</p>
                </div>
            </div>


            <div className='space-y-4'>
                <h1 className='text-2xl'>Sperm Donor Qualifications?</h1>
                <div className='flex felx-row'>
                    <LuBadgeCheck size="24" />
                    <p>18-39 years old male</p>
                </div>
                <div className='flex flex-row'>
                    <LuBadgeCheck size="24" />
                    <p>High school / college / grad, grad student</p>
                </div>
                <div className='flex flex-row'>
                    <LuBadgeCheck size="24" />
                    <p>Healthy</p>
                </div>
                <div className='flex flex-row'>
                    <LuBadgeCheck size="24" />
                    <p> Legally able to work in the US</p>
                </div>
            </div>

        </div>
    )
}

export default ApplyPage