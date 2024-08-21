import React from 'react'
import ContactDialog from './ContactDialog'
import useContactHook from '../hooks/useContactHook';



const SideBar = () => {
  const { contacts, setMode, mode } = useContactHook();
  return (
    <div className='bg-slate-50 lg:p-6 p-2 min-h-screen'>
       <ContactDialog mode={mode}/>
    </div>
  )
}

export default SideBar