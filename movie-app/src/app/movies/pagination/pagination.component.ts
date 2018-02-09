import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'mv-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnChanges {
	@Input() private activePage: number;
	@Input() private totalItems: number;
	@Output() private onPageChange = new EventEmitter();

	private numOfPages: number;
	private pageSize: number = 6;

  constructor() { }

  ngOnChanges(){  	
  	this.numOfPages = Math.ceil(this.totalItems/this.pageSize);  	
  }

  ngOnInit() {
  }

  pageChange(page){
  	if(page>0 && page<=this.numOfPages){
	  	this.activePage = page;
	  	this.onPageChange.emit({page: this.activePage});
	  }	
  }

}
