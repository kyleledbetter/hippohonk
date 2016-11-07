import { Component, AfterViewInit } from '@angular/core';

import { Title }     from '@angular/platform-browser';

import { TdLoadingService } from '@covalent/core';

import { BandsService, ItemsService, UsersService, ProductsService, AlertsService } from '../../services';

@Component({
  selector: 'covalent-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss'],
  viewProviders: [ BandsService, ItemsService, UsersService, ProductsService, AlertsService ],
})
export class DashboardComponent implements AfterViewInit {

  festivals: any[] = [
    {
      name: 'Sound on Sound Fest 2016',
      icon: 'soundonsound',
      type: 'blue-A700',
      background: 'pink-100',
    }, {
      name: 'SXSW 2017',
      icon: 'sxsw',
      type: 'pink-A400',
      background: 'purple-600',
    }, {
      name: 'ACL Fest 2017',
      icon: 'acl',
      type: 'light-green-200',
      background: 'teal-700',
    }, {
      name: 'FunFunFun Fest 2017',
      icon: 'funfunfun',
      type: 'cyan-A400',
      background: 'deep-orange-600',
    },
  ];

  items: Object[];
  users: Object[];
  products: Object[];
  alerts: Object[];
  bands: Object[];

  constructor(private _titleService: Title,
              private _itemsService: ItemsService,
              private _bandsService: BandsService,
              private _usersService: UsersService,
              private _alertsService: AlertsService,
              private _productsService: ProductsService,
              private _loadingService: TdLoadingService) {}

  ngAfterViewInit(): void {
    this._titleService.setTitle( 'Covalent Quickstart' );

    this._loadingService.register('items.load');
    this._itemsService.query().subscribe((items: Object[]) => {
      this.items = items;
      setTimeout(() => {
        this._loadingService.resolve('items.load');
      }, 750);
    }, (error: Error) => {
      this._itemsService.staticQuery().subscribe((items: Object[]) => {
        this.items = items;
        setTimeout(() => {
          this._loadingService.resolve('items.load');
        }, 750);
      });
    });
    this._loadingService.register('bands.load');
    this._bandsService.query().subscribe((bands: Object[]) => {
      this.bands = bands;
      setTimeout(() => {
        this._loadingService.resolve('bands.load');
      }, 750);
    });
    this._loadingService.register('alerts.load');
    this._alertsService.query().subscribe((alerts: Object[]) => {
      this.alerts = alerts;
      setTimeout(() => {
        this._loadingService.resolve('alerts.load');
      }, 750);
    });
    this._loadingService.register('products.load');
    this._productsService.query().subscribe((products: Object[]) => {
      this.products = products;
      setTimeout(() => {
        this._loadingService.resolve('products.load');
      }, 750);
    });
    this._loadingService.register('favorites.load');
    this._productsService.query().subscribe((products: Object[]) => {
      this.products = products;
      setTimeout(() => {
        this._loadingService.resolve('favorites.load');
      }, 750);
    });
    this._loadingService.register('users.load');
    this._usersService.query().subscribe((users: Object[]) => {
      this.users = users;
      setTimeout(() => {
        this._loadingService.resolve('users.load');
      }, 750);
    }, (error: Error) => {
      this._usersService.staticQuery().subscribe((users: Object[]) => {
        this.users = users;
        setTimeout(() => {
          this._loadingService.resolve('users.load');
        }, 750);
      });
    });
  }
}
