import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from '../service/token-interceptor.service';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule} from '@ngxs/logger-plugin'
import { TutorialStateModel, TutorialState } from './store/state/tutorial.state';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin'


@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    CreateComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule,
    NgxsModule.forRoot([
      TutorialState
    ]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot()

  ],

  providers: [
    RouterModule,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
