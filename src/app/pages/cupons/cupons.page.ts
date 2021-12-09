import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CuponsService } from '../../services/cupons.service';
import * as moment from 'moment';

@Component({
  selector: 'app-cupons',
  templateUrl: './cupons.page.html',
  styleUrls: ['./cupons.page.scss'],
})
export class CuponsPage implements OnInit {
  cupons: Observable<any[]>;
  momentjs: any = moment;
  

  constructor(private cuponsService: CuponsService) {}

  ngOnInit() {
    this.cupons = this.cuponsService.getCupons();
  }

}
