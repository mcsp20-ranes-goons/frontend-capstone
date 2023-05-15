import { useEffect, useState } from "react";
import {BsChevronCompactLeft, BsChevronCompactRight} from "react-icons/bs";
import {RxDotFilled} from 'react-icons/rx';


function MediaCarousel() {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState([0]);


  useEffect(() => {
    fetch('http://localhost:3000/api/media/1')
      .then(response => response.json())
      .then(data => setData(data));
  }, [])
  // console.log(slides)

  
  const slides = data.map((item, index) => {
    return (
     <div key={index} className="slide">
       <video src={item.url} autoPlay muted loop />
    </div>
   );
  });

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
              setCurrentIndex(slideIndex)
          }
          
return (
      <div>
        <div className='flex w-full bg-black relative group'>

          <div className="absolute group flex justify-between z-1 w-full h-full">
            <div className="h-full -translate-x-full text-neutral-900 group-hover:text-white group-hover:translate-x-0 flex items-center rounded-full p-2 transition-all ease-linear duration-300 hover:bg-black/20 text-white cursor-pointer">
              <BsChevronCompactLeft onClick={nextSlide} className="h-8 w-8"  />
            </div>
            <div className="h-full translate-x-full text-neutral-900 group-hover:text-white group-hover:translate-x-0 flex items-center rounded-full p-2 transition-all ease-linear duration-300 hover:bg-black/20 text-white cursor-pointer">
              <BsChevronCompactRight onClick={prevSlide} className="h-8 w-8" />
            </div>
          </div>

            <div className="w-full rounded-2xl bg-black">
              <video src='https://drive.google.com/uc?export=view&id=1wSfqdrCyeTC7pY8IasAG3wVJ5JLVWN1t' controls autoPlay>Video not supported</video>
              {/* {slides[currentIndex]} */}
            </div>
        </div>

          {/*left arrow*/}
          <div className="absolute top-[50% -translate-x-0 tranlate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight onClick={prevSlide} size={30}/>
          </div>

          {/*right arrow*/}
          <div className="absolute top-[50% -translate-x-0 tranlate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactLeft onClick={nextSlide} size={30}/>
          </div>

          <div className="flex top-4 justify-center py-2">
            {slides.map((slide, slideIndex) => (
              <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className="text-2xl cursor-pointer">
                <RxDotFilled />
              </div>
            ))}
            
          </div>
        
      </div>
    );
  }
  
  export default MediaCarousel;