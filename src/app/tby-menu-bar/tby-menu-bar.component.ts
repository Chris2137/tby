import { Component, OnInit, Input } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {MENU_ITEM_LISTS} from '../menu-items';
import { Router, NavigationEnd  } from '@angular/router';

@Component({
  selector: 'app-tby-menu-bar',
  templateUrl: './tby-menu-bar.component.html',
  styleUrls: ['./tby-menu-bar.component.css']
})
export class TbyMenuBarComponent implements OnInit {

  items: MenuItem[];

  @Input() menuName : string;

  constructor(private router: Router) { }

  ngOnInit(): void {

    this.router.events.subscribe(e => {
         if (e instanceof NavigationEnd) {
            var path = this.extractPath(e.url);
            this.items = MENU_ITEM_LISTS[path];
          }
        });
  }

  extractPath(url:string) : string{

    let regexp = new RegExp('\/([0-9a-zA-Z+.-]+)');
    var match = regexp.exec(url);
    return match[1];
  }

}
