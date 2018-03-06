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
  lumberCategoryClone: LumberCategory;
  title: string;

  constructor(private lumberCategoryService: LumberCategoryService) {
  }

  ngOnInit() {
    this.initialize();
  }

  initialize() {
    if (this.lumberCategory == null) {
      this.lumberCategory = new LumberCategory('', '', this.lumberCategoryService.lumberCategories.length + 1);
      this.title = 'Add Category';
    }
    else {
      this.title = 'Edit Category ' + this.lumberCategory.name;
    }
    this.lumberCategoryClone = new LumberCategory(this.lumberCategory.id, this.lumberCategory.name, this.lumberCategory.sortOrder);
  }

  save() {
    this.lumberCategoryService.save(this.lumberCategoryClone);
    if (this.lumberCategory.id == '')
      this.lumberCategory = null;
    this.initialize();
  }
}
