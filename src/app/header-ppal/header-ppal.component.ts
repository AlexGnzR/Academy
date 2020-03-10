import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-ppal',
  templateUrl: './header-ppal.component.html',
  styleUrls: ['./header-ppal.component.css']
})
export class HeaderPpalComponent implements OnInit {

  /* HEADER TITLES */
  nombretitle = 'ACADEMIA ONLINE';
  logintitle = 'ENTRA / UNETE';

  /* NAV TITLES */
  quienestitle = 'QUIENES SOMOS';
  cursostitle = 'CURSOS';
  noticiastitle = 'NOTICIAS';
  contactotitle = 'CONTACTO';
  apptitle = 'APP';

  constructor() { }

  ngOnInit(): void {
  }

}
