import { Component, OnInit } from '@angular/core';
import { LumberCategoryService } from '../../services/lumber-category.service';
import { LumberCategory } from '../../models/lumber-category';
import { RouterService } from '../../services/router.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  lumberCategory: LumberCategory;

  constructor(private lumberCategoryService: LumberCategoryService, private routerService: RouterService) {
  }

  ngOnInit() {
  }
}
