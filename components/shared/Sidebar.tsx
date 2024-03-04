import  Link  from "next/link"
import Image from "next/image"

const Sidebar = () => {
  return (
    <aside className='sidebar'>
      <div className='flex size-full flex-col gap-4 '>
        <Link href="/" className="sidebar-logo">
          <Image src="/assers/images/logo-text.svg"  alt="logo"/>
        </Link>
      </div>

    </aside>
  )
}

export default Sidebar