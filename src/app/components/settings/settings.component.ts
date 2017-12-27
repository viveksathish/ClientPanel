import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Settings } from '../../models/Settings';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  settings: Settings;
  constructor(
    public flashMessagesService: FlashMessagesService,
    public router: Router,
    public settingsServices: SettingsService
  ) { }

  ngOnInit() {
    this.settings = this.settingsServices.getSettings();
  }

  onSubmit() {
    this.settingsServices.changeSettings(this.settings);
    this.flashMessagesService.show('Settings Saved', {cssClass: 'alert-success', timeout: 4000});
    this.router.navigate(['/settings']);
  }

}
