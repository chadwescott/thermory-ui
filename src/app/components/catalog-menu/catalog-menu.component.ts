import { Component, OnInit } from '@angular/core';
import { LumberCategoryService } from '../../services/lumber-category.service';
import { LumberCategory } from '../../models/lumber-category';
import { RouterService } from '../../services/router.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog-menu.component.html',
  styleUrls: ['./catalog-menu.component.scss']
})
export class CatalogMenuComponent implements OnInit {
  lumberCategory: LumberCategory;

  constructor(private lumberCategoryService: LumberCategoryService, private routerService: RouterService) {
  }

  ngOnInit() {
  }
}
