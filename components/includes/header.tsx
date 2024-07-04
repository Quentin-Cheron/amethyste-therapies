"use client";

// SHADCN COMPONENTS

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";
import { Separator } from "../ui/separator";
import { MenuIcon } from "lucide-react";
import { cn } from "@/lib/utils";

// NAVIGATION

const navigation = [
  { name: "Accueil", href: "/" },
  { name: "Qui suis-je ?", href: "/qui-suis-je" },
  { name: "Contact", href: "/contact" },
  { name: "Tarifs", href: "/tarifs" },
  { name: "Services", href: "/services" },
  { name: "Avis", href: "/reviews" },
  {
    name: "Rendez-vous",
    href: "https://www.medoucine.com/consultation/montelimar/stephanie-cheron/4031?utm_source=bouton-rdv&utm_medium=pack-com&utm_campaign=stephanie-cheron",
    blank: true,
  },
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
          <Image
            className="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company Logo"
            width={32}
            height={32}
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
        <div className="hidden lg:flex lg:gap-x-12 items-center">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              target={item.blank ? "_blank" : "_self"}
              className={cn(
                "text-sm font-semibold leading-6 text-gray-900 transition-colors",
                item.name === "Rendez-vous"
                  ? "bg-primary text-white py-2 px-3 rounded-md  hover:text-white/60"
                  : " hover:text-primary"
              )}
            >
              {item.name}
            </Link>
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
              <li key={item.name}>
                <Link
                  className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary transition-colors"
                  href={item.href}
                >
                  {item.name}
                </Link>
                <Separator />
              </li>
            ))}
          </ul>
        </SheetContent>
      </Sheet>
    </header>
  );
}
