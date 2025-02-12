import { Button } from 'flowbite-react';
import { filteredProducts } from '../../assets/redux/features/productslice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const NavigateButtons = () => {
  const buttons = [
    'T-Shirts',
    'Hoodies',
    'Dresses',
    'Shoes',
    'Jeans',
    'Jackets',
    'Bags',
  ];

  const dispatch = useDispatch();

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mx-auto">
        {buttons.map((button, index) => (
          <div key={index}>
            <Link to={`/filteredProducts/${button}`}>
              <Button
                className="px-2 py-1 border-gray-400 text-black rounded-xl hover:bg-green-500"
                onClick={() => dispatch(filteredProducts(button))}
              >
                {button}
              </Button>
            </Link>
          </div>
        ))}
      </div>
      <div className="bg-green-300 w-[55%] mx-auto p-3 rounded-lg m-4">
        <h3 className="text-orange-700 text-center font-bold tracking-normal leading-none">
          Show 55% OFF
        </h3>
      </div>
      <div className="flex items-center justify-center py-4">
        <img
          className="h-[600px] w-[70%] shadow-lg shadow-gray-500 rounded-md"
          src="https://t3.ftcdn.net/jpg/03/34/79/68/360_F_334796865_VVTjg49nbLgQPG6rgKDjVqSb5XUhBVsW.jpg"
          alt="Discount Banner"
        />
      </div>
    </div>
  );
};

export default NavigateButtons;
