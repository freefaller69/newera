import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProgramComponent } from './program/program.component';
import { OverviewComponent } from './program/overview/overview.component';
import { HistoryComponent } from './program/history/history.component';
import { BeginningsComponent } from './program/history/beginnings/beginnings.component';
import { ChddComponent } from './program/history/chdd/chdd.component';
import { ModelsComponent } from './program/history/models/models.component';
import { PreschoolComponent } from './program/history/preschool/preschool.component';
import { SautComponent } from './program/history/saut/saut.component';
import { ReplicationsComponent } from './program/replications/replications.component';
import { FirstreplicationComponent } from './program/replications/firstreplication/firstreplication.component';
import { KidsComponent } from './program/replications/kids/kids.component';
import { PrideschoolComponent } from './program/replications/prideschool/prideschool.component';
import { FathersComponent } from './program/fathers/fathers.component';
import { FathersstoryComponent } from './program/fathers/fathersstory/fathersstory.component';
import { MeyerschellComponent } from './program/fathers/meyerschell/meyerschell.component';
import { SefambgComponent } from './program/fathers/sefambg/sefambg.component';
import { SibstoriesComponent } from './program/fathers/sibstories/sibstories.component';
import { LiteracyComponent } from './program/literacy/literacy.component';
import { RecollectionsComponent } from './program/literacy/recollections/recollections.component';
import { ChicagoComponent } from './program/literacy/chicago/chicago.component';
import { IrvineComponent } from './program/literacy/irvine/irvine.component';
import { SooregonComponent } from './program/literacy/sooregon/sooregon.component';
import { InternationalComponent } from './program/international/international.component';
import { AustraliaComponent } from './program/international/australia/australia.component';
import { SaudiarabiaComponent } from './program/international/saudiarabia/saudiarabia.component';
import { SpainComponent } from './program/international/spain/spain.component';

import { StudentsComponent } from './students/students.component';
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

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'program', component: ProgramComponent, children: [
    { path: 'overview', component: OverviewComponent },
    { path: 'history', component: HistoryComponent, children: [
      { path: 'beginnings', component: BeginningsComponent },
      { path: 'models', component: ModelsComponent },
      { path: 'preschool', component: PreschoolComponent },
      { path: 'chdd', component: ChddComponent },
      { path: 'saut', component: SautComponent },
      { path: '', redirectTo: 'beginnings', pathMatch: 'full' }
    ] },
    { path: 'replications', component: ReplicationsComponent, children: [
      { path: 'firstreplication', component: FirstreplicationComponent },
      { path: 'prideschool', component: PrideschoolComponent },
      { path: 'kids', component: KidsComponent },
      { path: '', redirectTo: 'firstreplication', pathMatch: 'full' }
    ] },
    { path: 'fathers', component: FathersComponent, children: [
      { path: 'sefambg', component: SefambgComponent },
      { path: 'meyerschell', component: MeyerschellComponent },
      { path: 'fathersstory', component: FathersstoryComponent },
      { path: 'sibstories', component: SibstoriesComponent },
      { path: '', redirectTo: 'sefambg', pathMatch: 'full' }
    ] },
    { path: 'literacy', component: LiteracyComponent, children: [
      { path: 'recollections', component: RecollectionsComponent },
      { path: 'chicago', component: ChicagoComponent },
      { path: 'irvine', component: IrvineComponent },
      { path: 'sooregon', component: SooregonComponent },
      { path: '', redirectTo: 'recollections', pathMatch: 'full' }
    ] },
    { path: 'international', component: InternationalComponent, children: [
      { path: 'australia', component: AustraliaComponent },
      { path: 'saudiarabia', component: SaudiarabiaComponent },
      { path: 'spain', component: SpainComponent },
      { path: '', redirectTo: 'australia', pathMatch: 'full' }
    ] },
    { path: '', redirectTo: 'overview', pathMatch: 'full' },
  ] },
  {
    path: 'students', component: StudentsComponent, children: [
    { path: 'jeff', component: JeffComponent },
    { path: 'christy', component: ChristyComponent },
    { path: 'lupita', component: LupitaComponent },
    { path: 'patrick', component: PatrickComponent },
    { path: 'aaron', component: AaronComponent },
    { path: 'martha', component: MarthaComponent },
    { path: 'kari', component: KariComponent },
    { path: 'alison', component: AlisonComponent },
    { path: 'melinda', component: MelindaComponent },
    { path: 'glenn', component: GlennComponent },
    { path: 'bronwyn', component: BronwynComponent },
    { path: 'dennis', component: DennisComponent },
    { path: '', redirectTo: 'jeff', pathMatch: 'full' }
  ]
  },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
