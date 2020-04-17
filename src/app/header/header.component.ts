import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  activePath = '';

  constructor(private router: Router, private location: Location) {}

  ngOnInit() {
    this.router.events.subscribe(() => {
      this.activePath = this.location.path();
    });
  }
}
