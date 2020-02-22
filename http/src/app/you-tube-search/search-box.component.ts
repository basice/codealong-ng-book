import { Component, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { debounce, debounceTime, filter, map, subscribeOn, switchAll, tap } from 'rxjs/operators';
import { log } from 'util';
import { SearchResult } from './search-result.model';
import { YouTubeSearchService } from './you-tube-search-service';

@Component({
  selector: 'app-search-box',
  template: `<input type="text" class="form-control" placeholder="Search" autofocus>
  `,
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() results: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>();

  constructor(private youtubeservice: YouTubeSearchService, private el: ElementRef) {
  }

  ngOnInit() {
    fromEvent(this.el.nativeElement, 'keyup')
      .pipe(
        map((e: any) => e.target.value),          // extract the value of the input
        filter(text => text.length > 1),        // filter out if empty
        debounceTime(250),                      // only once every 250ms
        tap(() => this.loading.emit(true)),  // enable loading
        // search, discarding old events if new input comes in
        map((query: string) => this.youtubeservice.search(query)),
        switchAll()
      )
      // act on the return of the search
      .subscribe((results: SearchResult[]) => { // on sucess
          this.loading.emit(false);
          this.results.emit(results);
        },
        (err: any) => { // on error
          console.log(err);
          this.loading.emit(false);
        },
        () => { // on completion
          this.loading.emit(false);
        }
      );
  }

}
