import { Component, computed, input, output } from '@angular/core';
import { type BotanicaItemObj } from './botanica-item.model';

@Component({
  selector: 'app-botanica-item',
  templateUrl: './botanica-item.html',
  styleUrl: './botanica-item.css'
})
export class BotanicaItem {

  botanicaItemObj = input.required<BotanicaItemObj>(); // 
  select = output<string>(); // Declares an output that emits strings.

  imagePath = computed(() => {
    return 'assets/botanica-items/' + this.botanicaItemObj().avatar; // Add back in after I import my own flowers.
  });

  onSelectBotanicaItem() {
    this.select.emit(this.botanicaItemObj().id);
  }
}
