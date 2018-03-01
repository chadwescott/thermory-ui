import { Component, OnInit } from '@angular/core';
import { LumberCategoryService } from '../../services/lumber-category.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  constructor(private lumberCategoryService: LumberCategoryService) { }

  ngOnInit() {
  }

}
