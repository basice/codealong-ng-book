import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AnalyticsService } from '../services/analytics.service';
import { AnalyticsImplementation, Metric } from './analytics-demo.interface';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: AnalyticsService,

      useFactory() {
        const loggingImplementation: AnalyticsImplementation = {
          recordEvent(metric: Metric): void {
            console.log('The metric is: ', metric);
          }
        };

        return new AnalyticsService(loggingImplementation);
      }
    }
  ]
})
export class AnalyticsDemoModule {
}
