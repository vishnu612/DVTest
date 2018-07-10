import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { SpdrApp } from './app.component';
import { ChartsModule } from 'ng2-charts';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { ChartsPage } from '../pages/charts/charts';
import { TabsPage } from '../pages/tabs/tabs';
import { TrackerPage } from '../pages/tracker/tracker';
import { EducationPage } from '../pages/education/education';
import { WatchlistPage } from '../pages/watchlist/watchlist';
import { OverviewPage } from '../pages/overview/overview';
import { SearchPage } from '../pages/search/search';
import { SummaryPage } from '../pages/summary/summary';
import { NotificationsPage } from '../pages/notifications/notifications';
import { LoginPage } from '../pages/login/login';
import { DetailPage } from '../pages/detail/detail';
import { FundPropertiesPage } from '../pages/fund-properties/fund-properties';
import { AllFundsPerformancePage } from '../pages/all-fund-performance/all-funds-performance'
import { HowToPurchasePage } from '../pages/how-to-purchase/how-to-purchase';
import { DisclaimersAndRisksPage } from '../pages/disclaimers-and-risks/disclaimers-and-risks';
import { PrivacyPage } from '../pages/privacy/privacy';
import { TermsAndConditionsPage } from '../pages/terms-and-conditions/terms-and-conditions';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AppVersion } from '@ionic-native/app-version';
import { TapticEngine } from '@ionic-native/taptic-engine';
import { Network } from '@ionic-native/network';
//import { ThreeDeeTouch } from '@ionic-native/three-dee-touch';
import { Push } from '@ionic-native/push';
import { NativeStorage } from '@ionic-native/native-storage';
import { HTTP } from '@ionic-native/http';
import { Keyboard } from '@ionic-native/keyboard';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import {HttpAngularProvider} from '../providers/http-angular/http-angular';
import {HttpNativeProvider} from '../providers/http-native/http-native';

import { FinancialAPIModule } from '../providers/FinancialAPI/FinancialAPIModule'
import { ChartService } from '../providers/fdsg/chartService';
import { SectorSpdrService } from '../providers/SectorSpdrAPI';

import { PdfViewerModule } from 'ng2-pdf-viewer';
import { DocumentViewPage } from '../pages/document-view/document-view';
import { ComponentsModule } from '../components/components.module';

import { DirectivesModule } from '../directives/directives.module';

@NgModule({
  declarations: [
    SpdrApp,
    AboutPage,
    ContactPage,
    ChartsPage,
    TrackerPage,
    EducationPage,
    WatchlistPage,
    OverviewPage,
    SearchPage,
    SummaryPage,
    TabsPage,
    NotificationsPage,
    LoginPage,
    DetailPage,
    FundPropertiesPage,
    DocumentViewPage,
    AllFundsPerformancePage,
    HowToPurchasePage,
    DisclaimersAndRisksPage,
    PrivacyPage,
    TermsAndConditionsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(SpdrApp),
    ChartsModule,
    FinancialAPIModule,
    PdfViewerModule,
    DirectivesModule,
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    SpdrApp,
    AboutPage,
    ContactPage,
    ChartsPage,
    TrackerPage,
    EducationPage,
    WatchlistPage,
    OverviewPage,
    SearchPage,
    SummaryPage,
    TabsPage,
    NotificationsPage,
    LoginPage,
    DetailPage,
    FundPropertiesPage,
    DocumentViewPage,
    AllFundsPerformancePage,
    HowToPurchasePage,
    DisclaimersAndRisksPage,
    PrivacyPage,
    TermsAndConditionsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AppVersion,
    TapticEngine,
    Network,
//    ThreeDeeTouch,
    Push,
    NativeStorage,
    HTTP,
    Keyboard,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ChartService,
    HttpAngularProvider,
    HttpNativeProvider,
    SectorSpdrService
  ]
})
export class AppModule {}
