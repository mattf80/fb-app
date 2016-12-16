import { IssueManagerService } from './../../services/issue-manager.service';
import { IIssue, Issue } from './../../models/issue';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'issue-form',
  templateUrl: './issue-form.component.html',
  styleUrls: ['./issue-form.component.css']
})
export class IssueFormComponent implements OnInit {

  newIssue: Issue = new Issue('','',false,'','');
  constructor(private imService: IssueManagerService) { }

  ngOnInit() {
  }

  onSubmit(){
    //console.log(this.newIssue);
    this.imService.createIssue(this.newIssue).then(data => {
      console.log(data);
    })
  }
  
}
