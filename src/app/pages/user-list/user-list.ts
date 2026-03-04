import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { User } from '../../models/user.interface';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList implements OnInit {

  usuarios: User[] = [];
  carregando: boolean = true;
  erro: boolean = false;

  constructor(private userService: UserService, private cdr:ChangeDetectorRef, private route: ActivatedRoute){}

  ngOnInit() {
    this.userService.listarUsuarios().subscribe({
      next: (data) => {
        this.usuarios = data;
        this.carregando = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.erro = true;
        this.carregando = false;
      }
    });
    }

}
