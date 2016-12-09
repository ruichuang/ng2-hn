import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-c-tree',
  templateUrl: './c-tree.component.html',
  styleUrls: ['./c-tree.component.scss']
})
export class CommentTreeComponent implements OnInit {
  @Input() commentTree;
  constructor() { }

  ngOnInit() {
  }

}
