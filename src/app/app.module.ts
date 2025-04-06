import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizzComponent } from './components/quizz/quizz.component';
import { HomeComponent } from './pages/home/home.component';
import { bootstrapApplication } from '@angular/platform-browser';

bootstrapApplication(AppComponent, {
    providers: [],
}).catch((err) => console.error(err));

@NgModule({
  declarations: [    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppComponent,
    QuizzComponent,
    HomeComponent,
  ],
  providers: []
})
export class AppModule { }