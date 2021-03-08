import { Component, OnInit, HostBinding } from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from "@angular/animations";
@Component({
  selector: "app-animation",
  templateUrl: "./animation.component.html",
  styleUrls: ["./animation.component.scss"],
  animations: [
    trigger("toggleBox", [
      // ...
      state(
        "open",
        style({
          height: "200px",
          backgroundColor: "#061ff0",
        })
      ),
      state(
        "closed",
        style({
          height: "70px",
          backgroundColor: "#E91E63",
        })
      ),
      transition("open => closed", [animate("0.3s")]),
      transition("closed => open", [animate("0.3s")]),
    ]),
  ],
})
export class AnimationComponent implements OnInit {
  isOpen;

  toggle() {
    this.isOpen = !this.isOpen;
    console.log(this.isOpen);
  }
  constructor() {}

  ngOnInit() {}
}
