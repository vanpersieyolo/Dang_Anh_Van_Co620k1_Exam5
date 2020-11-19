import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowAllComponent } from './show-all/show-all.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DetailComponent } from './detail/detail.component';
import { UpdateFormComponent } from './update-form/update-form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreateBookComponent } from './create-book/create-book.component';
import { DeleteFormComponent } from './delete-form/delete-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowAllComponent,
  
    DetailComponent,
    UpdateFormComponent,
    CreateBookComponent,
    DeleteFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
