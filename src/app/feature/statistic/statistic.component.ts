import { Component, OnInit } from '@angular/core';
import { ActivitiesModel } from '../models/ActivitiesModel';
import { DictionariesService } from '../services/dictionaries.service';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent implements OnInit {

  list!: ActivitiesModel[];
  oldList!: ActivitiesModel[];
  curList!: ActivitiesModel[];
  st: any;
  pr: any;

  totalLength!: number;
  pages!: number;
  page: number = 1;
  sul = 0;

  constructor(private dictionariesService: DictionariesService) { }

  ngOnInit(): void {
    this.dictionariesService.getActivitiyDictionary().subscribe((m: ActivitiesModel[]) => {
      this.list = m;
      this.curList = this.list.slice(0, 10);
      this.totalLength = this.list.length;
      this.pages = this.totalLength / 10;
    });
    this.dictionariesService.getStorageDictionary().subscribe(m => {
      this.st = m;
    });
    this.dictionariesService.getProductDictionary().subscribe(m => {
      this.pr = m;
    })
  }

  changePage(e: any) {
    this.page = e;
    this.curList = this.list.slice(10 * (e - 1), (10 * (e - 1)) + 10);
  }

}
