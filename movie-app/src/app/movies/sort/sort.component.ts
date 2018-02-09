import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mv-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnInit {
	private sort: string = "rating";
	private sortDirection: string = "desc";
	@Output() private onSortChange = new EventEmitter(); 

  constructor() { }

  ngOnInit() {
  }

  changeParms(){
  	this.onSortChange.emit({sort: this.sort});
  }

  changeDirection(){
  	this.sortDirection = this.sortDirection == 'asc' ? 'desc' : 'asc';
    this.onSortChange.emit({"sortDirection": this.sortDirection});
  }

}
