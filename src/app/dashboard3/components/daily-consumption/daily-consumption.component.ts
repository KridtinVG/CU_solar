import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-daily-consumption',
  templateUrl: './daily-consumption.component.html',
  styleUrls: ['./daily-consumption.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DailyConsumptionComponent implements OnInit {

  @Input() title: string;
  @Input() minValue: number;
  @Input() maxValue: number;
  @Input() actualValue: number;
  @Input() actualUnit: string;
  @Input() expectText: string;
  @Input() expectValue: number;
  @Input() expectUnit: string;

  @Input() g1Title: string;
  @Input() g1Value: any;
  @Input() g1Unit: string;

  @Input() g2Title: string;
  @Input() g2Value: number;
  @Input() g2Unit: string;

  @Input() g3Title: string;
  @Input() g3Value: number;
  @Input() g3Unit: string;

  @Input() g4Title: string;
  @Input() g4Value: number;
  @Input() g4Unit: string;


  @Input() showArrow = true;

  constructor() { }

  ngOnInit() {
  }

  // getV1Value(str: string | number) {
  //   if ()
  // }

  getNumber(val) {
    if (typeof val === 'number') {
      const v = +val.toFixed(2);
      return v;
    }
    else {
      return val;
    }
  }

}
