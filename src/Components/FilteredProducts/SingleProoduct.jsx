import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../../assets/redux/features/cartSlice";

const SingleProduct = () => {
  // Fetch product from Redux
  const productData = useSelector((state) => state.products.singlProduct);
  const { id } = useParams();
  const dispatch = useDispatch();

  // Log data for debugging
  console.log("Product Data:", productData);

  // Handle both object and array cases
  const product = Array.isArray(productData)
    ? productData.find((item) => item.id === id)
    : productData?.id === id
    ? productData
    : null;

  // Fallback values for size and color
  const productSize = product?.size?.[0] || "";
  const productColor = product?.color?.[0] || "";

  const [size, setSize] = useState(productSize);
  const [color, setColor] = useState(productColor);

  if (!product) {
    return (
      <div className="text-center text-xl font-semibold">
        Product not found
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-8 bg-white shadow-xl rounded-lg mt-8">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Product Image */}
        <div className="w-full md:w-1/2 ">
          <img
            src={product.img}
            alt={product.name}
            className="w-full h-96 object-fill rounded-lg shadow-lg"
          />
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2 flex flex-col justify-between">
          <h2 className="text-4xl font-bold text-gray-900">{product.name}</h2>
          <p className="text-lg text-gray-600 mt-4">{product.text}</p>

          {/* Price */}
          <div className="flex justify-between items-center mt-6">
            <span className="text-2xl font-semibold text-gray-800">
              ${product.price}
            </span>
          </div>

          {/* Size Dropdown */}
          <div className="mt-6 ">
            <span className="text-lg text-gray-700 mr-5">Select Size:</span>
            <select
              className="mt-2 p-1 border rounded-lg bg-white text-gray-800 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={size}
              onChange={(e) => setSize(e.target.value)}
            >
              <option value="" disabled>
                Choose a size
              </option>
              {product.size?.map((sizeOption, index) => (
                <option key={index} value={sizeOption}>
                  {sizeOption}
                </option>
              ))}
            </select>
          </div>

          {/* Color Options */}
          <div className="mt-6 ">
            <span className="text-lg text-gray-700 mr-5">Select Color:</span>
            <select
              className="mt-2 p-1 border rounded-lg bg-white text-gray-800 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            >
              <option value="" disabled>
                Choose a color
              </option>
              {product.color?.map((colorOption, index) => (
                <option key={index} value={colorOption}>
                  {colorOption}
                </option>
              ))}
            </select>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex gap-6">
            <button
              onClick={() =>
                dispatch(
                  addToCart({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    size,
                    color,
                    img: product.img,
                    text: product.text,
                    amount: 1,
                    totalPrice: product.price,
                  })
                )
              }
              className="w-full md:w-auto bg-blue-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
