import { IShowCountry } from "./IShowCountry";

export interface IShowNetwork {
	id: number;
	name:  string;
	country:  IShowCountry[];
	officialSite: string;
}
