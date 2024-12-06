import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { GamesComponent } from './pages/games/games.component';
import { GetItBackComponent } from './pages/get-it-back/get-it-back.component';
import { MemoSeaComponent } from './pages/memo-sea/memo-sea.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'games', component: GamesComponent },
    { path: 'get-it-back', component: GetItBackComponent },
    { path : 'memo-sea', component: MemoSeaComponent },
    { path: '**', redirectTo: 'home' },
];
