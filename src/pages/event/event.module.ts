import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {EventPage} from './event';
import {ExpandableLayout2Module} from '../../components/card/expandable-layout-2.module';

@NgModule({
    declarations: [
        EventPage,
    ],
    imports: [
        IonicPageModule.forChild(EventPage),
        ExpandableLayout2Module
    ],
})
export class EventPageModule {
}
