import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StoriesComponent } from './stories/stories.component';
import { FooterComponent } from './footer/footer.component';
import { ItemComponent } from './item/item.component';
import { HnApiService } from './hn-api.service';

import { MomentModule } from 'angular2-moment';
import { DomainPipe } from './domain.pipe';
import { ItemcommentsComponent } from './itemcomments/itemcomments.component';
import { routing } from './app.routes';
import { CommentTreeComponent } from './c-tree/c-tree.component';
import { CommentComponent } from './comment/comment.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StoriesComponent,
    FooterComponent,
    ItemComponent,
    DomainPipe,
    ItemcommentsComponent,
    CommentTreeComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MomentModule,
    routing
  ],
  providers: [HnApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
