import { Module } from './../store/models/module.model';
import { Budget } from './../store/models/budget.model';

import { Component, OnInit, Input, Injectable } from '@angular/core';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
  export class ChartComponent implements OnInit {

  @Input() budget$: Budget[];
  @Input() modules$: Module[];

  public chartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    legend: {
      labels: {
        fontColor: '#C5C5D1'
      }
    },
    scales: {
        xAxes: [{
          ticks: { fontColor: '#C5C5D1' },
          gridLines: { color: 'rgba(255,255,255,0.05)' }
        }],
        yAxes: [{
          ticks: { fontColor: '#C5C5D1' },
          gridLines: { color: 'rgba(255,255,255,0.05)' }
        }]
      }
  };
  public chartLabels = [];
  public chartType = 'line';
  public chartLegend = true;
  public chartData = [];

  ngOnInit() {

    this.initializeChart();
  }


  sort() {
    let toString = Object.prototype.toString,
    // default parser function
    parse = function(x) { return x; },
    // gets the item to be sorted
    getItem = function(x) {
      let isObject = x != null && typeof x === 'object';
      let isProp = isObject && this.prop in x;
      return this.parser(isProp ? x[this.prop] : x);
    };

    /**
     * Sorts an array of elements.
     *
     * @param {Array} array: the collection to sort
     * @param {Object} cfg: the configuration options
     * @property {String}   cfg.prop: property name (if it is an Array of objects)
     * @property {Boolean}  cfg.desc: determines whether the sort is descending
     * @property {Function} cfg.parser: function to parse the items to expected type
     * @return {Array}
     */
    return function sortby(array, cfg) {
      if (!(array instanceof Array && array.length)) { return []; }
      if (toString.call(cfg) !== '[object Object]') { cfg = {}; }
      if (typeof cfg.parser !== 'function') { cfg.parser = parse; }
      cfg.desc = !!cfg.desc ? -1 : 1;
      return array.sort(function(a, b) {
        a = getItem.call(cfg, a);
        b = getItem.call(cfg, b);
        return cfg.desc * (a < b ? -1 : +(a > b));
      });
    };

    // }();
  }

  initializeChart() {
    for (const budget of this.budget$) {
      this.chartLabels.push(budget.date);
    }

    for (const mod of this.modules$) {
      const data = [];

      for (const budget of this.budget$) {
        // this.chartLabels.push(budget.date);
        if (budget.module == mod.id) {
          data.push(budget.amount);
        } else {
          data.push(0)
        }
      }
      this.chartData.push({
        data,
        label: mod.name,
        backgroundColor: 'transparent'
      });

    }

  }



}
