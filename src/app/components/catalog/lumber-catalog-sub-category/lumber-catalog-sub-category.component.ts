import { ActivatedRoute } from '@angular/router';
import { RouterService } from '../../../services/router.service';
import { Component, OnInit } from '@angular/core';
import { LumberCategoryService } from '../../../services/lumber-category.service';
import { LumberSubCategory } from '../../../models/lumber-sub-category';
import { LumberSubCategoryService } from '../../../services/lumber-sub-category.service';

@Component({
  selector: 'app-lumber-catalog-sub-category',
  templateUrl: './lumber-catalog-sub-category.component.html',
  styleUrls: ['./lumber-catalog-sub-category.component.scss']
})
export class LumberCatalogSubCategoryComponent implements OnInit {
  title: string;

  constructor(private lumberSubCategoryService: LumberSubCategoryService,
    private route: ActivatedRoute, private routerService: RouterService) {
      this.route.params.subscribe(params => this.lumberSubCategoryChanged(params.lumberSubCategoryId));
      this.lumberSubCategoryService.lumberSubCategorySaved.subscribe(() => this.lumberSubCategoryChanged(this.lumberSubCategoryService.lumberSubCategory.id));
  }

  ngOnInit() {
  }

  private lumberSubCategoryChanged(id: string) {
    this.lumberSubCategoryService.load(id);
    if (this.lumberSubCategoryService.lumberSubCategory == null) {
      if (id != null) {
        // this.routerService.showCatalogLumberSubCategory(null);
      }
      this.lumberSubCategoryService.lumberSubCategory = new LumberSubCategory(null, null, null, null, null, null, null, this.lumberSubCategoryService.lumberSubCategories.length + 1);
    }
    this.title = this.lumberSubCategoryService.lumberSubCategory.id == null ? 'New SubCategory' : this.lumberSubCategoryService.lumberSubCategory.name;
  }
}
