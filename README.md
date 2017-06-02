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
  * Question detail page/route
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
