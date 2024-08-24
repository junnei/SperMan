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

import PostCard from '@/components/postcard';
import { useState } from 'react';

interface Post {
  image: string;
  title: string;
  subtitle: string;
  description: string;
}

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const posts: Post[] = [
    {
      image: 'https://via.placeholder.com/400',
      title: '첫 번째 게시글',
      subtitle: '게시글의 부제목',
      description: '이것은 첫 번째 게시글의 설명입니다. 이 곳에 게시글의 내용을 요약하여 표시할 수 있습니다.',
    },
    {
      image: 'https://via.placeholder.com/400',
      title: '두 번째 게시글',
      subtitle: '또 다른 부제목',
      description: '여기에 두 번째 게시글의 설명이 들어갑니다. 게시글의 내용을 간략하게 표현할 수 있습니다.',
    },
  ];

  const searchInput = (
    <Input
      aria-label="Search"
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

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {posts.map((post, index) => (
          <PostCard
            key={index}
            image={post.image}
            title={post.title}
            subtitle={post.subtitle}
            description={post.description}
          />
        ))}
      </div>

      <div className="inline-block max-w-xl text-center justify-center">
        <h1 className={title()}>Make&nbsp;</h1>
        <h1 className={title({ color: "violet" })}>beautiful&nbsp;</h1>
        <br />
        <h1 className={title()}>
          websites regardless of your design experience.
        </h1>
        <h2 className={subtitle({ class: "mt-4" })}>
          Beautiful, fast and modern React UI library.
        </h2>
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.links.docs}
        >
          Documentation
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>

      <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            Get started by editing <Code color="primary">app/page.tsx</Code>
          </span>
        </Snippet>
      </div>
    </section>
  );
}
