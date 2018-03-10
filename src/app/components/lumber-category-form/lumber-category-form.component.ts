import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { LumberCategory } from '../../models/lumber-category';
import { LumberCategoryService } from '../../services/lumber-category.service';
import { LumberSubCategoryService } from '../../services/lumber-sub-category.service';
import { ActivatedRoute } from '@angular/router';
import { RouterService } from '../../services/router.service';

@Component({
  selector: 'app-lumber-category-form',
  templateUrl: './lumber-category-form.component.html',
  styleUrls: ['./lumber-category-form.component.scss']
})
export class LumberCategoryFormComponent implements OnInit {
  @Input() lumberCategory: LumberCategory;
  lumberCategoryClone: LumberCategory;
  title: string;

  constructor(private lumberCategoryService: LumberCategoryService, private lumberSubCategoryService:
    LumberSubCategoryService, private route: ActivatedRoute, private routerService: RouterService) {
      this.route.params.subscribe(params => this.lumberCategory = this.lumberCategoryService.get(params.lumberCategoryId));

    }

  ngOnInit() {
    this.initialize();
  }

  initialize() {
    if (this.lumberCategory.id == null) {
      this.title = 'Add Category';
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
