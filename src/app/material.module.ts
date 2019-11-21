import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatInputModule, MatIconModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatInputModule, MatIconModule, MatTableModule, MatPaginatorModule, MatSortModule],
    exports: [MatButtonModule, MatCheckboxModule, MatInputModule, MatIconModule, MatTableModule, MatPaginatorModule, MatSortModule]
})
export class MaterialModule { }
