import { Metadata } from "next"



type props = { params: { productId: string } }

export const generateMetadata = ({ params }: props): Metadata => {
  return {

    title: `Product ${params.productId}`
  } 
}


export default function ProductDetails({ params }: props) {
  return (
    <div>ProductDetails {params.productId}</div>
  )
}
