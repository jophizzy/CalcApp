import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatInputModule,
    MatGridListModule,
    MatButtonToggleModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule
} from '@angular/material';

@NgModule ({
    imports: [
        MatButtonModule,
        MatInputModule,
        MatGridListModule,
        MatButtonToggleModule,
        MatToolbarModule,
        MatCardModule,
        MatFormFieldModule,
        MatIconModule
    ],
    exports: [
        MatButtonModule,
        MatInputModule,
        MatGridListModule,
        MatButtonToggleModule,
        MatToolbarModule,
        MatCardModule,
        MatFormFieldModule,
        MatIconModule
    ]
})

export class MaterialModule {}
