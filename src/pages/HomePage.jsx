import { Search } from 'lucide-react'
import React from 'react'

function HomePage() {
  return (
    <div className='bg-[#faf9fb] p-10 flex-1'>
      <div className='max-w-screen-lg mx-auto '>
        <form >
          <label className='input shadow-md flex items-center gap-2'>
            <Search size={"24"}/>
            <input type="text" className='text-sm md:text-md grow' placeholder='What Do You Want to Cook Today?'/>
          </label>
        </form>
      </div>
    </div>
    
  )
}

export default HomePage