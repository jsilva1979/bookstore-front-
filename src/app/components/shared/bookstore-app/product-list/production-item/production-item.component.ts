import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../model/Book';

@Component({
  selector: 'app-production-item',
  templateUrl: './production-item.component.html',
  styleUrls: ['./production-item.component.css']
})
export class ProductionItemComponent implements OnInit {

  @Input()
  livro!: Book;
  constructor() { }

  ngOnInit(): void {
  }

}
