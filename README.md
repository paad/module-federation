# Module Federation Demo
This project was build using a tutorial from [angulararchitects](https://www.angulararchitects.io/aktuelles/using-module-federation-with-monorepos-and-angular)  
It consists of three sub-projects.
* page-a: port 3000
* page-b: port 3001
* shell: port 5000
Two Applications (page-a and page-b) and a shell to combine them.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.9.
It opts out for webpack 5 to test module federation.

It illustrates an issue with the browser and browserAnimations module.  
Routing to page-a, which doesn't use a browserModule works fine.  
While routing to page-b however, the app doesn't work as expected: 
* The routing creates new instances of the sub-pages and 
* They get stacked underneath each other.

## How to reproduce
* Do a `yarn` installation from the root. Yarn is important to respect resolutions.
* `yarn start` should spin up all of the tree sub-applications.

