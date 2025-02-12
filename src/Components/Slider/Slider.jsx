import { Button } from 'flowbite-react';
import { dotSlide, nextSlider, prevSlide } from '../../assets/redux/features/sliderSlice';
import { useSelector, useDispatch } from 'react-redux';
import { SlideData } from './SlideData';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Slider = () => {
  const slideIndex = useSelector((state) => state.slider.value);
  const dispatch = useDispatch();

  return (
    <div className="relative w-full h-[90vh] overflow-hidden bg-gray-900">
      {/* Slides */}
      <div className="absolute inset-0">
        {SlideData.map((item) => (
          <div
            key={item.id}
            className={`absolute top-0 left-0 w-full h-full flex items-center justify-center transition-opacity duration-700 ease-in-out ${
              item.id === slideIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {item.id === slideIndex && (
              <>
                <img
                  src={item.img}
                  alt=""
                  className="object-cover w-full h-[80vh] max-h-[600px]"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center">
                  <p className="text-white font-bold text-center text-4xl md:text-5xl px-4">
                    {item.content}
                  </p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-10 flex gap-3 z-30">
        {SlideData.map((item, index) => (
          <div
            key={index}
            className={`w-4 h-4 rounded-full cursor-pointer ${
              index === slideIndex ? 'bg-green-600' : 'bg-white'
            }`}
            onClick={() => dispatch(dotSlide(index))}
          ></div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <Button
        onClick={() =>
          dispatch(prevSlide(slideIndex === 0 ? SlideData.length - 1 : slideIndex - 1))
        }
        className="absolute top-[50%] left-4 transform -translate-y-1/2 z-30 bg-gray-200 p-2 rounded-full shadow-lg hover:bg-green-800"
      >
        <IoIosArrowBack size={24} />
      </Button>
      <Button
        onClick={() =>
          dispatch(nextSlider((slideIndex + 1) % SlideData.length))
        }
        className="absolute top-[50%] right-4 transform -translate-y-1/2 z-30 bg-gray-200 p-2 rounded-full shadow-lg hover:bg-green-700"
      >
        <IoIosArrowForward size={24} />
      </Button>
    </div>
  );
};

export default Slider;
