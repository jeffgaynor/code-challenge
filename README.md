# Yummy Recipes!

This site is a recipe site powered by [Next.js](https://nextjs.org/). Recipes content is provided by markdown files.

## Prerequisites

Node v14+

## Development

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

#### Cloning

This repository leverages [Git submodules](https://www.vogella.com/tutorials/GitSubmodules/article.html#:~:text=2.3.-,Pulling%20with%20submodules,in%20the%20git%20pull%20command%20) to supply markdown and images for recipes. To ensure submodules are retreived when cloning, checkout with:

```bash
git clone --recurse-submodules https://github.com/jeffgaynor/code-challenge.git
```

To pull in the latest changes, use:

```
git pull --recurse-submodules
```

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
published: Monday, 28 Mar 2022 00:00:0 GMT
time: 45
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
