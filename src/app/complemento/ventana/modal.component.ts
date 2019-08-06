import { Component, OnInit } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styles: []
})
export class ModalComponent implements OnInit {


  constructor(
    public _modalUploadService: ModalService
  ) { }

  ngOnInit() {
  }

  cerrarModal() {



    this._modalUploadService.ocultarModal();
  }


}
