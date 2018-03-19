import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { LumberSubCategory } from '../../../models/lumber-sub-category';
import { LumberSubCategoryService } from '../../../services/lumber-sub-category.service';
import { RouterService } from '../../../services/router.service';

@Component({
  selector: 'app-lumber-sub-category-form',
  templateUrl: './lumber-sub-category-form.component.html',
  styleUrls: ['./lumber-sub-category-form.component.scss']
})
export class LumberSubCategoryFormComponent implements OnInit {
  sortOrderOptions: number[] = [];
  lumberSubCategoryClone: LumberSubCategory;

  constructor(private lumberSubCategoryService: LumberSubCategoryService, private routerService: RouterService) {
    this.lumberSubCategoryService.lumberSubCategoryLoaded.subscribe(sc => this.initialize());
  }

  ngOnInit() {
    this.initialize();
  }

  private initialize() {
    this.initializeSortOrderOptions();
    this.lumberSubCategoryClone = this.lumberSubCategoryService.lumberSubCategory.clone();
  }

  private initializeSortOrderOptions() {
    this.sortOrderOptions = [];
    for(let i = 1; i <= this.lumberSubCategoryService.lumberSubCategories.length; i++) {
      this.sortOrderOptions.push(i);
    }

    if (this.lumberSubCategoryService.lumberSubCategory.id == null) {
      this.sortOrderOptions.push(this.lumberSubCategoryService.lumberSubCategory.sortOrder);
    }
  }

  private save() {
    this.lumberSubCategoryService.save(this.lumberSubCategoryClone);
    this.lumberSubCategoryService.lumberSubCategory = this.lumberSubCategoryClone;
    this.routerService.showEditLumberSubCategory(this.lumberSubCategoryService.lumberSubCategory.id);
    // this.initialize();
  }
}
