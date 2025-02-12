import React from 'react';
import { storeData } from '../ProductData/ProductData';
import ProductSecCard from './ProductSecCard';

const ProductSection = () => {
  return (
    <>
      <div className="w-[80%] mx-auto">
        <div className="bg-black rounded-xl mb-6 p-4">
          <h2 className="text-red-500 text-center text-lg">SUMMER T_SHIRTS SALE 30%</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 py-9">
          {storeData.slice(0, 6).map((item, index) => (
            <div key={index}>
              <ProductSecCard
                id={item.id}
                name={item.name}
                img={item.img}
                text={item.text}
                price={item.price}
                size={item.size}
                color={item.color}
                totalPrice={item.totalPrice}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductSection;
