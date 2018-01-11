import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
    public title: string;
    public time: string;

    private _timer: number;

    constructor() {  }

    public ngOnInit() {
        this.title = 'UE08';
        this.updateTime();
        console.log('Hallo, I bims, in da Konsole');
        window.setTimeout( () => {
            this.title = 'the Family';
        }, 5000);
        this._timer = window.setInterval( () => {
            this.updateTime();
        }, 100);
    }

    public ngOnDestroy() {
        if (this._timer !== undefined) {
            window.clearInterval(this._timer);
            this._timer = undefined;
        }
    }

    private updateTime() {
        const now = new Date();
        this.time = now.toLocaleTimeString();
    }
}
