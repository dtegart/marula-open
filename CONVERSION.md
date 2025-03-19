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

Both projects use Prisma, so as a first step, we can copy the models in our `schema.prisma` file.
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

The code in `api/src/services` can be reused when we create our pages and server functions.

## Frontend Changes

## Admin and Authentication

## Stripe Integration

## Enhancements
