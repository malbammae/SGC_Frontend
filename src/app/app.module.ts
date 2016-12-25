import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import './rxjs-extensions';

import { FilterCursoProf } from './pipes/filter-curso-prof.pipe';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent } from './app.component';
import { RootComponent } from './root.component';
import { LoginComponent } from './login/login.component';

import { DashboardComponent } from './dashboard/dashboard.component';

import { ColegiosComponent } from './sistema/ficha/colegios/colegios.component';
import { CrearColegioComponent } from './sistema/ficha/colegios/crear-colegio/crear-colegio.component';
import { EditarColegioComponent } from './sistema/ficha/colegios/editar-colegio/editar-colegio.component';

import { MatriculaComponent } from './sistema/ficha/matricula/matricula.component';
import { CrearMatriculaComponent } from './sistema/ficha/matricula/crear-matricula/crear-matricula.component';
import { EditarMatriculaComponent } from './sistema/ficha/matricula/editar-matricula/editar-matricula.component';

import { ColegiosService } from './services/sistema/ficha/colegios.service';
import { MatriculaService } from "./services/sistema/ficha/matricula.service";
import { VerColegioComponent } from './sistema/ficha/colegios/ver-colegio/ver-colegio.component';
import { VerMatriculaComponent } from './sistema/ficha/matricula/ver-matricula/ver-matricula.component';

import { CursosComponent } from './libros/cursos/cursos.component';
import { CrearCursoComponent } from './libros/cursos/crear-curso/crear-curso.component';
import { VerCursoComponent } from './libros/cursos/ver-curso/ver-curso.component';
import { ModificarCursoComponent } from './libros/cursos/modificar-curso/modificar-curso.component';
import { CursoDetailComponent } from './libros/cursos/curso-detail/curso-detail.component';
import { CursoNotasComponent } from './libros/cursos/curso-notas/curso-notas.component';
import { CursoListaComponent } from './libros/cursos/curso-lista/curso-lista.component';
import { CursoAsistenciaComponent } from './libros/cursos/curso-asistencia/curso-asistencia.component';
import { CursoAnotacionesComponent } from './libros/cursos/curso-anotaciones/curso-anotaciones.component';

import { AsignarProfComponent } from './libros/cursos/asignar-prof/asignar-prof.component';

import { ProfesorComponent } from './libros/profesor/profesor.component';
import { CrearProfesorComponent } from './libros/profesor/crear-profesor/crear-profesor.component';
import {CursosService} from "./services/libros/cursos.service";
import {ProfesoresService} from "./services/libros/profesores.service";
import {AsignaturasService} from "./services/libros/asignaturas.service";
import { ColegioDetailComponent } from './sistema/ficha/colegios/colegio-detail/colegio-detail.component';
import { MatriculaDetailComponent } from './sistema/ficha/matricula/matricula-detail/matricula-detail.component';


@NgModule({
  declarations: [
    RootComponent,

    AppComponent,
    LoginComponent,

    DashboardComponent,
    ColegiosComponent,
    CrearColegioComponent,
    EditarColegioComponent,
    MatriculaComponent,
    CrearMatriculaComponent,
    EditarMatriculaComponent,
    VerColegioComponent,
    VerMatriculaComponent,
    CursosComponent,
    CrearCursoComponent,
    VerCursoComponent,
    ModificarCursoComponent,
    ProfesorComponent,
    CrearProfesorComponent,
    FilterCursoProf,
    AsignarProfComponent,
    ColegioDetailComponent,
    MatriculaDetailComponent,
    CursoDetailComponent,
    CursoNotasComponent,
    CursoListaComponent,
    CursoAsistenciaComponent,
    CursoAnotacionesComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    Ng2Bs3ModalModule
  ],
  providers: [
    ColegiosService,
    MatriculaService,
    CursosService,
    ProfesoresService,
    AsignaturasService,
  ],
  bootstrap: [RootComponent]
})
export class AppModule { }
