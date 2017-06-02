# message-board

## Planning

1. Configuration/dependencies
  * NPM: used to installed Ember Addons
  * Bower: used by the Ember Command Line Interface to manage packages
  * Firebase: a google cloud database to store information in JSON format https://firebase.google.com/

2. Specs

| Behavior                   | Input Example     | Output Example    |
| -------------------------- | -----------------:| -----------------:|
|A user can submit a question| Question: What is a good code school in Portland?, Author: PDX Resident, Additional Notes: I'm looking to start next month.| What is a good code school in Portland?, PDX Resident displayed on homepage.|
|A user can answer a question after clicking it on the homepage| Answer: Epicodus is great! Author: Epicodus Student| Answer displayed on specific questions page|
|A user can update their question|Question: What is a good code school in Portland?|Question: What is a good code school in downtown Portland, OR?|

3. Integration

  * Home page/index route
  * About page/route
  * Media/Contact page/route

4. UX/UI

  * Install and utilize bootstrap
  * Implement custom CSS

5. Polish

  * Refactor
  * Delete anything unused
  * Remove debugging tools
  * Update and complete README.md

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd message-board`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
