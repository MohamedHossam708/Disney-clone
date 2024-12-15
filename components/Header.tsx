
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './ThemeToggler'
import SearchInput from './SearchInput'
import GenreDropdown from './GenreDropdown'


export default function Header() {
  return (<>
    <nav className='fixed z-20 top-0 w-full flex justify-between items-center p-5 bg-gradient-to-t from-gray-200/0
     via-gray-900/25 to-gray-900 '>
        <Link href={"/"} className='mr-10'>
        
            <Image
             src="https://www.fotolip.com/wp-content/uploads/2016/05/Disney-logo-vector-5.png" 
             alt="deseny-logo"
              width={100}
              height={100}
              className='cursor-pointer invert-0 dark:invert'/>
        </Link>

        <div className='flex space-x-2'>
            <SearchInput/>
            <ModeToggle/>
            <GenreDropdown/>
        </div>
    </nav>

    </>)
}

