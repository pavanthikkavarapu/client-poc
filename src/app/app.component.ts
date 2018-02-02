import {Component,OnInit} from '@angular/core';
import {Grid} from '../app/grid';
import {gridService} from '../app/gridservice';

@Component({
  selector: 'app-root',
    templateUrl: './app.component.html',
    providers: [gridService]
})
export class AppComponent implements OnInit {

    cars: Grid[];
    
    selectedCar: Grid;
    
    displayDialog: boolean;

    constructor(private carService: gridService) { }

    ngOnInit() {
        this.carService.getCarsLarge().subscribe(cars => this.cars = cars);
    }
    
    selectCar(car: Grid) {
        this.selectedCar = car;
        this.displayDialog = true;
    }
    
    onDialogHide() {
        this.selectedCar = null;
    }
}