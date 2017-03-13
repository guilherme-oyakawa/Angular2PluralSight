import { Component, EventEmitter, Input, Output, OnChanges, OnInit } from '@angular/core';

@Component({
    selector: 'ai-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent {
    @Input() rating;
    starWidth: number;
    @Output() notify: EventEmitter<string> = new EventEmitter<string>();
    ngOnChanges() {
        this.starWidth = this.rating * 86 / 5;
    }

    onClick() {
        this.notify.emit('The rating ' + this.rating + ' was clicked!');
    }
}
