import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProgramComponent } from './program/program.component';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';
import { OverviewComponent } from './program/overview/overview.component';
import { HistoryComponent } from './program/history/history.component';
import { ReplicationsComponent } from './program/replications/replications.component';
import { FathersComponent } from './program/fathers/fathers.component';
import { InternationalComponent } from './program/international/international.component';
import { LiteracyComponent } from './program/literacy/literacy.component';
import { BeginningsComponent } from './program/history/beginnings/beginnings.component';
import { ChddComponent } from './program/history/chdd/chdd.component';
import { ModelsComponent } from './program/history/models/models.component';
import { PreschoolComponent } from './program/history/preschool/preschool.component';
import { SautComponent } from './program/history/saut/saut.component';
import { FathersstoryComponent } from './program/fathers/fathersstory/fathersstory.component';
import { MeyerschellComponent } from './program/fathers/meyerschell/meyerschell.component';
import { SefambgComponent } from './program/fathers/sefambg/sefambg.component';
import { SibstoriesComponent } from './program/fathers/sibstories/sibstories.component';
import { AustraliaComponent } from './program/international/australia/australia.component';
import { SaudiarabiaComponent } from './program/international/saudiarabia/saudiarabia.component';
import { SpainComponent } from './program/international/spain/spain.component';
import { ChicagoComponent } from './program/literacy/chicago/chicago.component';
import { IrvineComponent } from './program/literacy/irvine/irvine.component';
import { RecollectionsComponent } from './program/literacy/recollections/recollections.component';
import { SooregonComponent } from './program/literacy/sooregon/sooregon.component';
import { FirstreplicationComponent } from './program/replications/firstreplication/firstreplication.component';
import { KidsComponent } from './program/replications/kids/kids.component';
import { PrideschoolComponent } from './program/replications/prideschool/prideschool.component';
import { JeffComponent } from './students/jeff/jeff.component';
import { ChristyComponent } from './students/christy/christy.component';
import { LupitaComponent } from './students/lupita/lupita.component';
import { PatrickComponent } from './students/patrick/patrick.component';
import { AaronComponent } from './students/aaron/aaron.component';
import { MarthaComponent } from './students/martha/martha.component';
import { KariComponent } from './students/kari/kari.component';
import { AlisonComponent } from './students/alison/alison.component';
import { MelindaComponent } from './students/melinda/melinda.component';
import { GlennComponent } from './students/glenn/glenn.component';
import { BronwynComponent } from './students/bronwyn/bronwyn.component';
import { DennisComponent } from './students/dennis/dennis.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProgramComponent,
    HomeComponent,
    StudentsComponent,
    OverviewComponent,
    HistoryComponent,
    ReplicationsComponent,
    FathersComponent,
    InternationalComponent,
    LiteracyComponent,
    BeginningsComponent,
    ChddComponent,
    ModelsComponent,
    PreschoolComponent,
    SautComponent,
    FathersstoryComponent,
    MeyerschellComponent,
    SefambgComponent,
    SibstoriesComponent,
    AustraliaComponent,
    SaudiarabiaComponent,
    SpainComponent,
    ChicagoComponent,
    IrvineComponent,
    RecollectionsComponent,
    SooregonComponent,
    FirstreplicationComponent,
    KidsComponent,
    PrideschoolComponent,
    JeffComponent,
    ChristyComponent,
    LupitaComponent,
    PatrickComponent,
    AaronComponent,
    MarthaComponent,
    KariComponent,
    AlisonComponent,
    MelindaComponent,
    GlennComponent,
    BronwynComponent,
    DennisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
