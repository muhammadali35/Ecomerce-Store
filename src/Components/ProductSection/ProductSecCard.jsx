
import React from 'react';
import { useDispatch } from 'react-redux';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
    Button
  } from "@material-tailwind/react";
import { addToCart } from '../../assets/redux/features/cartSlice';
const ProductSecCard = ({id,img, name, text, price, size, color, totalPrice, amount}) => {

    const dispatch =useDispatch();
    const defaulSize=size[0]
    const defaulColor=color[0]
  return (
    <>
      <div>
      <Card className="w-80">
      <CardHeader floated={false} className="h-80">
        <img src={img} alt="profile-picture" />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
        {name}
        </Typography>
        <Typography  color="blue-gray" className="font-medium text-justify px-2" textGradient>
           {text}
        </Typography>
            <div className='flex justify-center items-center gap-3 pt-4'>
             <Typography  color="blue-gray" className="font-medium" textGradient>
                Size Left:<span className='ml-2'>{defaulSize}</span>
             </Typography>
             <Typography  color="blue-gray" className="font-medium" textGradient>
                Color Left: <span className=' ml-2 px-3 rounded-full' style={{backgroundColor:defaulColor}}></span>
             </Typography>
            </div>
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-2">
      <Tooltip content="Add To Cart" >

      <Button className='px-2 py-2 mb-2'
      onClick={()=>dispatch(addToCart({
        id:id,
        img:img,
        name:name,
        price:price,
        totalPrice,
        color:defaulColor,
        amount:1,
        defaulSize
      }))}>Add To Cart</Button>
    </Tooltip>
      </CardFooter>
    </Card>
      </div>
    </>
  );
}

export default ProductSecCard;
