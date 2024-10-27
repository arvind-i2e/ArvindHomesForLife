import { Injectable } from "@angular/core";
import { HousingLocation } from "./housing-location";
import { promise } from "protractor";
@Injectable({
  providedIn: "root",
})
export class HousingService {
  url = "https://raw.githubusercontent.com/arvind-i2e/Json_data/main/db.json";
  constructor() {}

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }
  async getHousingLocationById(
    id: Number
  ): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }
  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email);
  }
}
