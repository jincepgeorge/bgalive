import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BoardComponent } from './components/board/board.component';
import { FoundersComponent } from './components/founders/founders.component';
import { NewsComponent } from './components/news/news.component';
import { MainComponent } from './components/main/main.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { MinistriesComponent } from './components/ministries/ministries.component';
import { ContactComponent } from './components/contact/contact.component';
import { SidebarContentComponent } from './components/sidebar-content/sidebar-content.component';


import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';

import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { DetailComponent } from './components/detail/detail.component';
import { ContentManagerComponent } from './components/content-manager/content-manager.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    DashboardComponent,
    BoardComponent,
    FoundersComponent,
    NewsComponent,
    MainComponent,
    GalleryComponent,
    MinistriesComponent,
    ContactComponent,
    SidebarContentComponent,
    DetailComponent,
    ContentManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    Ng4LoadingSpinnerModule.forRoot(),
    // NgbModule.forRoot(),
    FormsModule,
    AngularFireStorageModule
  ],
  providers: [
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
