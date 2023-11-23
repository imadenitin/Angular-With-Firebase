import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDataComponent } from './add-data/add-data.component';
import { UpdateDataComponent } from './update-data/update-data.component';
import { MainscreenComponent } from './mainscreen/mainscreen.component';

const routes: Routes = [
  {path:'',redirectTo:'mainscreen',pathMatch:'full'},
  {path:'mainscreen',component:MainscreenComponent},
  {path:'add-data',component:AddDataComponent},
  {path:'update-data/:id',component:UpdateDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
