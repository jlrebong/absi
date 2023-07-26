import { Component } from '@angular/core';
import { LABELS } from '../core/models/labels';

@Component({
  selector: 'app-bank-account',
  templateUrl: './bank-account.component.html',
  styleUrls: ['./bank-account.component.css'],
})
export class BankAccountComponent {
  labels = LABELS['bank'];

  bank = {};
}
