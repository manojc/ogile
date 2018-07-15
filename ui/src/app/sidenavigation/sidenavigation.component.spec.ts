import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidenavigationComponent } from './sidenavigation.component';

describe('SidenavigationComponent', () => {
    let component: SidenavigationComponent;
    let fixture: ComponentFixture<SidenavigationComponent>;

    beforeEach(fakeAsync(() => {
        TestBed.configureTestingModule({
            imports: [MatSidenavModule],
            declarations: [SidenavigationComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(SidenavigationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should compile', () => {
        expect(component).toBeTruthy();
    });
});