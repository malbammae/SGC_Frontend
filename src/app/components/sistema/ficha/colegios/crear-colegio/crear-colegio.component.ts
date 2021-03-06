import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

import { ColegiosService } from '../../../../../services/sistema/ficha/colegios.service';
import { DpaService } from '../../../../../services/sistema/dpa.service';

@Component({
  selector: 'app-crear-colegio',
  templateUrl: 'crear-colegio.component.html',
  styleUrls: ['crear-colegio.component.css']
})
export class CrearColegioComponent implements OnInit {
  @ViewChild('modal')
  modal: ModalComponent;

  colegio: any;

  regiones = [];
  provincias = [];
  comunas = [];

  selectedRegion: any;
  selectedProvincia: any;
  selectedComuna: any;

  constructor(
      private location: Location,
      private colegiosService: ColegiosService,
      private dpaService: DpaService,
  ) { }

  ngOnInit() {
    this.colegio = {
    'id': null,
    nombre: '',
    direccion: '',
    numeracion: '',
    region: '',
    provincia: '',
    localidad: '',
    comuna: '',
    depto_prov: '',
    telefono: '',
    mail: '',
    web: '',
    director: '',
    sostenedor: '',
    rbd: '',
    dependencia: '',
    };
    this.dpaService.getRegiones().subscribe(res => {
      this.regiones = res;
    });
  }

  setRegion(region: string){
    this.colegio.provincia = '';
    this.colegio.comuna = '';
    this.selectedRegion = this.regiones.find(reg => reg.nombre == region);
    this.dpaService.getProvinciasByRegionId(this.selectedRegion.id).subscribe(res => {
      this.provincias = res;
    });
  };

  setProvincia(provincia: string){
    this.colegio.comuna = '';
    this.selectedProvincia = this.provincias.find(prov => prov.nombre == provincia);
    this.dpaService.getComunasByProvinciaIdRegionId(this.selectedProvincia.id).subscribe(res => {
      this.comunas = res;
    });
  };

  setComuna(comuna: string){
    this.selectedComuna = this.comunas.find(com => com.nombre == comuna);
  }

  goBack(): void {
    this.location.back();
  }

  modalOpen(): void {
    this.modal.open();
  }

  modalClose(): void {
    this.modal.close();
    this.goBack();
  }

  saveColegio(): void {
    this.colegiosService.createColegio(this.colegio).subscribe(res => {
      this.colegio = res;
      this.modalOpen();
    });
  }

}
