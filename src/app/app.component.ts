import { Component, OnInit } from '@angular/core';
import { AzureAppConfigurationService } from './azure-app-configuration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Azure App Configuration に Angular からアクセスして接続文字列を環境により変動させるサンプル'
  constructor(private _service: AzureAppConfigurationService) {}

  ngOnInit(): void {
      this._service.getHogeHoge().subscribe(res => alert(res));
  }
}
