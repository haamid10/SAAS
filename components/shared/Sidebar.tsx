import  Link  from "next/link"
import Image from "next/image"
import { SignedIn } from "@clerk/nextjs"
import { usePathname } from "next/navigation"
import { navLinks } from "@/constants"

const Sidebar = () => {
  const Pathname = usePathname
  return (
    <aside className='sidebar'>
      <div className='flex size-full flex-col gap-4 '>
        
        <Link href="/" className="sidebar-logo">
          <Image src="/assets/images/logo-text.svg"  alt="logo" width={120} height={120}/>
        </Link>

        <nav className="sidebar-nav">
          <SignedIn>
            <ul className="sidebar-nav_elements">
              {navLinks.map((link) => {
                const isActive =link.route === Pathname;
                return (
                  <li key={link.route} className={`sidebar-nav-element group ${isActive ? 'bg-purple-gradient text-white' : 'text-gray-700'}`}>
                    <Link href={link.route} className="sidebar-link">
                    <Image src={link.icon} alt={link.label} width={24} height={24} className={`${isActive && 'brightness-200'}`}/>
                    {link.label}

                    </Link>
                    

                  </li>
                )
              })}
            </ul>
          </SignedIn>

        </nav>
      </div>

    </aside>
  )
}

export default Sidebar