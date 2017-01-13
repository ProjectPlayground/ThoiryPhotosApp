import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import "rxjs/add/operator/map";
import {Observable} from "rxjs";
import {Specie} from "../domain/specie";
import {ENV} from "../app.module";


/*
  Generated class for the SpeciesService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SpeciesService {

  constructor(public http: Http) {
  }

  load(): Observable<Specie[]> {
    return this.http.get(ENV.API_URL + "/common/specie")
      .map(SpeciesService.extractData)
      .catch(SpeciesService.handleError);
  }

  retrieveSpecie(specieId: String) : Observable<Specie> {
    return this.http.get(ENV.API_URL + "/common/specie/" + specieId)
      .map(SpeciesService.extractData)
      .catch(SpeciesService.handleError);
  }

  retrieveSpecieAnimals(specieId: string) {
    return this.http.get(ENV.API_URL + "/common/specie/" + specieId + "/animals")
      .map(SpeciesService.extractData)
      .catch(SpeciesService.handleError);
  }

  private static extractData(res: Response) {
    return res.json() || { };
  }

  private static handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
