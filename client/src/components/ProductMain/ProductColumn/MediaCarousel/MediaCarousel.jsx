import { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";



function MediaCarousel() {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedSlide, setSelectedSlide] = useState(0);


  useEffect(() => {
    fetch('http://localhost:3000/api/media/1')
      .then(response => response.json())
      .then(data => setData(data));
  }, [])

  const slides = data.map((item, index) => {
    const isVideo = item.mediaType === "video"; // Assuming videos have .mp4 extension
    return (
      <div className="slide" key={item.img} >
        {isVideo ? ( 
          <video controls src={item.url} autoPlay muted loop />
        ) : (
          <img src={item.url} alt="Jedi Survivor" className="rounded" />
        )}
      </div>
    );
  });
  
  console.log(currentIndex)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length -1 : currentIndex -1;
    setCurrentIndex(newIndex)
    };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length -1;
    const newIndex = isLastSlide ? 0 : currentIndex +1;
    setCurrentIndex(newIndex) 
    };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
    }

          
return (
      <div>
        <div className='flex w-full bg-black'>

          <div className="flex justify-between w-full h-full z-1 group">
            <div className="-translate-x-full text-neutral-900 group-hover:text-white group-hover:translate-x-0 flex items-center rounded-full p-2 transition-all ease-linear duration-300 hover:bg-black/20 hover:bg-gradient-to-r cursor-pointer">
              <BsChevronCompactLeft onClick={prevSlide} className="h-8 w-8"  />
            </div>

            <div className="w-full rounded-2xl bg-black">
              {slides[currentIndex]} 
            </div>

            <div className="translate-x-full text-neutral-900 group-hover:text-white group-hover:translate-x-0 flex items-center rounded-full p-2 transition-all ease-linear duration-300 hover:bg-black/20 hover:bg-gradient-to-r cursor-pointer">
              <BsChevronCompactRight onClick={nextSlide} className="h-8 w-8" />
            </div>
            </div>
          </div>

         <div className="flex w-full justify-between items-center">

          {/*right arrow*/}
          <div className="rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={30}/>
          </div>

          <div className="flex w-full justify-center gap-2 py-4">
            {slides.map((slide, slideIndex) => {
              return (
               <div key={slide.key} onClick={() => goToSlide(slideIndex)} className="w-full cursor-pointer">
                {slide.isVideo ? (
                 <video poster={slide.img} src={slide.img} alt="Jedi Survivor" className={`w-full rounded opacity-50 hover:opacity-100 ${currentIndex === slideIndex ? "opacity-100 border" : null }`} ></video>
                ) : (
               <img src={slide.key} alt="Jedi Survivor" className={`w-full rounded opacity-50 hover:opacity-100 ${currentIndex === slideIndex ? "opacity-100 border" : null }`} />
             )}
            </div>
           );
          })}
         </div>

            {/*left arrow*/}
          <div className="rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide} size={30}/>

          </div>
        </div>
      </div>
    );
  }
  
  export default MediaCarousel;

  