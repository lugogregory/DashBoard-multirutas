import { Component, OnInit, Input } from '@angular/core';
import { Label, MultiDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-graph-donuts',
  templateUrl: './graph-donuts.component.html',
  styles: []
})
export class GraphDonutsComponent implements OnInit {

  @Input() doughnutChartLabels: Label[];
  @Input() doughnutChartData: MultiDataSet = [];
  @Input() doughnutChartType: ChartType = 'doughnut';
  @Input() title: string = '';

  constructor() { }

  ngOnInit(): void {
    console.log(this.doughnutChartLabels);
    
  }

}
