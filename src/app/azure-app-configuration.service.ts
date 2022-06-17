import { Injectable } from '@angular/core';
import { AppConfigurationClient } from '@azure/app-configuration';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AzureAppConfigurationService {
  apiEndpoint: string = '';

  constructor(private _httpClient: HttpClient) {
    this.connectAzureAppConfigAndSetApiEndpoint();
  }

  async connectAzureAppConfigAndSetApiEndpoint() {
    const client = new AppConfigurationClient(environment.azureAppConfigurationSetting.connectionString);
    const setting = await client.getConfigurationSetting({ key: environment.azureAppConfigurationSetting.apiEndpointKey });
    this.apiEndpoint = setting.value ?? '';
  }

  getHogeHoge(): Observable<any> {
    return this._httpClient.get(this.apiEndpoint);
  }
}
