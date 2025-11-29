import { NextResponse } from "next/server";
import { ProductService } from "@/services/product.service";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const category = searchParams.get("category") || undefined;
  const minPrice = searchParams.get("minPrice")
    ? Number(searchParams.get("minPrice"))
    : undefined;
  const maxPrice = searchParams.get("maxPrice")
    ? Number(searchParams.get("maxPrice"))
    : undefined;

  const products = await ProductService.getAll({
    category,
    minPrice,
    maxPrice,
  });

  return NextResponse.json(products);
}

export async function POST(req: Request) {
  const body = await req.json();

  if (!body.name || !body.category || !body.price) {
    return NextResponse.json(
      { message: "name, category and price are required" },
      { status: 400 }
    );
  }

  const product = await ProductService.create(body);

  return NextResponse.json(product, { status: 201 });
}
