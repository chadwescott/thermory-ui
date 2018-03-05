import { Component, Input, OnInit } from '@angular/core';
import { LumberCategory } from '../../models/lumber-category';
import { LumberCategoryService } from '../../services/lumber-category.service';

@Component({
  selector: 'app-lumber-category-form-tab',
  templateUrl: './lumber-category-form-tab.component.html',
  styleUrls: ['./lumber-category-form-tab.component.scss']
})
export class LumberCategoryFormTabComponent implements OnInit {
  @Input() lumberCategory: LumberCategory;

  constructor(private lumberCategoryService: LumberCategoryService) { }

  ngOnInit() {
  }
}
