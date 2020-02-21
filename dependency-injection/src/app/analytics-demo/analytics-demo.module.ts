import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AnalyticsService } from '../services/analytics.service';
import { AnalyticsImplementation, Metric } from './analytics-demo.interface';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    {provide: 'API_URL', useValue: 'http://devserver.com'},
    {
      provide: AnalyticsService,

      deps: [HttpClient, 'API_URL'],

      useFactory(http: HttpClient, apiUrl: string) {
        const loggingImplementation: AnalyticsImplementation = {
          recordEvent: (metric: Metric): void => {
            console.log('The metric is: ', metric);
            console.log('Sending to: ', apiUrl);
            // ... You send the metric using http here...
          }
        };

        return new AnalyticsService(loggingImplementation);
      }
    }
  ]
})
export class AnalyticsDemoModule {
}
