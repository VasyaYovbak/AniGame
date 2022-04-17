import {
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  OnInit,
  ViewChild
} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {GameService} from "../../../../../services/game.service";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../../../../services/user.service";

@Component({
  selector: 'game-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit , AfterViewChecked {

  @ViewChild('chat') chat :ElementRef;

  all_massage: Array<{
    isMy: boolean,
    text: string,
    username: string
  }> = [];
  input = "";

  constructor(private gameService: GameService, private route: ActivatedRoute, private userService: UserService) {

  }

  ngOnInit(): void {
    this.gameService.enterChat<{ username: string, text: string }>().subscribe((data) => {
      let massage = {
        isMy: false,
        text: data.text,
        username: data.username
      };
      if (data.username == this.userService.getSelfUser().username) {
        massage.isMy = true;
      }
      this.all_massage.push(massage);
    })
  }

  ngAfterViewChecked() {
    this.chat.nativeElement.scrollTop = this.chat.nativeElement.scrollHeight
  }

  sendMessage() {
    if (this.input.length) {
      this.route.params.subscribe(params => {
        this.gameService.sendMessage(this.input, params['id']);
        this.input = '';
      })
    }
  }

}
