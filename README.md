# Intro to React Sprint Challenge

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past sprint and apply them in a concrete project. This sprint explored **introductory React**. During this sprint, you studied **React components and advanced styling**.

In your challenge this week, you will demonstrate your mastery of these skills by creating **a Star Wars page** using data from an API.

This is an individual assessment. All work must be your own. All projects will be submitted to Codegrade for automated review. You will also be given feedback by code reviewers. For more information on the review process [click here.](https://www.notion.so/bloomtech/How-to-View-Feedback-in-CodeGrade-c5147cee220c4044a25de28bcb6bb54a)

You are not allowed to collaborate during the sprint challenge.

## Project Set Up

- [ ] Fork and clone the repo. Delete your old fork from Github first if you are repeating this Unit.
- [ ] Open the assignment in Canvas and click on the "Set up git" option (Or, depending, if you see something along the lines of 'Load Sprint Challenge Submission in a new window' click that).
- [ ] Wire your fork to Codegrade using the "Click here for instructions on setting up Git submissions" link, select Github, authorize Github.
- [ ] Push your first commit: `git commit --allow-empty -m "first commit" && git push`. MAKE SURE TO PUSH TO MAIN, YOU NO LONGER NEED TO CREATE A NEW BRANCH!!
- [ ] Make commits often! PUSH TO MAIN!!!
- [ ] You can run tests locally by running npm run test.
- [ ] Check to see that Codegrade has accepted your git submission.

## Project Instructions

### Introduction

In this challenge you will create a web page that presents a styled list of characters obtained from an API. Being able to render out data to a web page is a large part of what JavaScript developers do, this challenge assesses your ability to achieve such a task.

In meeting the minimum viable product (MVP) specifications listed below, your project might look somewhat similar to the solution examples below:

[Example](https://tk-assets.lambdaschool.com/b011a132-0916-4ed2-8955-14192de03a75_sample-screenshot.png)

[Another example](https://tk-assets.lambdaschool.com/3b82c793-2352-4d4d-a81d-e55bf350f7bd_sample-screenshot2.png)

### Instructions

Your finished project must include all of the following requirements:

- [ ] Use the endpoint `[GET] https://swapi.dev/api/people` (mocked in [msw](https://github.com/mswjs/msw)) to obtain characters.
- [ ] Set the list of characters into state.
- [ ] Render your characters to the DOM:

  1. Build a React component named 'Character' to render an individual character.
  1. Map over the list in state, and for each character render a Character to the page.
  1. Each rendered character must display its name in the DOM (e.g. "Luke Skywalker").
  1. The character's name can't be hard-coded into the HTML. This data must be obtained from the API.
  1. The components must be styled with **styled-components**.

  **Notes:**

- Data obtained from the endpoint using browser-run JavaScript is mocked with [msw](https://github.com/mswjs/msw).
- If you test the endpoint using HTTPie or Postman you will obtain different results, as msw won't intercept the request.
- You are welcome to create additional files but **do not move or rename existing files** or folders.
- Do not alter your `package.json` file except to install extra libraries.
- The `start` process can sometimes choke after adding new dependencies and may need to be restarted.
- In your solution, it is essential that you follow best practices and produce clean and professional results.
- Schedule time to review and polish your work, including spell-checking and grammar-checking.
- It is better to submit a challenge that meets MVP than one that attempts too much and does not.

### Stretch Goals

After finishing your required elements, you can push your work further. These goals may or may not be things you have learned in this module but they build on the material you just studied. Time allowing, stretch your limits and see if you can deliver on any the following optional goals:

- [ ] Make the Character component more complex and break it into several subcomponents.
- [ ] Use the endpoint `[GET] https://swapi.dev/api/films` (mocked in msw) to obtain movie information to render with the characters.
- [ ] Create a helper function in separate module to remove unneeded information from the API data, before putting it in state.
- [ ] Create transitions or animations with styled-components.
- [ ] Use Promise.all to resolve an array of promises.

## Submission format

- [ ] Submit via Codegrade by committing and pushing any new changes to the main branch.
- [ ] Check Codegrade for automated feedback.
- [ ] Check Codegrade in the days following the Sprint Challenge for reviewer feedback.
- [ ] Any changes pushed after the deadline will not receive any feedback.

## Interview Questions

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. Put your answers underneath the questions:

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.
- React.js is trying to resolve the problem of the repetitive referencing to the DOM. When we want to add something to the DOM using vanilla Javascript, we have to reference the DOM using document.querselector(’.class’) to be able to add/manipulate what is in that class name. With React, all this goes away and we can manipulate the DOM within a react component. Inside of writing out each individual element that we want to create, we can do it all withing a virtualDOM that react builds for us. React was created by facebook to allow manipulation of the DOM to be quicker and faster. 
1. Describe component state.
- A "component" is a pretty loose term to describe a discrete chunk of your site. A header could be a component, for example. Or a footer. Or a hero section, etc. This one's pretty simple, all we're doing is rendering a div with an h1 inside of it.


1. Describe props.
- When we want to pass information held on state inside one component to another, we pass them as props.
1. What are side effects, and how do you sync effects in a React component to changes of certain state or props?
- A side effect is anything that affects something outside the scope of the function being executed. Fetching data from an API, timers, logging, and manually manipulating the DOM are all examples of side effects.
