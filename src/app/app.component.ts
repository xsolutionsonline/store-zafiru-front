import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  constructor(private translate: TranslateService) {}
  ngOnInit(): void {
    this.initTranslate();
  }
  
  async initTranslate() {
    this.translate.setDefaultLang('en');
    this.translate.use(this.translate.getBrowserLang()  || 'en');
  }
}
