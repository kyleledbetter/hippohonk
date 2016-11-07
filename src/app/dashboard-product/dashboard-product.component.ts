import { Component, AfterViewInit } from '@angular/core';

import { Title }     from '@angular/platform-browser';

import { BandsService } from '../../services';

@Component({
  selector: 'dashboard-product',
  templateUrl: 'dashboard-product.component.html',
  styleUrls: ['dashboard-product.component.scss'],
  viewProviders: [ BandsService ],
})
export class DashboardProductComponent implements AfterViewInit {

  bands: Object[];
  title: string;

  constructor(private _bandsService: BandsService,
              private _titleService: Title) {}

  ngAfterViewInit(): void {
    this._titleService.setTitle( 'Product Dashboard' );
    this.title = this._titleService.getTitle();

    this._bandsService.query().subscribe((bands: Object[]) => {
      this.bands = bands;
    });
  }
}
