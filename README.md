# Frontend Mentor - Intro component with sign up form

![Design preview for the Intro component with sign up form coding challenge](intro-cmp-sign-up-form/design/desktop-design.jpg)

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Welcome & Overview](#welcome-👋)
  - [The challenge](#the-challenge)
  - [Where to find everything](#where-to-find-everything)
  - [Running this project](#running-this-project)
  - [Deploying this project](#deploying-this-project)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

**To do this challenge, you need a basic understanding of HTML, CSS and JavaScript.**
## Welcome 👋

This is a fairly typical looking sign-up form. I built this in Angular to continue honing my skills in that framework, using `FormBuilder`, `Validators`, and `Reactive Forms`. For styles, I used SCSS. 

## The challenge

Build out this introductory component and get it looking as close to the design as possible.

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

**Note: I elected to make the submit button default to disabled. This way, users cannot submit a form without validated inputs.**

## Where to find everything

If you would like to see the static design files, you may find them in the `/design` folder. You'll see both a mobile and a desktop version. 

There is also a `style-guide.md` file containing the information regarding the designs, such as color palette and fonts.

## Running This Project

1. Clone the repo
2. Run `npm install` to get all dependencies
3. Run `npm install -g @angular/cli` to ensure you have the `@angular/cli` package installed globally
4. Double check that you are using the correct Node version. I recommend 18.10 (you will get output from the terminal if you're using an incorrect version)
5. `ng serve` will build your project
6. Go to [localhost:4200](http://localhost:4200/) to see the build
7. `ng test` triggers your tests in 'watch' mode with the default [Karma](https://karma-runner.github.io/latest/index.html) test runner.


## Deploying this project

There are many ways to host your project for free. Recommended hosts are:

- [GitHub Pages](https://pages.github.com/)
- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)

You can see my deployed version via Netlify [here](https://kaleidoscopic-chaja-6d0932.netlify.app/). 

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Angular Solution](https://your-solution-url.com)
- Older Solution: [Vanilla JS Solution](https://www.frontendmentor.io/solutions/createelement-insertadjacentelement-for-loop-6ntGyjyYFO)
- Live Site URL: [Live Site](https://marissahuysentruyt.github.io/intro-component-sign-up-form/)

## My process

I have built this project before, but with plain HTML, CSS & JavaScript. This time around, I wanted to practice my refactoring skills by transferring it to Angular, using SCSS, and starting with the mobile designs first.

### Built with

- Semantic HTML5 markup
- SCSS
- BEM naming convention
- Mobile-first workflow
- [Angular](https://angular.io/)
<!-- - [React](https://reactjs.org/) - JS library -->

### What I learned

#### _Netlify & Angular settings_

Because I started a new Angular project within an existing repo, I needed to make sure I indicated that in the Netlify deploy settings. Netlify had to find the Angular directory first (`intro-cmp-sign-up-form`) _before_ running the build command. All of those deploy settings also had to match what was in my `netlify.toml` file under `build`.

I am not using [`Angular Universal`](https://angular.io/guide/universal) or [`Scully`](https://scully.io/) to pre-render this project, so instead I used a `_redirects` file. The `_redirects` file has to be added to the `angular.json` so that Netlify knows to enable Angular routing and page refresh functionality. 

#### _Angular Reactive Forms_

`formControlName` was missing from my `input`s for quite some time, causing my form to come back as undefined, although validated. That attribute connects the HTML to the named form control within the TS file. 

#### _Ternary Text_

Within the submit button, I decided to use a ternary operator, checking if `formSubmitted` was true, and displaying the button text accordingly. I thought this was also a good way to confirm to users that their data sent. 🎉
````
  <button type="submit" [disabled]="!signUpForm.valid">
    {{formSubmitted ? "Submitted!" : "Claim Your Free Trial"}}
  </button>
````
### Continued development

I am having issues with the secondary `*ngIf` message I'd like to display when passwords are either too short or too long. I have the proper `minLength` and `maxLength` validators, but I struggled to get the actual error messages to display. 

### Useful resources

- [Angular](https://angular.io/) - If you've never used Angular before, here are the docs. They're pretty comprehensive. 👍 Particularly for this project, the built-in Angular Validators were super useful!

## Author

- Website - [Marissa Huysentruyt](https://www.marissahuysentruyt.com)
- Frontend Mentor - [@marissahuysentruyt](https://www.frontendmentor.io/profile/marissahuysentruyt)


## Have fun building! 🚀
