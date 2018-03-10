import { Component, OnInit } from '@angular/core';
import { RouterService } from '../../services/router.service';
import { ActivatedRoute } from '@angular/router';
import { LumberCategory } from '../../models/lumber-category';
import { LumberCategoryService } from '../../services/lumber-category.service';

@Component({
  selector: 'app-lumber-catalog-item',
  templateUrl: './lumber-catalog-item.component.html',
  styleUrls: ['./lumber-catalog-item.component.scss']
})
export class LumberCatalogItemComponent implements OnInit {
  title: string;

  constructor(private lumberCategoryService: LumberCategoryService, private route: ActivatedRoute, private routerService: RouterService) {
      this.route.params.subscribe(params => this.lumberCategoryChanged(params.lumberCategoryId));
      this.lumberCategoryService.categorySaved.subscribe(() => this.lumberCategoryChanged(this.lumberCategoryService.lumberCategory.id));
  }

  ngOnInit() {
  }

  private lumberCategoryChanged(id: string) {
    this.lumberCategoryService.load(id);
    if (this.lumberCategoryService.lumberCategory == null) {
      if (id != null)
        this.routerService.showCatalogLumberCategory(null);
      this.lumberCategoryService.lumberCategory = new LumberCategory(null, null, this.lumberCategoryService.lumberCategories.length + 1);
    }
    this.title = this.lumberCategoryService.lumberCategory.id == null ? 'New Category' : this.lumberCategoryService.lumberCategory.name;
  }
}