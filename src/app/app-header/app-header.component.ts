import { AuthService } from './../login/auth.service';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, OnInit } from '@angular/core';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

  @Input() authenticated: boolean;
  @Output() signOut = new EventEmitter(false);

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

    private checkAuthState() {
    let authState = this.auth.authenticated;
    let id = this.auth.id;
    console.log(authState, id);
  }

}
