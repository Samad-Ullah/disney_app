import React from 'react'
import { signIn , signOut , useSession} from 'next-auth/react'
import Link from 'next/link'
import Image from 'next/image'
import { Router, useRouter } from 'next/router'
import {
    HomeIcon,
    SearchIcon,
    PlusIcon,
    StarIcon,
  } from "@heroicons/react/solid";

const Navbar = () => {

    const { data: session } = useSession()
    const image = session?.user?.image
    const router = useRouter()
    console.log("hy this is my data ==>" , useSession())
  return (
<header className="sticky bg-[#040714] top-0 z-[1000] flex justify-between items-center px-10 md:px-12 h-[72px]">
  <div>
  <Image
        src="/images/logo.svg"
        alt=""
        width={80}
        height={80}
        className="cursor-pointer"
        onClick={() => router.push("/")}
      />    
  </div>

      {session && (
        <div className="hidden ml-10 md:flex items-center space-x-6">
          <a className="header-link group">
            <HomeIcon className="h-4 w-5 text-white" />
            <span className="span text-white">Home</span>
          </a>
          <a className="header-link group">
            <SearchIcon className="h-4 w-5 text-white" />
            <span className="span text-white">Search</span>
          </a>
          <a className="header-link group">
            <PlusIcon className="h-4 w-5 text-white" />
            <span className="span text-white">Watchlist</span>
          </a>
          <a className="header-link group">
            <StarIcon className="h-4 w-5 text-white" />
            <span className="span text-white">Originals</span>
          </a>
          <a className="header-link group text-white" href={'#movies'}>
            <Image src="/images/movie-icon.svg" alt="" className="h-5" width={30} height={30}/>
            <span className="span text-white">Movies</span>
          </a>
          <a className="header-link group text-white" href={'#series'}>
            <Image src="/images/series-icon.svg" alt="" className="h-5" width={30} height={30} />
            <span className="span text-white">Series</span>
          </a>
        </div>
      )}
{/* {session && <h4 className='text-white'>{session.user?.name}</h4>} */}
<div>
{   
    session ?
    <div className='flex'>
    <img src={`${image}`} width='40' height='40' alt='img' className='rounded-sm'/>
    <Link href='/api/auth/signout' passHref> 
        <a onClick={e => {
            e.preventDefault()
            signOut()
        }}>
            <h4 className='text-white m-2'>Logout</h4>

        </a>
    </Link>
    </div>
     :
    <Link href='/api/auth/signin' passHref>
        <a onClick={e => {e.preventDefault()
        signIn('google')
        }}>
        <h4 className='text-white'>Login</h4>
        </a>

    </Link>

    }
</div>
    
</header>    
   

  )
}

export default Navbar