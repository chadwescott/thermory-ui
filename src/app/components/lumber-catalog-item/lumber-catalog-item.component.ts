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
  lumberCategory: LumberCategory;

  constructor(private lumberCategoryService: LumberCategoryService, private route: ActivatedRoute, private routerService: RouterService) {
      this.route.params.subscribe(params => this.lumberCategoryChanged(params.lumberCategoryId));
  }

  lumberCategoryChanged(id: string) {
    this.lumberCategory = this.lumberCategoryService.get(id);
  }

  ngOnInit() {
  }
}
