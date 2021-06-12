import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DictionariesService } from '../services/dictionaries.service';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-warehouses',
  templateUrl: './warehouses.component.html',
  styleUrls: ['./warehouses.component.scss']
})
export class WarehousesComponent implements OnInit {

  categoryDictionary!: any;
  wareh!: FormGroup;
  isAdmin = false;
  wrList!: any[];

  constructor(
    private dictionariesService: DictionariesService,
    private router: Router,
    private mainService: MainService) { }

  ngOnInit(): void {

    this.dictionariesService.getWarehouseDictionary().subscribe((m: any) => {
      this.wrList = m;
    })

    this.dictionariesService.getCategorytDictionary().subscribe((m) => {
      this.categoryDictionary = m;
    });

    this.wareh =  new FormGroup({
      name: new FormControl({ value: '', disabled: false }, Validators.required),
      address: new FormControl({ value: '', disabled: false }, Validators.required),
      number: new FormControl({ value: '', disabled: false }, Validators.required)
    });
  }

  addWarehouse() {
    this.mainService.addWarehosue(this.wareh.getRawValue()).subscribe((m) => {
      this.wareh.reset();
    });
  }

  conf(nm: string) {
    const obj = {
      name: nm,
      status: 'accept'
    };
    this.mainService.manageProduct(obj).subscribe();
  }

  dec(nm: string) {
    const obj = {
      name: nm,
      status: 'reject'
    };
    this.mainService.manageProduct(obj).subscribe();
  }

  goBack() {
    this.router.navigateByUrl('/');
  }
}
