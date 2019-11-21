import { Component, OnInit } from '@angular/core';

import { AddressesService } from "@app/services/addresses.service";


@Component({
  selector: 'app-addresses-page',
  templateUrl: './addresses.page.html',
  styleUrls: ['./addresses.page.styl'],
  providers: [AddressesService]
})
export class AddressesPage implements OnInit {
  constructor(private addressesService: AddressesService) { }
  addresses: any;
  title = 'addresses';

  async ngOnInit() {
    this.addresses = await this.addressesService.getAddresses();
  }

}
