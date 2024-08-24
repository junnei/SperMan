"use client";

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon,
  PersonIcon,
  Logo,
} from "@/components/icons";
import React from "react";
export const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <NextUINavbar maxWidth="xl" className="flex" position="sticky" onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="basis-full" justify="start">
        <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
        <NavbarContent className="basis-full" justify="center">
          <NextLink className="flex justify-center items-center gap-1" href="/">
            <p className="font-bold text-inherit">Sperman</p>
          </NextLink>
        </NavbarContent>
        <NavbarContent className="basis-full" justify="end">
          <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
          <PersonIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
        </NavbarContent>
      </NavbarContent>
    </NextUINavbar>
  );
};
