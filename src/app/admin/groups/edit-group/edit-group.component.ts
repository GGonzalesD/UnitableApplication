import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Group, GroupRequest } from '../shared/group.model';
import { GroupService } from '../shared/group.service';

@Component({
  selector: 'app-edit-group',
  templateUrl: './edit-group.component.html',
  styleUrls: ['./edit-group.component.css']
})
export class EditGroupComponent implements OnInit {

  groupId!:number;
  @Input () group!:any;

  constructor(private groupService:GroupService, private router:Router) { }

  ngOnInit(): void {
    this.groupId = Number.parseInt(this.router.url.split("/")[3]);
  }

  edit(group: GroupRequest) {
    this.groupService.edit(this.groupId, group).subscribe(()=>{
      this.groupService.getAllPageable().subscribe();
      this.router.navigate(['admin/groups']);
    });
  }

}
