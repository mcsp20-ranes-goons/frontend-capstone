import { useEffect, useState } from "react";
import {BsChevronCompactLeft, BsChevronCompactRight} from "react-icons/bs";
import {RxDotFilled} from 'react-icons/rx';


function MediaCarousel() {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState([0]);
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/media/1')
      .then(response => response.json())
      .then(data => {
        setData(data);
        const slides = data.map((item) => {
          return {
            video: `url(${item.url})`
          }
        });  
        setSlides(slides);
      });
  }, [])
  console.log(slides)


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
          <div className='max-w-[866px] h-[486px] w-full m-auto py-16 px-4 relative group'>
          <div className="w-full h-full rounded-2xl bg-black">
            <video 
              src="{slides[currentIndex].video}"
              autoPlay
              muted
              loop
              className="w-full h-full object-cover"
            />
          </div>
          {/*left arrow*/}
          <div className="hidden group-hover:block absolute top-[50% -translate-x-0 tranlate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={30}/>
          </div>
          {/*right arrow*/}
          <div className="hidden group-hover:block absolute top-[50% -translate-x-0 tranlate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide} size={30}/>
          </div>
          <div className="flex top-4 justify-center py-2">
            {slides.map((slide, slideIndex) => (
              <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className="text-2xl cursor-pointer">
                <RxDotFilled />
              </div>
            ))}
          </div>
          </div>
      </div>
    );
  }
  
  export default MediaCarousel;