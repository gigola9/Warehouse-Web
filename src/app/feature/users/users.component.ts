import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DictionariesService } from '../services/dictionaries.service';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  warehouses: any;
  users: any;
  curList!: any[];

  totalLength!: number;
  pages!: number;
  page: number = 1;
  sul = 0;

  user = new FormGroup({
    name: new FormControl({ value: '', disabled: false }, Validators.required),
    password: new FormControl({ value: '', disabled: false }, Validators.required),
    role: new FormControl({ value: '', disabled: false }, Validators.required),
    warehouse: new FormControl({ value: '', disabled: false }, Validators.required)
  });

  constructor(
    private router: Router,
    private dictionariesService: DictionariesService,
    private mainService: MainService) { }

  ngOnInit(): void {
    this.dictionariesService.getWarehouseDictionary().subscribe(m => {
      this.warehouses = m;
    });

    this.dictionariesService.getUserDictionary().subscribe((m: any[]) => {
      m.forEach(item => {
        item.edit = false;
      });
      this.users = m;
      this.curList = this.users.slice(0, 10);
      this.totalLength = this.users.length;
      this.pages = this.totalLength / 10;
    });
  }

  saveUser(usr: string) {
    let ob: any = {
      name: '',
      password: '',
      role: '',
      warehouse: '',
      id: 0
    };
    console.log(this.curList);

    this.curList.forEach(element => {
      if (element.name === usr) {
        console.log(usr);
        ob.name = element.name;
        ob.password = element.password;
        ob.role = element.role;
        ob.warehouse = element.warehouse;
        ob.id = element.id
      }
      element.edit = false;
    });
    this.mainService.editUser(ob).subscribe();
  }

  passCnv(ps: string) {
    let rs = '';
    for (let i = 0; i < ps.length; i++) {
      rs = rs + '*';
    }
    return rs;
  }

  changePage(e: any) {
    this.page = e;
    this.curList = this.users.slice(10 * (e - 1), (10 * (e - 1)) + 10);
  }

  addUser() {
    this.mainService.addUser(this.user.getRawValue()).subscribe();
  }

  goBack() {
    this.router.navigateByUrl('/');
  }

}
