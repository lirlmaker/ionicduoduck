import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-codigoqr',
  templateUrl: './codigoqr.page.html',
  styleUrls: ['./codigoqr.page.scss'],
})
export class CodigoqrPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}




/*import { Component, VERSION, OnInit, ViewChild } from '@angular/core';

import { ZXingScannerComponent } from '@zxing/ngx-scanner';

import { Result } from '@zxing/library';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngVersion = VERSION.full;

  @ViewChild('scanner')
  scanner: ZXingScannerComponent;

  hasDevices: boolean;
  hasPermission: boolean;
  qrResultString: string;
  qrResult: Result;

  availableDevices: MediaDeviceInfo[];
  currentDevice: MediaDeviceInfo;

  ngOnInit(): void {

    this.scanner.camerasFound.subscribe((devices: MediaDeviceInfo[]) => {
      this.hasDevices = true;
      this.availableDevices = devices;

      // selects the devices's back camera by default
      for (const device of devices) {
          if (/back|rear|environment/gi.test(device.label)) {
              this.scanner.changeDevice(device);
              this.currentDevice = device;
              break;
          }
      }
    });

    this.scanner.camerasNotFound.subscribe(() => this.hasDevices = false);
    this.scanner.scanComplete.subscribe((result: Result) => this.qrResult = result);
    this.scanner.permissionResponse.subscribe((perm: boolean) => this.hasPermission = perm);
  }

  handleQrCodeResult(resultString: string) {
    console.debug('Result: ', resultString);
    const final_value = JSON.parse(resultString)
    this.qrResultString = 'name: ' + final_value.name + ' age: ' + final_value.age;
  }

}*/
