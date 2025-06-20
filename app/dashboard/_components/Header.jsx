"use client"
import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

export const Header = () => {
    const path=usePathname()
    useEffect(()=>{
        console.log(path);
    })
  return (
    <div className='flex p-4 items-center justify-between bg-secondary shadow-sm'>
        <Link href="/" className="flex items-center gap-2 select-none hover:opacity-80 transition">
          <span className="inline-block bg-violet-100 p-2 rounded-full">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" rx="16" fill="#6366F1"/>
              <ellipse cx="11.5" cy="16" rx="2.5" ry="3" fill="white"/>
              <ellipse cx="20.5" cy="16" rx="2.5" ry="3" fill="white"/>
              <ellipse cx="11.5" cy="16" rx="1" ry="1.2" fill="#6366F1"/>
              <ellipse cx="20.5" cy="16" rx="1" ry="1.2" fill="#6366F1"/>
            </svg>
          </span>
          <span className="text-xl font-bold text-violet-700 tracking-tight">HrXAi</span>
        </Link>
        <ul className='hidden md:flex gap-6'>
            <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path=='/dashboard' && 'text-primary font-bold'}`}>Dashboard</li>
            <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path=='/dashboard/questions' && 'text-primary font-bold'}`}>Questions</li>
            <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path=='/dashboard/upgrade' && 'text-primary font-bold'}`}>Upgrade</li>
            <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path=='/dashboard/how' && 'text-primary font-bold'}`}>How its works?</li>
        </ul>
        <UserButton/>
    </div>
  )
}
