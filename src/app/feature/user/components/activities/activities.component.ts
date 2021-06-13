import { Component, OnInit } from '@angular/core';
import { ActivitiesModel } from 'src/app/shared/models/ActivitiesModel';
import { DictionariesService } from 'src/app/feature/services/dictionaries.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {

  list!: ActivitiesModel[];
  oldList!: ActivitiesModel[];
  curList!: ActivitiesModel[];

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
    })
  }

  changePage(e: any) {
    this.page = e;
    this.curList = this.list.slice(10 * (e - 1), (10 * (e - 1)) + 10);
  }
}
