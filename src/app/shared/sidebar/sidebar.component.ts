import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/service.index';




@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  // Al hacer PUBLIC el servicio, puedo accesarlo desde el HTML
  constructor(public sideBar: SidebarService) { }

  ngOnInit(): void {
  }

}
