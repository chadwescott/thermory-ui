import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { LumberCategory } from '../../../models/lumber-category';
import { LumberCategoryService } from '../../../services/lumber-category.service';
import { RouterService } from '../../../services/router.service';

@Component({
  selector: 'app-lumber-category-form',
  templateUrl: './lumber-category-form.component.html',
  styleUrls: ['./lumber-category-form.component.scss']
})
export class LumberCategoryFormComponent implements OnInit {
  sortOrderOptions: number[] = [];
  lumberCategoryClone: LumberCategory;

  constructor(private lumberCategoryService: LumberCategoryService, private routerService: RouterService) {
  }

  ngOnInit() {
    this.initialize();
  }

  initialize() {
    for(let i = 1; i <= this.lumberCategoryService.lumberCategories.length; i++) {
      this.sortOrderOptions.push(i);
    }

    if (this.lumberCategoryService.lumberCategory.id == null) {
      this.sortOrderOptions.push(this.lumberCategoryService.lumberCategory.sortOrder);
    }
    this.lumberCategoryClone = new LumberCategory(this.lumberCategoryService.lumberCategory.id, this.lumberCategoryService.lumberCategory.name, this.lumberCategoryService.lumberCategory.sortOrder);
  }

  save() {
    this.lumberCategoryService.save(this.lumberCategoryClone);
    this.lumberCategoryService.lumberCategory = this.lumberCategoryClone;
    this.routerService.showEditLumberCategory(this.lumberCategoryService.lumberCategory.id);
  }
}
