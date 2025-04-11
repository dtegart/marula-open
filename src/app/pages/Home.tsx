
import { RequestInfo } from "@redwoodjs/sdk/worker";

import { env } from "cloudflare:workers";
import Stripe from "stripe";
import ProductListCard from "./product/components/ProductListCard";

const stripe = new Stripe(env.STRIPE_KEY, { typescript: true })

export async function Home({ ctx }: RequestInfo) {
  const products = await stripe.products.list({ expand: ['data.default_price'] });

  if (products.data.length === 0) {
    return <div>No products found</div>
  }
  return (
    <div className="container mx-auto">

      <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {products.data.map((product) => {
          const price = (product.default_price as Stripe.Price)?.unit_amount ?? 0;
          const formattedProduct = {
            id: product.id,
            name: product.name,
            image: product.images[0] ?? '',
            price: price / 100,
          };
          return <ProductListCard key={product.id} product={formattedProduct} />;
        })}
      </div>
    </div>
  )

}
