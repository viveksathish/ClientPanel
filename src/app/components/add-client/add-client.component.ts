import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { Client } from '../../models/Client';
import { ClientService } from '../../services/client.service';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  client: Client = {
    firstName : '',
    lastName: '',
    email: '',
    phone: '',
    balance: '0'
  }
  disabledBalanceOnAdd: boolean = false;

  constructor(
    public flashMessagesService: FlashMessagesService,
    public router: Router,
    public clientService: ClientService,
    public settingsService:SettingsService
  ) { }

  ngOnInit() {
    this.disabledBalanceOnAdd =  this.settingsService.getSettings().disableBalanceOnAdd;
  }

  onSubmit({value, valid}: {value: Client, valid: boolean}) {
    if(this.disabledBalanceOnAdd) {
      value.balance = '0';
    }
    if(!valid) {
      this.flashMessagesService.show('Please fill in all the fields', { cssClass:"alert-danger" , timeOut: 4000 })
      this.router.navigate(['add-client']);
    } else {
      this.clientService.newClient(value);
      this.flashMessagesService.show('Added new Client', { cssClass:"alert-success" , timeOut: 4000 })
      this.router.navigate(['/']);
    }

  }

}
