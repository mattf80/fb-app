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


  id: string = '';
  showAuthState: boolean = false;

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

    private checkAuthState() {
      this.showAuthState = !this.showAuthState;
      this.id = this.auth.id;
  }

}
