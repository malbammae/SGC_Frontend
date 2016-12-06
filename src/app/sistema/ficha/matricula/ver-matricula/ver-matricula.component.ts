import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location }       from '@angular/common';

import { Matricula } from '../matricula';
import { MatriculaService } from '../../matricula.service';

@Component({
  selector: 'app-ver-matricula',
  templateUrl: './ver-matricula.component.html',
  styleUrls: ['./ver-matricula.component.css']
})
export class VerMatriculaComponent implements OnInit {

  id: number;
  private sub: any;

  matricula: Matricula;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private matriculaService: MatriculaService,
  ) { }

  ngOnInit() {
    this.matricula = new Matricula();

    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });

    this.route.params
      .switchMap((params: Params) => this.matriculaService.getMatricula(+params['id']))
      .subscribe((matricula) => {
        this.matricula = matricula;
      });
  }

  goBack(): void {
    this.location.back();
  }

  goToEdit(id: number){
    this.router.navigate(['sistema/ficha/matricula/editar-matricula',id],{relativeTo: this.route.parent});

  }

  deleteMatricula(): void {
    this.matriculaService.deleteMatricula(this.matricula.id).subscribe(()=>{
      this.goBack();
    });
  }

}