"use client"
import {Sheet,SheetContent,SheetTrigger} from "@/components/ui/sheet"
import { navLinks } from "@/constants"
import { SignedIn, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from 'next/navigation'



const MobileNav = () => {
  const Pathname  = usePathname();
  return (
    <header className="header">
      <Link href="/" className="flex  items-center gap-2 md:py-2">
        <Image src="/assets/images/logo-text.svg" alt="logo"  width={180} height={28}/>
      </Link>
      <nav className="flex gap-2">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
          <Sheet>
            <SheetTrigger>
              <Image src="/assets/icons/menu.svg" alt="menu" height={32} width={32} className=" cursor-pointer"/> 
               
            </SheetTrigger>
            <SheetContent  className="sheet-content sm:w-64">
              <>
              <Image src="/assets/images/logo-text.svg" alt="logo" height={32} width={152} className=" cursor-pointer "/>
              <ul className="header-nav_elements">
                    {navLinks.slice(0,6).map((link) => {
                      const isActive = link.route === Pathname;
                      return (
                        <li 
                        className={`${isActive && 'gradient-text'} p-18 flex whitespace-nowrap text-dark-700`}
                        key={link.route}>
                          <Link href={link.route} className="sidebar-link">
                          <Image src={link.icon} alt={link.label} width={24} height={24}/>
                          {link.label}

                          </Link>
                          

                        </li>
                      )
                    })}
                    </ul>
                    
              </>
            </SheetContent>
          </Sheet>
        </SignedIn>
      </nav>
    
    
    </header>
  )
}

export default MobileNav