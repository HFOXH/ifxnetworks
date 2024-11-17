import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Entity } from './models/entity';
import { Employee } from './models/employee';
import { User } from './models/user';


@Injectable({
  providedIn: 'root'
})
export class CrudService {
  url_api: string='http://localhost:7005/api';

  constructor(private clientHttp:HttpClient) { }

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('authToken');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  // Métodos para Employees
   // Obtener todos los empleados
   getEmployees(): Observable<Employee[]> {
    return this.clientHttp.get<Employee[]>(this.url_api + '/Employees');
  }

  // Obtener un solo empleado por ID
  getEmployeeById(employeeId: string): Observable<Employee> {
    return this.clientHttp.get<Employee>(`${this.url_api}/Employees/${employeeId}`);
  }

  // Crear un nuevo empleado
  addEmployee(dataEmployee: Employee): Observable<Employee> {
    const headers = this.getHeaders();
    return this.clientHttp.post<Employee>(this.url_api + '/Employees', dataEmployee, { headers });
  }

  // Actualizar un empleado existente
  updateEmployee(employeeId: string, dataEmployee: Employee): Observable<Employee> {
    const headers = this.getHeaders();
    return this.clientHttp.put<Employee>(`${this.url_api}/Employees/${employeeId}`, dataEmployee, { headers });
  }

  // Eliminar un empleado
  deleteEmployee(employeeId: string): Observable<void> {
    const headers = this.getHeaders();
    return this.clientHttp.delete<void>(`${this.url_api}/Employees/${employeeId}`, { headers });
  }

  // Métodos para Entity
  // Crear una nueva entidad
  addEntity(dataEntity: Entity): Observable<Entity> {
    const headers = this.getHeaders();
    return this.clientHttp.post<Entity>(this.url_api + '/Entity', dataEntity, { headers });
  }

  // Obtener todas las entidades
  getEntities(): Observable<Entity[]> {
    return this.clientHttp.get<Entity[]>(this.url_api + '/Entity');
  }

  // Obtener una entidad por ID
  getEntityById(entityId: string): Observable<Entity> {
    return this.clientHttp.get<Entity>(`${this.url_api}/Entity/${entityId}`);
  }

  // Actualizar una entidad
  updateEntity(entityId: string, dataEntity: Entity): Observable<Entity> {
    const headers = this.getHeaders();
    return this.clientHttp.put<Entity>(`${this.url_api}/Entity/${entityId}`, dataEntity, { headers });
  }

  // Eliminar una entidad
  deleteEntity(entityId: string): Observable<void> {
    const headers = this.getHeaders();
    return this.clientHttp.delete<void>(`${this.url_api}/Entity/${entityId}`, { headers });
  }

  // Métodos para Usuarios
  // Obtener todos los usuarios
  getUsers(): Observable<User[]> {
    return this.clientHttp.get<User[]>(this.url_api + '/User');
  }

  // Obtener un usuario específico por ID
  getUserById(userId: string): Observable<User> {
    return this.clientHttp.get<User>(`${this.url_api}/User/${userId}`);
  }

  // Crear un nuevo usuario
  addUser(dataUser: User): Observable<User> {
    return this.clientHttp.post<User>(this.url_api + '/User', dataUser);
  }

  // Eliminar un usuario
  deleteUser(userId: string): Observable<void> {
    return this.clientHttp.delete<void>(`${this.url_api}/User/${userId}`);
  }

  // Login de un usuario
  loginUser(loginRequest: { email: string, password: string }): Observable<any> {
    return this.clientHttp.post<any>(`${this.url_api}/User/Login`, loginRequest);
  }
}
