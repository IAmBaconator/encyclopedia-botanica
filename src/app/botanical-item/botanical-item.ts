import { Component, computed, input, output } from '@angular/core';

interface BotanicalItemObj {
  id: string;
  avatar: string;
  name: string;
  profile: string;
}

@Component({
  selector: 'app-botanical-item',
  templateUrl: './botanical-item.html',
  styleUrl: './botanical-item.css'
})
export class BotanicalItem {

  botanicalItemObj = input.required<BotanicalItemObj>(); // 
  select = output<string>(); // Declares an output that emits strings.

  imagePath = computed(() => {
    return 'assets/botanical-items/' + this.botanicalItemObj().avatar; // Add back in after I import my own flowers.
  });

  onSelectBotanicalItem() {
    this.select.emit(this.botanicalItemObj().id);
  }
}
