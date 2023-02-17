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

## How to create a component?

1. `ng g c component_name` <- generate component

## How to create a service?

1. `ng g s service_name` <- generate service

## How to create a module?

1. `ng g m module_name` <- generate module


## How to run the project?
1. `ng serve -o` <- watch mode

### Angular.json file:

1. prefix: the name of the prefix for the component tags to be used in the application.
2. styles: the stylesheets to be included in the global style bundle.
3. scripts: the scripts to be included in the global script bundle.
4. assets: the assets to be included in the global asset bundle.



## Structural directives: Can modify the DOM structure!

1. `*ngIf="true"` <- if true, then show the element
2. `*ngFor="let item of items"` <- for each item in items, show the element
3. `*ngSwitch="true"` <- switch between the elements

## Attribute directives: Can modify the attributes of the DOM elements!

1. `[ngClass]="{class1: true, class2: false}"` <- add class1 if true, add class2 if false
2. `[ngStyle]="{color: 'red'}"` <- add style to the element
3. `[ngModel]="value"` <- bind the value to the element

## How to install bootstrap?

 1. `ng add ngx-bootstrap` <- install bootstrap

## What are lifecycle hooks?
0. `contructor()` <- called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
1. `ngOnChanges()` <- called after the default change detector has checked the directive's data-bound properties if at least one has changed, and before any of the view or content children have been checked. The `ngOnChanges` method receives a `SimpleChanges` object of current and previous property values. Called before ngOnInit and whenever one or more data-bound input properties change.
2. `ngOnInit()` <- called after the constructor, initializing input properties, and the first call to ngOnChanges.
3. `ngDoCheck()` <- called during every change detection run, immediately after ngOnChanges and ngOnInit.
4. `ngAfterContentInit()` <- called after ngOnInit when the component's or directive's content has been initialized.
5. `ngAfterContentChecked()` <- called after every check of the component's or directive's content.
6. `ngAfterViewInit()` <- called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
7. `ngAfterViewChecked()` <- called after every check of the component's view. Applies to components only.
8. `ngOnDestroy()` <- called once, before the instance is destroyed.


## How to communicate between components?

1. `@Input()` <- pass data from parent to child
2. `@Output()` <- pass data and events from child to parent

## What kind of relationships exist between components?

1. Parent -> Child
2. Child -> Parent
3. Sibling -> Sibling

## ngOnChanges() vs ngOnInit()

1. ngOnChanges() <- called after a bound input property changes
2. ngOnInit() <- called once the component is initialized

* ngOnChanges() is called before ngOnInit().
* ngOnChanges() is called every time when the value of input property changes.
* ngOnInit() is called only once.

## ngOnChanges(): How to get the previous value?

 ```javascript
  ngOnChanges(changes: SimpleChanges) {
   for (let propName in changes) {
     let chng = changes[propName];
     let cur  = JSON.stringify(chng.currentValue);
     let prev = JSON.stringify(chng.previousValue);
     console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
   }
```
## How to access any component without using @Input()?

1. `@ViewChild()` <- access any component in a shallow/single way--> used together with ngOnViewInit() or ngAfterViewInit()
2. `@ViewChildren()` <- access multiple components inside the component --> used together with ngOnViewInit() or ngAfterViewInit()

* it is used to get the reference of the view child element in another component.

## What is ng-template?

1. `ng-template` <- used to define the template of the component to load components dynamically inside the component js file.
2. it has a template reference variable, for example: `#myTemplate`
3. to load the template using a @ViewChild() decorator, for example: 
```javascript
   @ViewChild('myTemplate', {read: ViewContainerRef}) myTemplate: ViewTemplateRef;

   ngAFterViewInit() {
    const componentRef = this.myTemplate.createComponents(RoomComponent);
    componentRef.instance.room = 50
    }
```
4. It is never rendered in the DOM. 
### How to use ng-template?

To load components dynamically inside the component js file and to access the components properties and methods.

## How to create a reference to a div element?

1. `#myDiv` <- create a reference to a div element using this id
2. `@ViewChild('myDiv', {static: true}) myDiv!: ElementRef` <- access the div element using this id
3. `this.myDiv.nativeElement.style.color = 'red'` <- change the style of the div element inside the ngOnInit() method ({static:true})

### Why to create a reference to another component dynamically?

To access the properties and methods of the component without changing the other component and without using @Input() or @Output().

## What is dependency resolution?

1. `@Injectable()` <- used to inject a service into another service
2. `@Inject()` <- used to inject a service into another service

## How to create local instance of services?

1. `providers: [ServiceName]` <- create local instance of the service inside the @Component decorator in the component class.
2. `providers: [{provide: ServiceName, useClass: ServiceName}]` <- create local instance of the service inside the component's class.
