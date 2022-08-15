import type { NextPage } from 'next'
import Head from 'next/head'
import { getSession, signIn , signOut , useSession} from 'next-auth/react'
import Image from 'next/image'

import Navbar from '../component/Navbar'
import Hero from '../component/Hero'
import Slider from '../component/Slider'
import Brands from '../component/Brands'
import CollectionMovies from '../component/CollectionMovies'
import Shows from '../component/Shows'
import Link from 'next/link'

const Home: NextPage = ({popularMovies,
  popularShows,
  top_ratedMovies,
  top_ratedShows,}:any) => {
  const { data: session } = useSession()
  return (
    <div className='bg-[#040714] text-[#f9f9f9]'>
    <Head>
      <title>
        Disney+ | The streaming home of Disney, Pixar, Marvel, Star Wars, Nat
        Geo and Star
      </title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar />
    {!session ? (
      <Hero />
    ) : (
      <main className="relative min-h-screen after:bg-home after:bg-center after:bg-cover after:bg-no-repeat after:bg-fixed after:absolute after:inset-0 after:z-[-1]">
        <Slider />
        <Brands />
        <div id='movies'>
        <CollectionMovies results={popularMovies} title="Popular Movies" />
        </div>
        <div id='series'>
        <Shows results={popularShows} title="Popular Shows" />
        </div>
        

        <CollectionMovies
          results={top_ratedMovies}
          title="Top Rated Movies"
        />
        <Shows results={top_ratedShows} title="Top Rated Shows" />
      </main>
    )}
  </div>
  )
}

export default Home


export async function getServerSideProps(context:any) {
  const session = await getSession(context);

  const [
    popularMoviesRes,
    popularShowsRes,
    top_ratedMoviesRes,
    top_ratedShowsRes,
  ] = await Promise.all([
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ),
    fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ),
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ),
    fetch(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ),
  ]);
  const [popularMovies, popularShows, top_ratedMovies, top_ratedShows] =
    await Promise.all([
      popularMoviesRes.json(),
      popularShowsRes.json(),
      top_ratedMoviesRes.json(),
      top_ratedShowsRes.json(),
    ]);

  return {
    props: {
      session,
      popularMovies: popularMovies.results,
      popularShows: popularShows.results,
      top_ratedMovies: top_ratedMovies.results,
      top_ratedShows: top_ratedShows.results,
    },
  };
}

