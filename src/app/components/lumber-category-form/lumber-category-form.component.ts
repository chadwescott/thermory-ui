import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { LumberCategory } from '../../models/lumber-category';
import { LumberCategoryService } from '../../services/lumber-category.service';

@Component({
  selector: 'app-lumber-category-form',
  templateUrl: './lumber-category-form.component.html',
  styleUrls: ['./lumber-category-form.component.scss']
})
export class LumberCategoryFormComponent implements OnInit {
  @Input() lumberCategory: LumberCategory;
  sortOrderOptions: number[] = [];
  lumberCategoryClone: LumberCategory;
  title: string;

  constructor(private lumberCategoryService: LumberCategoryService) {
  }

  ngOnInit() {
    this.initialize();
  }

  initialize() {
    for(let i = 1; i <= this.lumberCategoryService.lumberCategories.length; i++) {
      this.sortOrderOptions.push(i);
    }

    if (this.lumberCategory == null) {
      this.title = 'Add Category';
      this.lumberCategory = new LumberCategory(null, null, this.lumberCategoryService.lumberCategories.length + 1);
      this.sortOrderOptions.push(this.lumberCategory.sortOrder);
    }
    else {
      this.title = 'Edit Category ' + this.lumberCategory.name;
    }
    this.lumberCategoryClone = new LumberCategory(this.lumberCategory.id, this.lumberCategory.name, this.lumberCategory.sortOrder);
  }

  save() {
    this.lumberCategoryService.save(this.lumberCategoryClone);
    this.lumberCategory = this.lumberCategoryClone;
    this.initialize();
  }
}
