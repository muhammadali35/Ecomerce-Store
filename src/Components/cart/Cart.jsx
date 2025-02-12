import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { removeCart } from "../../assets/redux/features/cartSlice";
import { useDispatch } from "react-redux";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Tooltip,
} from "@material-tailwind/react";

function Cart({ open, setOpen }) {
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch=useDispatch()

  return (
    <>
      <div className="absolute flex items-center justify-center w-full">
        {cart.length > 0 ? (
          <Fragment>
            <Dialog
              open={open}
              handler={() => setOpen(false)}
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0.9, y: -100 },
              }}
              className="max-w-3xl mx-auto"
            >
              <DialogHeader className="text-center text-xl font-bold">
                Shopping Cart
              </DialogHeader>
              <DialogBody className="flex flex-col gap-4 max-h-[70vh] overflow-y-auto">
                {cart.map((item, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-2 gap-4 p-4 border-b last:border-b-0"
                  >
                    <div className="h-64 rounded-lg">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="h-full w-full object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex flex-col justify-start space-y-2">
                      <h4 className="text-lg font-bold">{item.name}</h4>
                      <p className="text-sm text-gray-600">{item.text}</p>
                      <p className="text-sm">
                        Selected Size:
                        <span className="ml-2 font-medium">{item.size}</span>
                      </p>
                      <p className="text-sm">
                        Selected Color:
                        <span
                          className="ml-2 inline-block w-4 h-4 rounded-full"
                          style={{ backgroundColor: item.color }}
                        ></span>
                      </p>
                      <p className="text-sm">
                        Product Amount:
                        <span className="ml-2 font-medium">{item.amount}</span>
                      </p>
                      <p className="text-sm">
                        Single Product Price:
                        <span className="ml-2 font-medium">${item.price}</span>
                      </p>
                      <p className="text-sm">
                        Total Product Price:
                        <span className="ml-2 font-medium">
                          ${item.totalPrice}
                        </span>
                      </p>
                      <Tooltip content="Remove from the cart" placement="bottom">
                      <Button
  onClick={() =>
    dispatch(removeCart({
      id: item.id,
      size: item.size,
      color: item.color,
      price: item.price,
    }))
  }
  className="mt-2"
  size="sm"
  color="red"
  ripple={true}
>
  Remove
</Button>

                      </Tooltip>
                    </div>
                  </div>
                ))}
              </DialogBody>
              <DialogFooter className="flex justify-between items-center border-t pt-4">
                <p className="text-lg font-bold">
                  Total Amount: ${totalPrice}
                </p>
                <Button className="text-red-600" size="sm" color="blue" onClick={() => setOpen(false)}>
                  Close
                </Button>
              </DialogFooter>
            </Dialog>
          </Fragment>
        ) : (
          <Fragment>
            <Dialog
              open={open}
              handler={() => setOpen(false)}
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0.9, y: -100 },
              }}
              className="max-w-sm mx-auto"
            >
              <DialogHeader className="text-center text-xl font-bold">
                Shopping Cart
              </DialogHeader>
              <DialogBody className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold text-gray-800">
                  Your cart is empty
                </h1>
                <p className="text-gray-600 mt-2">Add some products!</p>
              </DialogBody>
              <DialogFooter className="flex justify-center border-t pt-4">
                <Button className="text-red-600" size="sm" color="blue" onClick={() => setOpen(false)}>
                  Close
                </Button>
              </DialogFooter>
            </Dialog>
          </Fragment>
        )}
      </div>
    </>
  );
}

export default Cart;
