import { ModalCreate } from './../pages/modal/modal.create';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ModalUpdate } from '../pages/modal/modal.update';
import { PessoaService } from '../provider/pessoa.service';
import { IonMaskModule } from "@pluritech/ion-mask";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ModalCreate,
    ModalUpdate
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    FormsModule,
    IonMaskModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ModalCreate,
    ModalUpdate
  ],
  providers: [
    StatusBar,
    SplashScreen,
    PessoaService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
