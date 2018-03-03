import { Component, OnInit } from '@angular/core';
import { LumberCategoryService } from '../../services/lumber-category.service';
import { LumberSubCategoryService } from '../../services/lumber-sub-category.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  constructor(private lumberCategoryService: LumberCategoryService, private lumberSubCategoryService:
    LumberSubCategoryService) { }

  ngOnInit() {
  }
}
