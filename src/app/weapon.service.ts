import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Weapon } from './models/Weapon';
import { WEAPONS } from './mock-weapons';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class WeaponService {

    private weaponsUrl = "http://127.0.0.1:8000/api/weapon";

    constructor(
        private messageService : MessageService,
        private http: HttpClient) { }

    AgetWeapons(): Observable< Weapon[] > {
        this.messageService.add('WeaponService: fetched weapons');
        return of(WEAPONS);
    }

    AgetWeapon(id: number): Observable<Weapon> {
        this.messageService.add('WeaponService: fetched weapon id=${id}');
        return of(WEAPONS.find(weapon => weapon.id === id));
    }

    getWeapons() : Observable< Weapon[] > {
        console.log("Here");
        this.messageService.add('WeaponService: coucou');
        return this.http.get<Weapon[]>(this.weaponsUrl,  {responseType: 'json'});
    }

    getWeapon(id: number ): Observable<Weapon> {
        this.messageService.add('WeaponService: id');
        return this.http.get<Weapon>(this.weaponsUrl + id, {responseType: 'json'});
    }

    private log(message: string) {
        this.messageService.add('WeaponService: ${message}');
    }
}
