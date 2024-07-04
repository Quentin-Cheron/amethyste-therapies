"use client";

import { useState } from "react";

// SHADCN COMPONENTS

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { Separator } from "../ui/separator";
import { MenuIcon } from "lucide-react";

// NAVIGATION

const navigation = [
  { name: "Accueil", href: "/" },
  { name: "Qui suis-je ?", href: "/qui-suis-je" },
  { name: "Contact", href: "/contact" },
  { name: "Tarifs", href: "/tarifs" },
  { name: "Services", href: "/services" },
  { name: "Avis", href: "/avis" },
  { name: "Rendez-vous", href: "/rendez-vous" },
];

export default function Header() {
  return (
    <header className="relative">
      <nav
        className="mx-auto flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <Link href="/" className="-m-1.5 p-1.5">
          <span className="sr-only">Your Company</span>
          <img
            className="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt=""
          />
        </Link>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>
      <Sheet>
        <SheetTrigger
          className="lg:hidden absolute top-1/2 -translate-y-[50%] right-5"
          asChild
        >
          <MenuIcon className="h-6 w-6 cursor-pointer" />
        </SheetTrigger>
        <SheetContent side="top">
          <SheetHeader>
            <SheetTitle></SheetTitle>
          </SheetHeader>
          <ul className="flex flex-col gap-4">
            {navigation.map((item) => (
              <>
                <li key={item.name}>
                  <Link
                    className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary transition-colors"
                    href={item.href}
                  >
                    {item.name}
                  </Link>
                </li>
                <Separator />
              </>
            ))}
          </ul>
        </SheetContent>
      </Sheet>
    </header>
  );
}
