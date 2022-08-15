import Image from "next/image";
import Link from "next/link";
import React from "react";

interface props {
  image: string;
  video: string;
  link: string;
}

const SingleBrand = ({ image, video, link }: props) => {

  const openBrandHandler = () => {
    window.open(link);
  };
  return (
    <a onClick={openBrandHandler} className="brand group">
      <Image src={image} layout="fill" objectFit="cover" alt="brand" />
      <video
        autoPlay
        loop
        playsInline
        className="hidden group-hover:inline rounded-lg object-cover"
      >
        <source src={video} type="video/mp4" />
      </video>
    </a>
  );
};

export default SingleBrand;
