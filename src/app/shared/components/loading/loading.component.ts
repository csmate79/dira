import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent {
  @HostBinding('class.embedded')
  public isEmbedded = false;
}
