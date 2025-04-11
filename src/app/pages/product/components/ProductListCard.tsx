import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface ProductListCardProps {
  product: {
    id: string
    name: string
    image: string
    price: number
  }
}

const ProductListCard = ({ product }: ProductListCardProps) => {
  console.log(product.image)
  return (

    <Card>
      <CardContent className="m-0 p-0">
        <img
          src={product.image}
          alt={product.name}
          className="h-48 w-full rounded-t-md object-cover hover:opacity-75"
        />
      </CardContent>
      <CardHeader>
        <CardTitle className="text-lg font-normal text-muted-foreground">
          {product.name}
        </CardTitle>
        <CardDescription className="">
          <div className="text-xl font-bold text-primary">
            ${product.price}
          </div>
        </CardDescription>
      </CardHeader>
    </Card>

  )
}

export default ProductListCard