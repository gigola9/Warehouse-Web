import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DictionariesService } from '../services/dictionaries.service';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  categoryDictionary!: any;
  product!: FormGroup;

  constructor(
    private dictionariesService: DictionariesService,
    private router: Router,
    private mainService: MainService) { }

  ngOnInit(): void {
    this.dictionariesService.getCategorytDictionary().subscribe((m) => {
      console.log(m);
      this.categoryDictionary = m;
    });

    this.product =  new FormGroup({
      name: new FormControl({ value: '', disabled: false }, Validators.required),
      category: new FormControl({ value: '', disabled: false }, Validators.required),
      giver: new FormControl(),
      code: new FormControl({ value: null, disabled: false }, Validators.required),
      description: new FormControl()
    });
  }

  addProduct() {
    console.log(this.product.getRawValue());
    this.mainService.addProduct(this.product.getRawValue()).subscribe(m => {
      console.log(m);
    })
  }

  goBack() {
    this.router.navigateByUrl('/');
  }
}
