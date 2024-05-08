"use client";

import { useRouter } from "next/navigation";

function OrderProduct() {
  const router = useRouter()
    const placeOrder =  () => {
        console.log("placing your order") ;
        router.push("/")
    };
  return (
   <>
        <div>OrderProduct</div>
        <button onClick={placeOrder}>Place Order</button>
   </>
  )
}

export default OrderProduct