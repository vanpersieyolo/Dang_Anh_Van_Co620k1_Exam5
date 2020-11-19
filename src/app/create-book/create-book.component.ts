import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
  book:any = {
    title : "",
    author : "",
    description : "",
  }

  constructor(public router: Router,private service: ServiceService) { }

  ngOnInit(): void {
  }
  back(){
    this.router.navigateByUrl('/')
  }
  createBook(){
    debugger
    this.service.createData(this.book) 
    .then(res => {
      res = this.book;
      this.router.navigateByUrl('/')
    }).catch(e => {
      window.alert('Connection Error !');
    })
  }
}
