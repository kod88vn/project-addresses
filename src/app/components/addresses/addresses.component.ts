import { element } from 'protractor';
import { Component, OnInit, AfterViewInit, ViewChild, ViewChildren, Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { merge } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { orderBy } from 'lodash';
import { AddressesService } from 'src/app/services/addresses.service';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.styl'],
  providers: [AddressesService]
})
export class AddressesComponent implements OnInit, AfterViewInit {
  @Input() addresses: any;
  dataSource: any;
  tableProps : { label: String; prop: String; }[];
  displayedColumns: string[] = ['streetNumber', 'streetName', 'city', 'zipCode', 'state'];
  resultsLength = 0;
  defaultOptions: any;
  foco: any;
  changes: any = {};
  arrayChanges = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChildren('input') inputs;

  constructor(private addressesService: AddressesService) { }

  ngOnInit() {
    this.resultsLength = this.addresses.length;
    this.defaultOptions = {
      data: this.addresses,
      page: 0,
      pageSize: 10,
      sort: 'city',
      sortOrder: 'desc'
    }
    this.dataSource = this.getData({ data: this.addresses, ...this.defaultOptions });
    this.tableProps = [
      {
        label: 'No.',
        prop: 'streetNumber'
      },
      {
        label: 'Name',
        prop: 'streetName'
      },
      {
        label: 'City',
        prop: 'city'
      },
      {
        label: 'Zip Code',
        prop: 'zipCode'
      },
      {
        label: 'State',
        prop: 'state'
      },
    ]
  }

  ngAfterViewInit() {
    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(startWith(null))
      .subscribe(() => {
        this.dataSource = this.getData({
          ...this.defaultOptions,
          page: this.paginator.pageIndex,
          pageSize: this.paginator.pageSize,
          sort: this.sort.active,
          sortOrder: this.sort.direction
         });
      });
  }

  getData({data, page, pageSize, sort, sortOrder}) {
    return orderBy(data || [], sort, sortOrder).splice(page, pageSize);
  }

  onClick(row, field, element) {
    this.foco = {row, field, oldValues:{...element}};
    setTimeout(() => {
      this.inputs.first.nativeElement.focus();
    });
  }

  onFocusOut(element, field) {
    // it's best to save in batch so these lines below prepare for that
    if (this.foco.oldValues[field] !== element[field]) {
      this.changes[element.id] = element;
    }
    this.arrayChanges = Object.keys(this.changes).map(i => this.changes[i]);
    this.foco = null;
    this.addressesService.saveAddress(element)
  }
}
