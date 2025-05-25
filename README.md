# SpotBotWebApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Custom Schematics

A collection of custom schematics is available under the `schematics` folder. Use the `role-based-component` schematic to scaffold a new screen or control using the project's role-based architecture. Run:

```bash
ng generate ./schematics:role-based-component --name=my-feature --type=screen
```

The schematic creates a folder with all role files (`Component`, `Api`, `Behaviors`, `Events`, `Interactions`, `Model`, `Validation`, `Styles.scss`, and `Template.html`).
