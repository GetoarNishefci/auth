import { NextResponse } from "next/server";
import { ProductService } from "@/services/product.service";

export async function GET(
  _: Request,
  { params }: { params: { id: string } }
) {
  const product = await ProductService.getById(params.id);

  if (!product) {
    return NextResponse.json(
      { message: "Product not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(product);
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const body = await req.json();

  const updated = await ProductService.update(params.id, body);

  return NextResponse.json(updated);
}

export async function DELETE(
  _: Request,
  { params }: { params: { id: string } }
) {
  await ProductService.delete(params.id);

  return NextResponse.json({ message: "Deleted successfully" });
}
