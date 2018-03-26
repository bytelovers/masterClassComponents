import { Component } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'expl-override-parent',
    templateUrl: './parent.component.html',
    styleUrls: [
        './parent.component.style1.css',
        './parent.component.style2.css'
    ]
})

export class ParentOverrideComponent {}
