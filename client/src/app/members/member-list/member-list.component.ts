import { Component, OnInit } from '@angular/core';
import { Member } from '../../_models/Member';
import { MemberService } from '../../_services/member-service.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  members: Member[];
  constructor(private memberService: MemberService) { }

  ngOnInit(): void {
    this.loadMember();
  }
  loadMember() {
    this.memberService.getMembers().subscribe(members => {
      this.members = members;
    });
  }

}
