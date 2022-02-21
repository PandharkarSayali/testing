import{NgModule} from '@angular/core';
import {Routes,RouterModule } from '@angular/router';
import { SearchComponent } from './pages/search/search.component';
import { HomeComponent } from './pages/home/home.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { UsersComponent } from './pages/users/users.component';
import { StatsComponent } from './pages/stats/stats.component';
import { UserlistComponent } from './userlist/userlist.component';

const appRoutes:Routes=[
    /*{path:'search' , component:SearchComponent},
    {path:'home' , component:HomeComponent},
    {path:'stats' , component:StatsComponent},
    {path:'users' , component:UsersComponent},
    {path:'settings' , component:SettingsComponent},*/
    {path:'list' , component:UserlistComponent},
]

@NgModule({
imports:[RouterModule.forRoot(appRoutes)]  ,   
exports:[RouterModule]
})

export class AppRoutingModule{

}