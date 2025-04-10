import { Button } from "@/components/ui/button";
import { RequestInfo } from "@redwoodjs/sdk/worker";

export function Home({ ctx }: RequestInfo) {
  return (
    <div>

      <Button>Click me</Button>
    </div>
  );
}
