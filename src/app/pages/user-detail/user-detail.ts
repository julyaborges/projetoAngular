import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.interface';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.html',
  styleUrl: './user-detail.css',
})
export class UserDetail implements OnInit {

  usuario!: User
  usuarioNaoEncontrado: boolean = false;

  constructor(private route: ActivatedRoute, private userService: UserService, private cdr:ChangeDetectorRef){}

  ngOnInit(){
    this.carregarUsuario();
  }

  carregarUsuario(){
    const id = this.route.snapshot.paramMap.get('id');

      if(id){
        this.userService.buscarUsuarioPorId(+id).subscribe({
          next: (dados) => {
            if(!dados) {
              this.usuarioNaoEncontrado = true;
            } else {
              this.usuario = dados;
            }
            this.cdr.detectChanges();
          },
          error: () => {
            this.usuarioNaoEncontrado = true;
            this.cdr.detectChanges();
          }
        });
      }
  }

}
