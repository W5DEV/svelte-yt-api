# YT API Search

This project was built using Svelte and Tailwind CSS for quick prototyping and proof of concept

## Boilerplate Usage

All code committed in `initial commit` and `initial setup, layout` was created through installing SvelteKit and Tailwind.

## App Structure

If you are new to Svelte, this is a good breakdown.

The starting point of the app is `src/routes/+layout.svelte`, which defines the global layout of the application. This is especially useful if you are using a multi-page setup, so you can add in your header and footer. This can also be used to import any global styles which will be used across the app.

The main page is located in the root of the routes directory: `src/routes/+page.svelte`. This is going to be your "home page" or whatever pops up when you visit the URL of your app or dev environment.

Since I am using a single-page approach, I have broken down the app into two different "views" which are conditionally rendered. They can be viewed here: `src/lib/views`

Each view makes use of components which are stored here: `src/lib/components`

Assets, Types and API logic can all be found in their own directories within the `src/lib` directory.

## Setup and Installation

To run this code locally, you will need an API Key for the YouTube Data API V3, which can be obtained by following the instructions here: https://developers.google.com/youtube/v3/getting-started

Once you obtain an API Key, copy the contents of the `example.env` to a new `.env` file and paste your API key in place of the placeholder.

Once you do this, you should be able to install dependencies and run the code:

```
npm install

npm run dev
```

Happy coding!
