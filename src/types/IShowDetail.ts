import { IShowAverage } from "./IShowAverage";
import { IShowImage } from "./IShowImage";
import { IShowNetwork } from "./IShowNetwork";

export interface IShowDetail {
	id: string;
	ended: string;
	name: string;
	summary:  string;
	network:  IShowNetwork[];
	genres: [];
	rating: IShowAverage;
	image: IShowImage[];
}
