# Marula Application Conversion Plan

## Introduction

Marula was initially a eCommerce WIP developed on Redwood GraphQL. With the launch of RedwoodSDK, I decided to see what it would take to convert the code over.

## Plan

The idea is to find the minimal work needed to convert a project. RedwoodSDK uses React Server Components, so most of the work will be to convert the API calls to server functions or direct db functions from Page components.
In Redwood GraphQL, the flow is generally:

Page --> Cell Component --> GraphQL query -> Success Component

The plan is to convert this to:

Page --> Database Call --> Success Component

## First Steps

Set up a project using the Prisma Starter
https://github.com/redwoodjs/sdk/tree/main/starters/prisma

## API Side Changes

### Prisma

Both projects use Prisma, so as a first step, copy the models in the `schema.prisma` file.
**_Note:_** The `generator client` and `datasource db` are different, so just copy the models. Then run the migration:

```
npx prisma generate
pnpm migrate:new "schema copied"
pnpm migrate:dev
```

There is no need for any of the code in:

`api/src/directives`
`api/src/functions`
`api/src/graphql`

The code in `api/src/services` can be reused when creating the pages and server functions.

## Frontend Changes

The original project uses Tailwind and ShadCn, so they need to be setup:

`pnpm add tailwindcss @tailwindcss/vite`

create a `src/app/styles.css` file and add:

`@import "tailwindcss";`

Then update the `src/app/Document.tsx` file to import the styles

```
import stylesUrl from "./styles.css?url";

export const Document: React.FC<{ children: React.ReactNode }> = ({
  children
}) => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href={stylesUrl} />
      <title>Marula Open</title>
      <script type="module" src="/src/client.tsx"></script>
    </head>
    <body>
      <div id="root">

        {children}
      </div>
    </body>
  </html>
);
```

run: `pnpm add -D @types/node`

Update `vite.config.mts`

import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { redwood } from "redwoodsdk/vite";
import { defineConfig } from "vite";

```
export default defineConfig({
  environments: {
    // workaround(justinvdm, 26 Feb 2025):
    // * tailwindcss currently uses the non-deprecated internal createResolver() vite API method:
    // https://github.com/tailwindlabs/tailwindcss/blob/main/packages/%40tailwindcss-vite/src/index.ts#L22
    // * The code and its docstring indicate that it relies on an `ssr` being present:
    // https://github.com/vitejs/vite/blob/c0e3dba3108e479ab839205cfb046db327bdaf43/packages/vite/src/node/config.ts#L1498
    // * This isn't the case for us, since we only have a `worker` environment instead of `ssr`
    // * To prevent builds getting blocked on this, we stub out the ssr environment here
    ssr: {},
  },
  plugins: [redwood(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

run:
`pnpm dlx shadcn@latest init`

to setup shadcn.

In `components.json` set `rsc: true`
run:
`pnpm dlx shadcn@latest add`

then choose the components that are used in the Redwood GraphQL project

## Admin and Authentication

## Stripe Integration

## Enhancements
