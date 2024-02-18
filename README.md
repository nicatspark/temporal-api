# Temporal api

## Get started

`npm start`

## Implement yourself

The first step to using the Temporal API is to install the package by running the command below:

```bash
npm install @js-temporal/polyfill
```

We will install Snowpack as a dev dependency to enable us to build and ship our files to the browser:

```bash
npm install --save-dev snowpack
```

In the package.json file, paste the code below into the scripts section.

```json
"start": "snowpack dev"
```

Create an index.html file and paste the code below into the file:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Temporal API</title>
    <script src="index.js" type="module"></script>
  </head>
  <body>
    <h1>A guide to the Temporal API</h1>
  </body>
</html>
```

Create an index.js file and import the Temporal package into it.

```js
import { Temporal } from '@js-temporal/polyfill'
```

With that done, run `npm start` in your terminal to start your development server. Let’s look at some Temporal data types that you will most likely work with.

## PlainDateTime

Given that it just provides a date and time without taking into account the time zone, the PlainDateTime object is one of the simplest objects to comprehend. Using Temporal.now is the simplest way to construct a new PlainDateTime.

The `temporal.now()` function is a method in the Temporal API that returns the current date and time in the local time zone. This function can be used to get the current time in a script or program using the Temporal API.

```js
const todaysDateAndTime = Temporal.Now.plainDateTimeISO()
console.log(todaysDateAndTime.toString()) //2022-12-30T11:39:20.729760718
```
