import { NextResponse } from "next/server";


type Product = {
    id: string,
    name:string,
    price:number
}


const products: Product[] = [
  { id: "1", name: "Iced Latte", price: 2.5 },
  { id: "2", name: "Cappuccino", price: 3.0 },
  { id: "3", name: "Americano", price: 2.0 },
];

export async function GET() {
    return NextResponse.json({
        success:true,
        data:products
    })
    
}