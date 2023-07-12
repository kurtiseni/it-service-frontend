import {Component, Input} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-add-button',
  standalone: true,
  template: `
    <div class="pulse-background btn-pulse position-fixed rounded-circle z-2"></div>
    <button
      class="btn btn-primary position-fixed rounded-circle z-3 p-0 btn-pulse"
      (click)="buttonAction()">
      <i class="fa fa-plus fa-xl"></i>
    </button>
  `,
  styles: [
    `
      .btn-pulse, .pulse-background  {
        right: 7%;
        bottom: 15%;
        width: 3rem;
        height: 3rem;
      }
      .pulse-background {
        background-color: var(--bs-purple);
        animation: pulse 2s ease infinite !important;
      }
      @keyframes pulse {
        0% {
          transform: scale(1, 1);
        }
        50% {
          opacity: 0.3;
        }
        100% {
          transform: scale(1.3);
          opacity: 0;
        }
      }
    `
  ]
})
export class AddButtonComponent {
  @Input() url!: string;

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  buttonAction() {
    this.url
      ? this.router.navigateByUrl(this.url)
      : this.router.navigate(['add'], { relativeTo: this.route })
  }
}
