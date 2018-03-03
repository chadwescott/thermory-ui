import { Component, Input, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormControl } from '@angular/forms';
import { LumberCategory } from '../../models/lumber-category';

@Component({
  selector: 'app-lumber-category-form',
  templateUrl: './lumber-category-form.component.html',
  styleUrls: ['./lumber-category-form.component.scss']
})
export class LumberCategoryFormComponent implements OnInit {
  @Input() lumberCategory: LumberCategory;

  constructor() { }

  ngOnInit() {
  }

}
