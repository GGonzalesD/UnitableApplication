import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GroupRequest } from '../shared/group.model';
import { GroupService } from '../shared/group.service';

@Component({
  selector: 'app-new-group',
  templateUrl: './new-group.component.html',
  styleUrls: ['./new-group.component.css']
})
export class NewGroupComponent implements OnInit {

  constructor(private groupService:GroupService, private router:Router) { }

  ngOnInit(): void {
  }

  create(group: GroupRequest) {
    this.groupService.create(group).subscribe((data:any)=>{
      this.groupService.join(data['id']).subscribe(()=>{
        this.groupService.getAllPageable().subscribe();
        this.router.navigate(['admin/groups']);
      })
    });
  }
}
