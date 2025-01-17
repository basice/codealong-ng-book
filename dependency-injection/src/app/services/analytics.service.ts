import { Injectable } from '@angular/core';
import { AnalyticsImplementation, Metric } from '../analytics-demo/analytics-demo.interface';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor(private implementation: AnalyticsImplementation) {
  }

  record(metric: Metric): void {
    this.implementation.recordEvent(metric);
  }

}
