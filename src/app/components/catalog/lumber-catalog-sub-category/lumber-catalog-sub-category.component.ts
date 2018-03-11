import { Component, OnInit } from '@angular/core';
import { LumberSubCategoryService } from '../../../services/lumber-sub-category.service';
import { ActivatedRoute } from '@angular/router';
import { RouterService } from '../../../services/router.service';
import { LumberCategoryService } from '../../../services/lumber-category.service';

@Component({
  selector: 'app-lumber-catalog-sub-category',
  templateUrl: './lumber-catalog-sub-category.component.html',
  styleUrls: ['./lumber-catalog-sub-category.component.scss']
})
export class LumberCatalogSubCategoryComponent implements OnInit {

  constructor(private lumberSubCategoryService: LumberSubCategoryService, private routerService: RouterService) {
  }

  ngOnInit() {
  }
}
