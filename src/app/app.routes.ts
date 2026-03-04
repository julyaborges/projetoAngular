import { Routes } from '@angular/router';
import { UserList } from './pages/user-list/user-list';
import { UserDetail } from './pages/user-detail/user-detail';

export const routes: Routes = [
  {
    path: 'user',
    component: UserList
  },
  {
    path: 'user-detail/:id', // Rota para acessar as informações de cada Usuário
    component: UserDetail
  },
  {
    path: "",
    redirectTo: '/user',
    pathMatch: 'full'
  }
];
