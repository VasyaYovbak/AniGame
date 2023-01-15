import {Component, DoCheck, Input, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {ChartConfiguration, ChartOptions} from "chart.js";
import {NarutoTheme} from "../../../../assets/type-script/interfaces/ThemeInterface";
import {ThemeService} from "../../../services/theme.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-games-analytics',
  templateUrl: './games-analytics.component.html',
  styleUrls: ['./games-analytics.component.scss']
})
export class GamesAnalyticsComponent implements OnInit, OnDestroy {
  currentChart: string = 'activity';

  private themesSubscription: Subscription;
  title = 'Profile analytics';

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July'
    ],
    datasets: [
      {
        data: [0, 59, 80, 81, 56, 100, 40],
        fill: false,
        tension: 0,
        borderColor: this.themeService.active.properties['--chart-line-color'],
        pointBackgroundColor: this.themeService.active.properties['--chart-point-color'],
        pointHoverBorderColor: this.themeService.active.properties['--chart-point-border-color'],
        pointHoverBackgroundColor: this.themeService.active.properties['--chart-point-hover-color'],
      }
    ],

  };


  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    layout: {
      padding: {
        left: 40,
        right: 20,
        top: 40,
        bottom: 20
      }
    },

    scales: {
      grid: {
        grid: {
          display: true,
          color: '#ffffff',
          lineWidth: 0.5,
        },
        axis: "y",
      }
    },
  };
  public lineChartLegend = false;


  constructor(public themeService: ThemeService) {
  }

  chartThemeSwitch = () => {
    this.lineChartData = {
      ...this.lineChartData,
      datasets: [{
        ...this.lineChartData.datasets[0],
        borderColor: this.themeService.active.properties['--chart-line-color'],
        pointBackgroundColor: this.themeService.active.properties['--chart-point-color'],
        pointHoverBorderColor: this.themeService.active.properties['--chart-point-border-color'],
        pointHoverBackgroundColor: this.themeService.active.properties['--chart-point-hover-color'],
      }]
    }
  }

  ngOnInit(): void {
    this.themesSubscription = this.themeService.getThemeUpdateSubscription(this.chartThemeSwitch)
  }

  ngOnDestroy(): void {
    this.themesSubscription?.unsubscribe();
  }

  showRatingChart() {
    if (this.currentChart === 'rating'){
      return
    }
    // getting info for rating chart
  }

  showActivityChart() {
    if (this.currentChart === 'activity'){
      return
    }
    // getting info for activity chart
  }
}
