import {Component } from 'angular2/core';

@Component({
    selector: 'my-app',
    template: '<p>{​{Title}​}</p>'
})
export class AppComponent {
    Title: string;

    constructor() {
        this.Title = 'Hello World';
    }
}