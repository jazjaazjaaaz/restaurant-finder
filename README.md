# Restaurant Finder

This project is a `monorepo` with `React` on the frontend and `Express / NodeJS` on the backend

## Requirements
- node version - `>=20`
- npm version - `>=v10`
- openai api key
- foursquare api key

## Environment variables

Create `.env` file on the project root

- `APP_PORT` - Port number where the app will run
- `OPENAI_ORG_ID` - openai organization ID
- `OPENAI_API_KEY` - openai API key
- `FOURSQUARE_API_KEY` - foursquare API key


Sample `.env`:
```
APP_PORT=3000
OPENAI_ORG_ID=xxx-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
OPENAI_API_KEY=xx-xxxxx-xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
FOURSQUARE_API_KEY=xxxxxxxxxxxxxxxxxxxxxxx
```

## Application run steps
1. Install the required dependencies - `npm install`
2. Set enviroment variables on `.env` file
3. Run `npm run frontend` on a separate terminal
4. Run `npm run backend` on a separate terminal
5. Open the app on the browser using `http://localhost:{APP_PORT}` 

You could also try the application here: https://codesandbox.io/p/github/jazjaazjaaaz/restaurant-finder
