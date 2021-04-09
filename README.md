# JUMBOCASH-T10

Team ID: JUMBOCASH-T10 | Team Members: Shaswata Raha &amp; Rahul Lekkala

## X-Meme

Frontend and Backend code are in separate folders named as "frontend" and "backend" respectively.

## TECH-STACK USED

1. Database- MongoDB Compass(for local testing) and MongoDB Atlas(for public deployment)

2. Backend server - Node.js and EXpress

3. Frontend-React Js

The backend is hosted on Heroku.
You can go and visit there - <https://jumbocash-backend.herokuapp.com/>

The frontend is deployed on Netlify.
You can go and visit there- <https://jumbocash-management-apllication.netlify.app>

## Local Run

Before running make sure to create a .env folder in the backend and provide the required configuration details

```bash
npm install && npm start
```

## Deployment of Backend

After signing up on Heroku, create a new app, and proceed to download Heroku CLI to deploy the backend of the app.

```bash
heroku login -i
heroku builds:create -a <name_of_your_app>
```

## Deployment of Frontend

For deploying the frontend move to the frontend folder and download the netlify CLI to deploy it.

```bash
npm install netlify-cli -g
netlify login
npm run build
netlify deploy
netlify deploy --prod
```

Since there is routing (like React Router for example), you will need to set up a redirect and rewrite rule for the single page app.

That redirect rule would look like this:

```bash
 /*    /index.html   200
```

This redirect rule above will serve the index.html instead of giving a 404 no matter what URL the browser requests.

You can add redirect rules to the \_redirects file or to your netlify.toml config file.
