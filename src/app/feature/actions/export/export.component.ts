import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DictionariesService } from '../../services/dictionaries.service';
import { MainService } from '../../services/main.service';
import { NotificationsService } from '../../services/notifications.service';

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.scss']
})
export class ExportComponent implements OnInit {

  productDictionary!: any;
  product!: FormGroup;
  maxAmount: number = -1;

  constructor(
    private dictionariesService: DictionariesService,
    private router: Router,
    private datePipe: DatePipe,
    private notificationsService: NotificationsService,
    private mainService: MainService) { }

  ngOnInit(): void {
    this.dictionariesService.getStorageDictionary().subscribe((m) => {
      this.productDictionary = m;
    });

    this.product =  new FormGroup({
      user: new FormControl({ value: this.mainService.getUser(), disabled: true }),
      name: new FormControl({ value: '', disabled: false }, Validators.required),
      date: new FormControl({ value: this.datePipe.transform(new Date(), 'MM/dd/yyyy'), disabled: true }),
      giver: new FormControl({ value: '', disabled: false }, Validators.required),
      amount: new FormControl({ value: 0, disabled: false}, Validators.required),
      description: new FormControl()
    });
  }

  import() {
    this.mainService.exportProduct(this.product.getRawValue()).subscribe(m => {
      this.notificationsService.show();
    });
  }

  changeDropdown() {
    const vl = this.product.controls.name.value;
    this.maxAmount = this.productDictionary.filter((m: any): any => {
      return m.name == vl;
    })[0].amount;

    if (this.product.controls.amount.value > this.maxAmount) {
      this.product.controls.amount.setValue(this.maxAmount);
    }
  }

  amountChange() {
    if (this.product.controls.amount.value > this.maxAmount) {
      this.product.controls.amount.setValue(this.maxAmount);
    }
  }

  goBack() {
    this.router.navigateByUrl('/');
  }
}
