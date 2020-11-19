import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-show-all',
  templateUrl: './show-all.component.html',
  styleUrls: ['./show-all.component.css']
})
export class ShowAllComponent implements OnInit {
  books:any = [];
  countNumber : any ;
  constructor(public router: Router, private service: ServiceService) { }

  ngOnInit(): void {
    this.getData();
  }
  formCreate(){
    this.router.navigateByUrl('/create');
  }
  formDetail(id){
    this.router.navigateByUrl('/detail/'+id);
  }
  getData(){
    this.service.getData()
    .then(res => {
      this.books= res;
    }).catch(e => {
      window.alert('Connection Error !');
    })
  }
  deleteBook(id: any){
    this.service.deleteData(id)
    .then(res => {
      window.location.reload()
      this.books= res;
    }).catch(e => {
      window.alert('Connection Error !');
    })
  }
  
}
