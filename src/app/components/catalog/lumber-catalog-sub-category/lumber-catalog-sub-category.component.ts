import { Component, OnInit } from '@angular/core';
import { LumberSubCategoryService } from '../../../services/lumber-sub-category.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lumber-catalog-sub-category',
  templateUrl: './lumber-catalog-sub-category.component.html',
  styleUrls: ['./lumber-catalog-sub-category.component.scss']
})
export class LumberCatalogSubCategoryComponent implements OnInit {

  constructor(private lumberSubCategoryService: LumberSubCategoryService, private route: ActivatedRoute) {
      this.route.params.subscribe(params => this.lumberCategoryChanged(params.lumberCategoryId));
   }

  ngOnInit() {
  }

  private lumberCategoryChanged(id: string) {
    this.lumberSubCategoryService.loadSubCategoriesByCategoryId(id);
  }
}
