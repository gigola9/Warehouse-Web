import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DictionariesService } from '../../services/dictionaries.service';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  categoryDictionary!: any;
  product!: FormGroup;
  isAdmin = false;
  prList!: any[];

  constructor(
    private dictionariesService: DictionariesService,
    private router: Router,
    private route: ActivatedRoute,
    private mainService: MainService) { }

  ngOnInit(): void {
    this.route.data.subscribe(m => {
      this.isAdmin = m.admin
    });

    this.dictionariesService.getPendingProductDictionary().subscribe((m: any) => {
      this.prList = m;
    })

    this.dictionariesService.getCategorytDictionary().subscribe((m) => {
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
