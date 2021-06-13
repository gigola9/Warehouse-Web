import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DictionariesService } from '../../services/dictionaries.service';
import { MainService } from '../../services/main.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.scss']
})
export class ImportComponent implements OnInit {

  productDictionary!: any;
  product!: FormGroup;

  constructor(
    private dictionariesService: DictionariesService,
    private router: Router,
    private datePipe: DatePipe,
    private mainService: MainService) { }

  ngOnInit(): void {
    this.dictionariesService.getProductDictionary().subscribe((m) => {
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
    console.log(this.product.getRawValue());
    this.mainService.importProduct(this.product.getRawValue()).subscribe(m => {
      console.log(m);
    });
  }

  goBack() {
    this.router.navigateByUrl('/');
  }
}
