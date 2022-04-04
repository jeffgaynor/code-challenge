# Yummy Recipes!

This site is a recipe site powered by [Next.js](https://nextjs.org/). Recipes content is provided by markdown files.

## Prerequisites

Node v14+

## Development

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

To run the development server:

```bash
npm run dev
# or
yarn dev
```

## Content

To add content, add markdown files with the extension `.md` in the `_recipes` folder in the project root.

### Meta Data

To build recipes pages and cards on the home page, added meta data to the markdown file, with the following format:

```
---
category: Appetizers
title: Buffalo Wings
image: buffalo-wings.png
time: 45
posted: Monday, 28 Mar 2022 00:00:0 GMT
---
```

## Format

Add styles to the recipe pages with by using the following format:

- Description, Ingredients, and Directions are `h2` tags, i.e (`##`).

- Ingredient subtitles are `h5` tags, .e.e `#####`.

- Ingredients should be unordered lists, such as:

```
- item
- item
- item
```

- Cooking steps are `h4` tags, .e.e `####`.

### Images

All images should currently be placed in the `public/images` folder, at a default size of 1040px width X 464px height;
