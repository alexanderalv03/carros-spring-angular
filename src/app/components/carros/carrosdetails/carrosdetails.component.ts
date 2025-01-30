import { Component, EventEmitter, inject, Input, NgModule, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Carro } from '../../../models/carro';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2'
import { CarroService } from '../../../services/carro.service';

@Component({
  selector: 'app-carrosdetails',
  standalone: true,
  imports: [MdbFormsModule, FormsModule],
  templateUrl: './carrosdetails.component.html',
  styleUrl: './carrosdetails.component.scss'
})
export class CarrosdetailsComponent {

  router = inject(ActivatedRoute);
  router2 = inject(Router);

  carroService = inject(CarroService);

  constructor(){
    let id = this.router.snapshot.params["id"];
    if(id>0){
      this.findById(id);
    }

  }

  findById(id: number){

    this.carroService.findById(id).subscribe({
      next: retorno => {
        this.carro = retorno;

      },
      error: erro =>{


         Swal.fire({
                  title: 'ocorreu um ero',
        
                  icon: 'error',
                  confirmButtonText: 'Ok'
                })

      }
      
    });
   
  }

  @Input("carro") carro: Carro = new Carro(0, "");
  @Output("retorno") retorno = new EventEmitter<any>();


  save(){
    if(this.carro.id > 0){


      this.carroService.findById(id).subscribe({
        next: retorno => {
  
        },
        error: erro =>{

           Swal.fire({
                    title: 'ocorreu um ero',
          
                    icon: 'error',
                    confirmButtonText: 'Ok'
                  })
  
        }
        
      });


      Swal.fire({
        title: 'sucesso',
        text: 'editado com sucesso',
        icon: 'success',
        confirmButtonText: 'Ok'
      });

    this.router2.navigate(['admin/carros'],  {state: {carroEditado: this.carro}});


    }else{

      this.carroService.findById(id).subscribe({
        next: retorno => {
  
        },
        error: erro =>{

           Swal.fire({
                    title: 'ocorreu um ero',
          
                    icon: 'error',
                    confirmButtonText: 'Ok'
                  })
  
        }
        
      });


      Swal.fire({
        title: 'sucesso',
        text: 'salvo',
        icon: 'success',
        confirmButtonText: 'Ok'
      });
    this.router2.navigate(['admin/carros'], {state: {carroNovo: this.carro}});
  }


  this.retorno.emit(this.carro);
}

}
