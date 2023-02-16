# Explanation

Framework creation:

1st version = Angular.js
2nd+ version = Angular

## What we need to develop an Angular app?

- node
- npm
- text/code editor (VSCODE, Sublime, etc...)
- `npm i @angular/cli -g` (global installing)


## How to create Angular project?

1. `ng new project_name` <- basic project template

## How to run the project?
1. `ng serve -o` <- watch mode

### Angular.json file:

1. prefix: the name of the prefix for the component tags to be used in the application.
2. styles: the stylesheets to be included in the global style bundle.
3. scripts: the scripts to be included in the global script bundle.
4. assets: the assets to be included in the global asset bundle.

## How to create a component?

1. `ng g c component_name` <- generate component

## Structural directives: Can modify the DOM structure!

1. `*ngIf="true"` <- if true, then show the element
2. `*ngFor="let item of items"` <- for each item in items, show the element
3. `*ngSwitch="true"` <- switch between the elements

## Attribute directives: Can modify the attributes of the DOM elements!

1. `[ngClass]="{class1: true, class2: false}"` <- add class1 if true, add class2 if false
2. `[ngStyle]="{color: 'red'}"` <- add style to the element
3. `[ngModel]="value"` <- bind the value to the element



