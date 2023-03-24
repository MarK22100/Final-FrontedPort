import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environmentprod } from 'src/environments/environment.prod';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})

export class PersonaService {
  authURL = 'https://localhost:8080/usuarios'


  URL = environmentprod.URL + 'usuarios/';

  ENDPOINT ='https://back-portf.onrender.com/usuarios/'

  constructor(private http: HttpClient) { }

  public findPersona(): Observable<persona>{
    return this.http.get<persona>(this.ENDPOINT + 'traer/perfil');
  }
}
