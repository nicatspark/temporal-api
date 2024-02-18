import { Temporal } from '@js-temporal/polyfill'

textOut`<h3>PlainDateTime</h3>
Given that it just provides a date and time without taking into account the time zone, the PlainDateTime object is one of the simplest objects to comprehend. Using Temporal.now is the simplest way to construct a new PlainDateTime.
The temporal.now() function is a method in the Temporal API that returns the current date and time in the local time zone. This function can be used to get the current time in a script or program using the Temporal API.`

const todaysDateAndTime = Temporal.Now.plainDateTimeISO()
print(
  'todaysDateAndTime = Temporal.Now.plainDateTimeISO()',
  todaysDateAndTime.toString()
)

textOut`You can even go as far as getting the date and time differently and in a human readable fashion:`

const onlyTheDate = Temporal.Now.plainDateISO()
const onlyTheTime = Temporal.Now.plainTimeISO()
print('Temporal.Now.plainDateISO().toString()', onlyTheDate.toString())
print('Temporal.Now.plainTimeISO().toString()', onlyTheTime.toString())

textOut`For the sake of brevity I'm going to omit the toString() method in the following examples.

<h3>ZonedDateTime</h3>
The Zoned data type represents a specific date and time with information to a specific time zone. Use it when dealing with specific times within certain time zones or needing to format or perform time/date difference/addition operations that take time zone-specific information into account. A ZonedDateTime is a datetime that includes all time zone-related data, making it the ideal choice for displaying local dates and times and doing computations involving things like daylight savings time.
Some examples of how to use the Zoned data type are shown below:`

print(
  'const timeInMyLocation = Temporal.Now.zonedDateTimeISO()',
  Temporal.Now.zonedDateTimeISO().toString()
)

print(
  'const americanTime = Temporal.Now.zonedDateTimeISO("America/Los_Angeles")',
  Temporal.Now.zonedDateTimeISO('America/Los_Angeles').toString()
)

textOut`<h2>Helper Methods in the Temporal API</h2>
The Temporal API also comes with some helper methods that make working with date and time a joy. We’ll cover some of these methods in this section.

<h3>Adding and subtracting methods</h3>
JavaScript makes it quite difficult to add or subtract portions of dates and time, but thanks to the Temporal API, all of the data types we've discussed so far have add and subtract methods built in that make the process relatively simple. The arguments for both functions are same; the only distinction is that one subtracts and the other adds. To use the add and subtract methods, we only need to pass the properties we want to change.

An example is shown below:`

print(
  'Temporal.Now.plainDateISO()<mark>.subtract({ days: 12, months: 5 })</mark>',
  Temporal.Now.plainDateISO().subtract({ days: 12, months: 5 }).toString()
)

textOut`The Temporal API automatically takes care of overflow for you and clamps the date to the nearest valid date. This means that if you try to add one day to March 31st, then the date will automatically be changed to April 1st because March 32nd doesn't exist and is not valid.

<h2>The with method</h2>
The with method takes in an object of fields and uses that object to create a new instance of the current date. This new instance will bear the date but will have the properties specified in the object changed.
Let’s take a look at an example:`

print(
  'Temporal.Now.plainDateISO()<mark>.with({ year: 1999, month: 5 })</mark>',
  Temporal.Now.plainDateISO().with({ year: 1999, month: 5 }).toString()
)

textOut`In the example above, we specified that we want today's date but we want the year to be 1999 and we want the month to be the fifth month (May).`

textOut`<h2>Browser Support for the Temporal API</h2>
The Temporal API is great, but, unfortunately, there is currently no browser support for it. This is because this API is still in <a href="https://code.pieces.app/blog/the-path-of-a-javascript-feature-from-concept-to-browser">Proposal Stage 3</a>.

However, you can still make use of this API by using a polyfill. For this API, there are a variety of polyfills available, but I like the @js-temporal/polyfill the best. You can use the Temporal API as soon as you install this package.

<h2>Conclusion</h2>
This article covers the Temporal API, how it works, and solutions it gives to the problems with using the Date() object in JavaScript. For further information concerning the Temporal API, please refer to:

<ul><li><a href="https://tc39.es/proposal-temporal/">Temporal Proposal</a>
<li><a href="https://tc39.es/proposal-temporal/docs/">The Temporal Documentation</a>
<li><a href="https://tc39.es/proposal-temporal/docs/cookbook.html">The Temporal Cookbook Examples</a></ul>`

//----------------------------------------------

function textOut(str) {
  const div = document.createElement('div')
  str = str[0]
    .split('\n')
    .map((line) => (line.match(/^[\w]/i) ? `<p>${line}</p>` : line))
    .join('')
  div.innerHTML = str
  main.appendChild(div)
}

function print(explanation, output) {
  const div = document.createElement('div')
  div.classList.add('wrapper')
  div.innerHTML = `<div>${explanation};</div><div>// ${output}</div>`
  main.appendChild(div)
}
