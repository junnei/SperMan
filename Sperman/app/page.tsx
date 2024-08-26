"use client";

import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon, WindowViewIcon, WideViewIcon } from "@/components/icons";

import {
  SearchIcon,
} from "@/components/icons";

import { Kbd } from "@nextui-org/kbd";
import { Input } from "@nextui-org/input";

import { useRouter } from 'next/navigation';
import PostCard from '@/components/postcard';
import { useState } from 'react';

interface Post {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  is_new?: boolean; 
}

export default function Home() {
  
  const posts: Post[] = [
    {
      image: 'image1.png',
      title: 'SP-240824-005',
      subtitle: 'Artistic Entrepreneur',
      description: '6’ - Brown Eyes - Dark Brown Hair',
      is_new: true,
    },
    {
      image: 'image2.png',
      title: 'SP-240824-004',
      subtitle: 'Sports & Psych Pro',
      description: '6’3” - Hazel Eyes - Dark Brown Hair',
      is_new: true,
    },
    {
      image: 'image3.png',
      title: 'SP-240824-003',
      subtitle: 'Dancing Double PH.D.',
      description: '5’9 - Brown Eyes - Dark Brown Hair',
    },
    {
      image: 'image4.png',
      title: 'SP-240824-002',
      subtitle: 'Artistic Entrepreneur',
      description: '6’2” - Blue Eyes - Blond Hair',
    },
    {
      image: 'image5.png',
      title: 'SP-240824-001',
      subtitle: 'Animal loving Engineer',
      description: '5’11 - Black Eyes - Dark Brown Hair',
    },
  ];
  const router = useRouter();

  const handleClick = () => {
    router.push('/search'); // 클릭 시 지정된 링크로 이동
  };

  const searchInput = (
    <Input
      aria-label="Search"
      onClick={handleClick}
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );
  
  return (
    <section className="flex flex-col items-start justify-center gap-4">
      {searchInput}
      <div className="flex flex-row inline-block w-full text-center justify-between">
        <div className="flex flex-row inline-block max-w-xl text-center justify-center">
          <div className="px-1">
            <WindowViewIcon/>
          </div>
          <div>
            <WideViewIcon/>
          </div>
        </div>
        <div className="flex px-2">
          <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 px-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
            All
          <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
          </svg>
          </button>
        </div>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
        {posts.map((post, index) => (
          <PostCard
            key={index}
            image={post.image}
            title={post.title}
            subtitle={post.subtitle}
            description={post.description}
            link="/detail"
            is_new={post.is_new}
          />
        ))}
      </div>

    </section>
  );
}
