# FL News

This application allows users to browse news from various countries around the world. Built with Next.js, TypeScript, Redux Toolkit, Ant Design, and REST API

## Demo

Unfortunately, the external API used in this application only allows local usage. If you want to see how this application works, I encourage you to install it locally following the instructions provided on GitHub.

## Instructions

To download and run this application on your computer, follow the steps below:

1. Clone the repository:

```sh
git clone https://github.com/filiplizon/gnNews
```

2. Navigate to the project directory:

```sh
cd gnNews
```

3. Install the dependencies:

```sh
npm install
```

4. Create a .env.local file and enter your API key:

```sh
NEXT_PUBLIC_NEWS_API_KEY=[your api key] (https://newsapi.org/)
```

5. Start the application:

```sh
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Features

- Browse news from various countries
- Change news structure
- Integration with external API for fetching news data