import { Component, OnInit } from '@angular/core';
import { RouterService } from '../../../services/router.service';
import { ActivatedRoute } from '@angular/router';
import { LumberCategory } from '../../../models/lumber-category';
import { LumberCategoryService } from '../../../services/lumber-category.service';
import { LumberSubCategoryService } from '../../../services/lumber-sub-category.service';

@Component({
  selector: 'app-lumber-catalog-category',
  templateUrl: './lumber-catalog-category.component.html',
  styleUrls: ['./lumber-catalog-category.component.scss']
})
export class LumberCatalogCategoryComponent implements OnInit {
  title: string;

  constructor(private lumberCategoryService: LumberCategoryService, private lumberSubCategoryService: LumberSubCategoryService,
    private route: ActivatedRoute, private routerService: RouterService) {
      this.route.params.subscribe(params => this.lumberCategoryChanged(params.lumberCategoryId));
      this.lumberCategoryService.categorySaved.subscribe(() => this.lumberCategoryChanged(this.lumberCategoryService.lumberCategory.id));
  }

  ngOnInit() {
  }

  private lumberCategoryChanged(id: string) {
    this.lumberCategoryService.load(id);
    if (this.lumberCategoryService.lumberCategory == null) {
      if (id != null) {
        this.routerService.showCatalogLumberCategory(null);
      }
      this.lumberCategoryService.lumberCategory = new LumberCategory(null, null, this.lumberCategoryService.lumberCategories.length + 1);
    } else {
      this.lumberSubCategoryService.loadSubCategoriesByCategoryId(id);
    }
    this.title = this.lumberCategoryService.lumberCategory.id == null ? 'New Category' : this.lumberCategoryService.lumberCategory.name;
  }
}