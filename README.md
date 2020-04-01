
# ThoughtBot

[![CodeFactor](https://www.codefactor.io/repository/github/dannydi12/thoughtbin-bot/badge)](https://www.codefactor.io/repository/github/dannydi12/thoughtbin-bot)

ThoughtBin allows users to anonymously share and create content on a simple and frictionless micro-platform. Think of it as a privacy-centric Twitter with a hint of 4Chan. A live demo can be found at [https://thoughtbin.imdan.io/](https://thoughtbin.imdan.io/)

## Why a bot?

ThoughtBin allows for live display of new posted thoughts in the browser and infinite scroll. However, since ThoughtBin isn't exactly as widespread as Facebook, I thought I'd build a quick and dirty bot to simulate a community on the social platform. 

This repository includes an automated posting bot that scrapes r/ShowerThoughts to feign user interaction and show off the WebSocket functionality + infinite scroll features. 

## Installation

#### `npm install`

Installs all the required dependencies. Run this before anything else.

#### `npm run dev`

Runs the app in the development mode.

#### `npm start`

Launches the server at the post specified in your `.env` file.

## Configuration

Go to `example.env` , rename it to `.env`, and then enter your configuration details (API URL, JSON Web Token, delay, etc). Also make sure to checkout `config.js` to further customize the bot.

#### **The front-end repository can be found [here](https://github.com/dannydi12/thoughtbin-client).**
#### **The back-end repository can be found [here](https://github.com/dannydi12/thoughtbin-server).**

## Built With

* Node
* Axios
* Ice Cream

## Demo

- [Live Demo](https://thoughtbin.imdan.io/)

## Authors

* **Daniel DiVenere** -  Development, Deployment, etc - [https://imdan.io/](https://imdan.io/)