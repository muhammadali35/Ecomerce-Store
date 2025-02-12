import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
  } from "@material-tailwind/react";
  import { singleProduct } from "../../assets/redux/features/productslice";
  import { useDispatch } from "react-redux";
  import { Link, useParams } from "react-router-dom";
  
  const ProductCard = ({ id, img, name, text, color, price }) => {
    const dispatch=useDispatch();
    const {type}=useParams()
    return (
      <Link to={`/filteredProducts/${type}/${id}`}>
      <Card className="w-full max-w-xs mx-auto overflow-hidden" onClick={()=>dispatch(singleProduct(id))}> 
        <CardHeader floated={false} className="h-64">
          <img
            src={img}
            alt="product"
            className="w-full h-full object-cover"
          />
        </CardHeader>
        <CardBody className="text-center space-y-2">
          <Typography variant="h4" color="blue-gray" className="font-bold">
            {name}
          </Typography>
          <Typography color="blue-gray" className="text-sm">
            {text}
          </Typography>
        </CardBody>
        <CardFooter className="flex justify-between items-center px-4">
          <Typography color="blue-gray" className="font-medium">
            {price}
          </Typography>
          <div className="flex gap-2">
            {color.map((clr, idx) => (
              <div
                key={idx}
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: clr }}
              ></div>
            ))}
          </div>
        </CardFooter>
      </Card>
      </Link>
    );
  };
  
  export default ProductCard;
  