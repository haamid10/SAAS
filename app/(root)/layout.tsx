import { Sidebar } from 'lucide-react'
import React from 'react'

const Layout = ({children}:{children: React.ReactNode}) => {
  return (
        <main className='root'>
          {/* sidebar */}
          <Sidebar/>
          {/* Mobile navigation */}

            <div className='rrot-container'>
                <div className="wrapper">
                {children}
                </div>
            </div>
           </main>
  )
}

export default Layout