import { Component, OnInit } from '@angular/core';
import { Weapon } from '../Weapon';
import { WeaponService } from '../weapon.service';


@Component({
  selector: 'app-weapon',
  templateUrl: './weapon.component.html',
  styleUrls: ['./weapon.component.css']
})
export class WeaponComponent implements OnInit {
  constructor(private weaponService: WeaponService) { }

  selectedWeapon : Weapon;
  weapons : Weapon[];

  ngOnInit() {
      this.getWeapons();
  }

  onSelect(weapon : Weapon): void {
      this.selectedWeapon = weapon;
  }

  getWeapons(): void {
      this.weaponService.getWeapons().subscribe(weapons => this.weapons = weapons);
  }
}
