import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import { Button } from "@material-tailwind/react";
import ErrorMessage from "../Error";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  filteredGender,
  filteredPrice,
  filteredColor,
  filteredSize,
  filteredProducts,
} from "./../../assets/redux/features/productslice";

const FilteredProducts = () => {
  const products = useSelector((state) => state.products.filteredProducts);
  const error = useSelector((state) => state.products.error);
  const { type } = useParams();
  const dispatch = useDispatch();

  const genderButtons = ["Male", "Female"];
  const colors = ["red", "black", "brown", "yellow", "orange", "purple", "green"];
  const sizes = ["M", "L", "S", "XL"];

  const handleClearFilter = () => {
    dispatch(filteredProducts(type)); // Reset to default filtered products by type
  };

  return (
    <div className="pt-16 px-8 overflow-x-hidden">
      {/* Section Title */}
      <div className="pl-8">
        <h1 className="font-bold text-4xl pb-3 text-gray-400">{type}</h1>
      </div>

      {/* Filters */}
      <div className="lg:flex justify-between items-center py-8">
        <div className="flex items-center gap-4">
          {/* Gender Buttons */}
          {genderButtons.map((item, index) => (
            <Button
              key={index}
              color="gray"
              size="lg"
              ripple={true}
              className="px-3 rounded-lg py-1 bg-gray-600"
              onClick={() => dispatch(filteredGender(item))}
            >
              {item}
            </Button>
          ))}

          {/* High Price Button */}
          <Button
            color="gray"
            size="lg"
            ripple={true}
            className="px-3 rounded-lg py-1 bg-gray-600"
            onClick={() => dispatch(filteredPrice())}
          >
            High Price
          </Button>

          {/* Color Filter */}
          <Menu>
            <MenuHandler>
              <Button color="gray" size="lg" ripple={true} className="px-3 rounded-lg py-1 bg-gray-600">
                Select a Color
              </Button>
            </MenuHandler>
            <MenuList>
              {colors.map((color, index) => (
                <MenuItem
                  key={index}
                  style={{ color: color }}
                  onClick={() => dispatch(filteredColor(color))}
                >
                  {color}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>

          {/* Size Filter */}
          <Menu>
            <MenuHandler>
              <Button color="gray" size="lg" ripple={true} className="px-3 rounded-lg py-1 bg-gray-600"
                disabled={products.type === 'Bags'} >
                Select a Size
              </Button>
            </MenuHandler>
            <MenuList>
              {sizes.map((size, index) => (
                <MenuItem key={index} onClick={() => dispatch(filteredSize(size))}>
                  {size}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </div>

        {/* Clear Filters Button */}
        <Button
          color="gray"
          size="lg"
          ripple={true}
          className="px-3 rounded-lg py-1 bg-gray-500"
          onClick={handleClearFilter}
        >
          Clear Filter
        </Button>
      </div>

      {/* Product Grid */}
      {error ? (
        <ErrorMessage message="Something went wrong. Please try again later." />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product.id} className="flex justify-center">
                <ProductCard
                  id={product.id}
                  name={product.name}
                  text={product.text}
                  img={product.img}
                  price={product.price}
                  color={product.color}
                />
              </div>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">
              Sorry, no products match your search... Try adjusting the filters or clearing them.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default FilteredProducts;
