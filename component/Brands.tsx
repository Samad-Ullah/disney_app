import SingleBrand from './SingleBrand'

const Brands = () => {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center mt-10 gap-6 px-8 max-w-[1400px] mx-auto">

   <SingleBrand image={"/images/disnep.png"} video={"/videos/disney.mp4"} link={'/'}/>
   <SingleBrand image={"/images/pixar.png"} video={"/videos/pixar.mp4"} link={'https://www.pixar.com/'}/>
   <SingleBrand image={"/images/marvel.png"} video={"/videos/marvel.mp4"} link={'https://www.marvel.com/'}/>
   <SingleBrand image={"/images/starwars.png"} video={"/videos/star-wars.mp4"} link={'https://www.starwars.com/'}/>
   <SingleBrand image={"/images/national-geographic.png"} video={"/videos/national-geographic.mp4"} link={'https://www.nationalgeographic.com/'}/> 
  </section>
  )
}

export default Brands