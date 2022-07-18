import { AfterContentInit } from '@angular/core';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  Animation,
  BarController,
  BarElement,
  CategoryScale,
  Chart,
  LinearScale,
} from 'chart.js';

export type stats = {
  values: Array<number>;
  labels: Array<string>;
};

@Component({
  selector: 'app-grapher',
  templateUrl: './grapher.component.html',
  styleUrls: ['./grapher.component.sass'],
})
export class GrapherComponent implements AfterViewInit {
  @ViewChild('canvas') canvas!: ElementRef;
  @Input() stats!: stats;

  grapher!: Chart;
  colors: Array<string> = [
    '#2185d0',
    '#db2828',
    '#fbbd08',
    '#f2711c',
    '#FFE1A3',
    '#21ba45',
    '#FF1493',
    '#1E90FF',
    '#FFD700',
    '#20B2AA',
    '#7B68EE',
    '#FF0000',
    '#00FF7F',
    '#EE82EE',
    '#708090',
    '#FA8072',
    '#D87093',
    '#F08080',
    '#FF69B4',
    '#4682B4',
    '#A0522D',
  ];

  constructor() {
    Chart.register(BarController, CategoryScale, LinearScale, BarElement);
  }

  ngAfterViewInit(): void {
    this.initGrapher();
  }

  initGrapher() {
    this.grapher = new Chart(this.canvas.nativeElement, {
      type: 'bar',
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
        },
      },
      data: {
        labels: this.stats.labels,
        datasets: [
          {
            backgroundColor: this.colors,
            data: this.stats.values,
          },
        ],
      },
    });
  }
}
