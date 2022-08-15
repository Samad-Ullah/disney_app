import Image from "next/image";
import { useRouter } from "next/router";
import { PlusIcon, XIcon , ThumbUpIcon , ThumbDownIcon, PlayIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";

const MovieThumbnail = ({ result }: any) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  const router = useRouter();
  const [like , setLike] = useState<boolean>(false)
  const [disLike , setDisLike] = useState<boolean>(false)
  
  const LikeHnadler = () => {
    setLike(true)
    setDisLike(false)
  }

  const DisLikeHnadler = () => {
    setDisLike(true)
    setLike(false)
  }

  return (
    <div
      className="relative z-50  min-w-[250px] min-h-[170px] md:min-w-[330px] md:min-h-[210px] rounded-lg overflow-hidden shadow-xl cursor-pointer border-[3px] border-[#f9f9f9] border-opacity-10  hover:border-opacity-80 hover:shadow-2xl transform hover:scale-105 transition duration-300"
    >
      <Image
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
        width={330}
        height={210}
        objectFit="cover"
        className="rounded-lg hover:opacity-30"
        alt="tumbnailimage"
      />
      <div className="absolute inset-y-16 md:inset-y-auto md:bottom-10 inset-x-4 text-lg space-y-6 z-50 ">
        {result?.title || result?.original_name}
      </div>
      <div className="absolute flex-col inset-y-32 md:inset-y-auto md:bottom-4 inset-x-4 text-lg space-y-6 z-50 " onClick={() => router.push(`/movie/${result.id}`)} ><PlayIcon className="h-6 border-2 rounded-full" /></div>
      <div className="absolute flex inset-y-32 md:inset-y-auto md:bottom-4 inset-x-4 text-lg space-y-6 z-50 ml-10" ><ThumbUpIcon className={like ? 'h-6 text-sky-600':'h-6'} onClick={LikeHnadler}/></div>
      <div className="absolute flex inset-y-32 md:inset-y-auto md:bottom-4 inset-x-4 text-lg space-y-6 z-50 ml-16" ><ThumbDownIcon className={disLike ? 'h-6 text-red-600':'h-6'} onClick={DisLikeHnadler}/></div>
      
    </div>
  );
};

export default MovieThumbnail;
