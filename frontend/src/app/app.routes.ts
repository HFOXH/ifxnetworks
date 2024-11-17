import { Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { AddEntityComponent } from './entity/add-entity/add-entity.component';
import { ListEmployeesComponent } from './employee/list-employees/list-employees.component';
import { ListEntitiesComponent } from './entity/list-entities/list-entities.component';
import { EditEmployeeComponent } from './employee/edit-employee/edit-employee.component';
import { EditEntityComponent } from './entity/edit-entity/edit-entity.component';
import { RegisterComponent } from './user/register/register.component';

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'employees', component: ListEmployeesComponent},
    {path: 'entities', component: ListEntitiesComponent},
    {path: 'add_employee', component: AddEmployeeComponent},
    {path: 'add_entity', component: AddEntityComponent},
    {path: 'edit_employee/:id', component: EditEmployeeComponent},
    {path: 'edit_entity/:id', component: EditEntityComponent},
];
