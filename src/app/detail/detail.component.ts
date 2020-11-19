import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  idBook:any;
  book:any = {
    title : "",
    author : "",
    description : "",
  }
  constructor( public router: Router,private service: ServiceService,private actRoute: ActivatedRoute) { 
    this.idBook = parseInt(this.actRoute.snapshot.params.id);
    this.getById(this.idBook);
  }

  ngOnInit(): void {
  }
  back(){
    this.router.navigateByUrl('/')
  }
  getById(id){
    this.service.detailData(id)
    .then(res => {
      this.book = res;
    }).catch(e => {
      window.alert('Connection Error !');
    })
  }
  updateData() {
    this.service.updateData(this.idBook, this.book)
      .then(res => {
        this.book = res;
        this.back();
      }).catch(e => {
        window.alert('Connection Error !');
      })
  }

}
