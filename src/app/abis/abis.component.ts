import { Component } from '@angular/core';
import { AbiManager } from '../abi-manager.service';

@Component({
  selector: 'app-abis',
  templateUrl: './abis.component.html',
  styles: [
  ]
})
export class AbisComponent {


  constructor(public manager: AbiManager) {

   }

  create(event: any, name: string, abi:string) {
    event.preventDefault();
    this.manager.abis.push({name,abi});
  }

}
