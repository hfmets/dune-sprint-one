import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';
import { Stock } from '../models/stock.model';
import { SpiceStockService } from '../spice-stock.service';

@Component({
  selector: 'app-stock-page',
  templateUrl: './stock-page.component.html',
  styleUrls: ['./stock-page.component.css'],
})
export class StockPageComponent implements OnInit {
  stockData: Stock[] = [];

  lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [],
        label: '',
      },
      {
        data: [],
        label: '',
      },
      {
        data: [],
        label: '',
      },
      {
        data: [],
        label: '',
      },
      {
        data: [],
        label: '',
      },
      {
        data: [],
        label: '',
      },
      {
        data: [],
        label: '',
      },
      {
        data: [],
        label: '',
      },
    ],
    labels: ['12/7/2021', '12/8/2021', '12/9/2021', '12/10/2021', '12/11/2021'],
  };

  lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.5,
      },
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      x: {},
      'y-axis-0': {
        position: 'left',
      },
      'y-axis-1': {
        position: 'right',
        grid: {
          color: 'rgba(255,0,0,0.3)',
        },
        ticks: {
          color: 'red',
        },
      },
    },
  };

  lineChartType: ChartType = 'line';

  constructor(private stockSvc: SpiceStockService) {}

  ngOnInit(): void {
    this.stockSvc.getStockData().subscribe(
      (res) => (this.stockData = res),
      (err) => console.log(err),
      () => this.createDataSets()
    );
  }

  createDataSets() {
    for (let i = 0; i < this.stockData.length; i++) {
      let data = this.stockData[i].stock_values.map((obj) => obj.price);
      let dataset = {
        data: data,
        label: this.stockData[i].house,
      };
      this.lineChartData.datasets[i] = dataset;
    }
  }
}
