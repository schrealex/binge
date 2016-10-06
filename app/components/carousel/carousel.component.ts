import { Component, Input } from '@angular/core';
import { Image } from "../../model/image";

@Component({
    moduleId: module.id,
    selector: 'carousel',
    templateUrl: 'carousel.component.html',
    styles: [`
        .carousel-inner > .item > img,
        .carousel-inner > .item > a > img {
            width: 70%;
            margin: auto;
        }
    `]
})

export class CarouselComponent {

    @Input() carouselId: string;
    @Input() navigation: boolean;
    @Input() images: Image[];

    constructor() {

    }
}