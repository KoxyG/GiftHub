import * as React from "react"
import Link from "next/link"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import Image from 'next/image';
import { useTheme } from "next-themes"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  const { theme } = useTheme();
  const currentTheme = (theme == 'light') ? 'light' : 'dark'

  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-r-2">
        {/* <Icons.logo className="h-6 w-6" /> */}
        <Image src={`${currentTheme === "light" ? "/images/GiftHub.png" : "/images/GiftHubWhite.png"}`} width={200} height={200} alt="logo" />
         {/* <Image src="/images/GiftHub.png" width={150} height={150} alt="logo" /> */}
        
      </Link>
      {items?.length ? (
        <nav className="flex gap-6">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center text-sm font-medium text-muted-foreground",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}
    </div>
  )
}
