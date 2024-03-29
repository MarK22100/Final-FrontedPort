import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environmentprod } from 'src/environments/environment.prod';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class SExperienciaService {

  expURL = 'https://localhost:8080/explab/';

  URL = environmentprod.URL + 'explab/';


  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Experiencia>{
    return this.httpClient.get<Experiencia>(this.URL + `detail/${id}`);
  } 

  public save(experiencia: Experiencia): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', experiencia);
  }

  public update(id: number, experiencia: Experiencia): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, experiencia);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL+ `delete/${id}`);
  }
}
