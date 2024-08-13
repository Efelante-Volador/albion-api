import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent} from './vistas/login/login.component';
import { LobbyComponent} from './vistas/lobby/lobby.component';
import { ExampleComponent} from './vistas/example/example.component';


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