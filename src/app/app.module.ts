import { MyserviceService } from './myservice.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpModule } from "@angular/http";
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { CheckNumDirective } from './check-num.directive';
import { TouppercaseDirective } from './touppercase.directive';
@NgModule({
  declarations: [
    AppComponent,
    CheckNumDirective,
    TouppercaseDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpModule,
    TypeaheadModule.forRoot()
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
