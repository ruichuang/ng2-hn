import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

import { HnApiService } from '../hn-api.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {
  items;
  typeSub: any;
  pageSub: any;
  storiesType;
  pageNum: number;
  listStart: number;

  constructor(private service: HnApiService,
              private route: ActivatedRoute) {}

  ngOnInit() {

    // ActivatedRoute which is a service that allows us to access information present in the route.
    // subscribe to the route data property and store into a var

    this.typeSub = this.route
        .data
        .subscribe(data => this.storiesType = (data as any).storiesType);
    // + convert string to number
    this.pageSub = this.route.params.subscribe(
      params => {
        this.pageNum = +params['page'] ? +params['page'] : 1;
        this.service.fetchPosts(this.storiesType, this.pageNum)
                    .subscribe(
                      items => this.items = items,
                      error => console.log('error fetching' + this.storiesType + 'stories'),
                      () => {
                        this.listStart = ((this.pageNum - 1) * 30) + 1;
                        window.scrollTo(0, 0);
                      });
      });
  }

}
