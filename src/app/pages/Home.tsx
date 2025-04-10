'use client'
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { RequestInfo } from "@redwoodjs/sdk/worker";
import { ShoppingCart } from "lucide-react";

// Mock data for categories
const categories = [
  { id: 1, name: "Electronics", icon: "📱", slug: "electronics" },
  { id: 2, name: "Clothing", icon: "👕", slug: "clothing" },
  { id: 3, name: "Home & Kitchen", icon: "🏠", slug: "home-kitchen" },
  { id: 4, name: "Books", icon: "📚", slug: "books" },
  { id: 5, name: "Beauty", icon: "💄", slug: "beauty" },
  { id: 6, name: "Sports", icon: "⚽", slug: "sports" },
];

// Mock data for featured products
const featuredProducts = [
  { id: 1, name: "Wireless Headphones", price: 129.99, image: "https://placehold.co/300x200", rating: 4.5, discount: true },
  { id: 2, name: "Smart Watch", price: 199.99, image: "https://placehold.co/300x200", rating: 4.8 },
  { id: 3, name: "Laptop Backpack", price: 49.99, image: "https://placehold.co/300x200", rating: 4.2, discount: true },
  { id: 4, name: "Bluetooth Speaker", price: 79.99, image: "https://placehold.co/300x200", rating: 4.7 },
];

// Mock data for carousel banners
const banners = [
  { id: 1, title: "Summer Sale", description: "Up to 50% off on selected items", image: "https://placehold.co/1200x400" },
  { id: 2, title: "New Arrivals", description: "Check out our latest collection", image: "https://placehold.co/1200x400" },
  { id: 3, title: "Free Shipping", description: "On orders over $50", image: "https://placehold.co/1200x400" },
];

export function Home({ ctx }: RequestInfo) {
  return (
    <div className="container mx-auto px-4 py-8 space-y-10">


      {/* Categories Section */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold">Shop by Category</h2>
          <Button variant="link">View All Categories</Button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Card key={category.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="font-medium">{category.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      {/* Featured Products Section */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold">Featured Products</h2>
          <Button variant="link">View All Products</Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                {product.discount && (
                  <Badge className="absolute top-2 right-2 bg-red-500">Sale</Badge>
                )}
              </div>
              <CardHeader>
                <CardTitle>{product.name}</CardTitle>
                <CardDescription>

                  <span className="ml-1 text-sm text-gray-600">({product.rating})</span>
                </CardDescription>
              </CardHeader>
              <CardFooter className="flex items-center justify-between">
                <div className="text-lg font-bold">${product.price}</div>
                <Button size="sm" variant="outline" className="flex items-center gap-2">
                  <ShoppingCart className="h-4 w-4" />
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>

  );
}
