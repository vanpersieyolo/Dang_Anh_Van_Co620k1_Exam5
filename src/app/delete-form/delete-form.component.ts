import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-delete-form',
  templateUrl: './delete-form.component.html',
  styleUrls: ['./delete-form.component.css']
})
export class DeleteFormComponent implements OnInit {
  book:any = {
    title : "",
    author : "",
    description : "",
  }
  idBook:any;


  constructor( public router: Router,private service: ServiceService,private actRoute: ActivatedRoute) {
    this.idBook = parseInt(this.actRoute.snapshot.params.id);
    this.getById(this.idBook);
   }

  ngOnInit(): void {
  }
  back(){
    this.router.navigateByUrl('/')
  }
  deleteBook(id){
    this.service.deleteData(id)
    .then(res => {
      window.location.reload()
      this.book= res;
    }).catch(e => {
      window.alert('Connection Error !');
    })
  }
  getById(id){
    this.service.detailData(id)
    .then(res => {
      this.book = res;
    }).catch(e => {
      window.alert('Connection Error !');
    })
  }

}
