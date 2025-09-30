import { Component, computed, input, output } from '@angular/core';

interface BotanicaItemObj {
  id: string;
  avatar: string;
  name: string;
  profile: string;
}

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
