import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent} from './views/login/login.component';
import { LobbyComponent} from './views/lobby/lobby.component';
import { ExampleComponent} from './views/example/example.component';


import { NgModule } from '@angular/core';
export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent },
    {path: 'login', component: LoginComponent},
    {path: 'lobby', component: LobbyComponent},
    {path: 'example', component: ExampleComponent},
    {path: '**', redirectTo: '/home' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}