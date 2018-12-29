import { Component, OnInit, Input } from '@angular/core';
import { Weapon } from '../Weapon';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { WeaponService } from '../weapon.service';

@Component({
  selector: 'app-weapon-detail',
  templateUrl: './weapon-detail.component.html',
  styleUrls: ['./weapon-detail.component.css']
})
export class WeaponDetailComponent implements OnInit {

  constructor(
      private route: ActivatedRoute,
      private weaponService: WeaponService,
      private location: Location
  ) { }

  @Input() weapon: Weapon;

  ngOnInit(): void {
      this.getWeapon();
  }

  getWeapon(): void {
      const id = +this.route.snapshot.paramMap.get('id');
      this.weaponService.getWeapon(id).subscribe(weapon => this.weapon = weapon);
  }

  goBack(): void {
      this.location.back();
  }
}
