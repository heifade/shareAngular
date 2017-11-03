import {
  trigger,
  style,
  transition,
  animate,
  state,
  keyframes
} from "@angular/animations";

export const errorInOut = trigger("errorInOut", [
  state("in", style({ transform: "scale(1)" })),
  state("out", style({ transform: "scale(0)", display: 'none' })),
  transition("out => in", [
    animate(
      300,
      keyframes([
        style({ opacity: 0, transform: "scale(0)", offset: 0 }),
        style({ opacity: 1, transform: "scale(1.1)", offset: 0.3 }),
        style({ opacity: 1, transform: "scale(1)", offset: 1.0 })
      ])
    )
  ]),
  transition("in => out", [
    animate(
      300,
      keyframes([
        style({ opacity: 1, transform: "scale(1)", offset: 0 }),
        style({ opacity: 1, transform: "scale(1.1)", offset: 0.7 }),
        style({ opacity: 0, transform: "scale(0)", offset: 1.0 })
      ])
    )
  ])
]);
