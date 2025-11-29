import db from "@/lib/db";

export class ProductService {
  static async getAll(filters: {
    category?: string;
    minPrice?: number;
    maxPrice?: number;
  }) {
    const products = await db.product.findMany({
      where: {
        category: filters.category,
        price: {
          gte: filters.minPrice,
          lte: filters.maxPrice,
        },
      },
    });

    return products.map(p => ({
      ...p,
      inStock: p.stockQuantity > 0,
    }));
  }

  static async getById(id: string) {
    const product = await db.product.findUnique({
      where: { id },
    });

    if (!product) return null;

    return {
      ...product,
      inStock: product.stockQuantity > 0,
    };
  }

  static async create(data: {
    name: string;
    category: string;
    price: number;
    stockQuantity?: number;
  }) {
    return db.product.create({
      data: {
        name: data.name,
        category: data.category,
        price: data.price,
        stockQuantity: data.stockQuantity ?? 0,
      },
    });
  }

  static async update(id: string, data: any) {
    return db.product.update({
      where: { id },
      data,
    });
  }

  static async delete(id: string) {
    return db.product.delete({
      where: { id },
    });
  }
}
