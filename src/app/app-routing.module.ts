import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WeaponComponent } from './weapon/weapon.component';
import { WeaponDetailComponent } from './weapon-detail/weapon-detail.component';


const routes: Routes = [
    { path: '', redirectTo: '/scenarios', pathMatch: 'full' },
    { path: 'scenarios', component: FrontpageComponent },
    { path: 'scenario/:id', component: DashboardComponent },
    { path: 'weapons', component: WeaponComponent },
    { path: 'detail/:id', component: WeaponDetailComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule { }
