import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-envi-consumption',
  templateUrl: './envi-consumption.component.html',
  styleUrls: ['./envi-consumption.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EnviConsumptionComponent implements OnInit, OnChanges {

  @Input() irr?: string;
  @Input() amb?: string;
  @Input() pv?: string;
  @Input() cod?: string;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    
  }

  ngOnInit() {
  }

}
