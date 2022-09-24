import { Component, OnInit } from '@angular/core';
import { Repository } from 'src/app/models/github-api';

import repos from '../../../assets/mocking/repos.json';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  public projects: Repository[] = [];
  public featuredProjects: Repository[] = [];

  constructor() { 
    this.projects = repos;
    console.log(this.projects)
  }

  ngOnInit(): void {
  }

}
