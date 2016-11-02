import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { UpgradeAdapter } from '@angular/upgrade';

// Third Party 
import { BsDropdownModule } from 'ng2-bs-dropdown';

import { ScorecardActivationService } from './services/scorecard_activation.service';
import { AuthMechanismService } from './services/authmechanism.service';

// Our components
import { AppComponent } from './app.component';
// import { MrFlowGraphComponent } from './components/mr-flow-graph/mr-flow-graph.component';
import { MrLegendItemComponent } from './components/mr-legend-item/mr-legend-item.component';
import { MrLegendGroupComponent } from './components/mr-legend-group/mr-legend-group.component';
import { MrScorecardCellComponent } from './components/mr-scorecard-cell/mr-scorecard-cell.component';
import { MrAuthmechanismPageComponent } from './components/mr-authmechanism-page/mr-authmechanism-page.component';
import { MrPiegraphComponent } from './components/mr-piegraph/mr-piegraph.component';
import { MrScorecardtableComponent } from './components/mr-scorecardtable/mr-scorecardtable.component';
import { MrScorecardPageComponent } from './components/mr-scorecard-page/mr-scorecard-page.component';
import { MrPercentViewComponent } from './components/mr-percent-view/mr-percent-view.component';
import { MrPiegraphWithLegendsComponent } from './components/mr-piegraph-with-legends/mr-piegraph-with-legends.component';
import { MrFilterboxComponent } from './components/mr-filterbox/mr-filterbox.component';
import { MrTablehdrCellComponent } from './components/mr-tablehdr-cell/mr-tablehdr-cell.component';
import { MrNumberFormatterComponent } from './components/mr-number-formatter/mr-number-formatter.component';
import { MrPagestepIndicatorComponent } from './components/mr-pagestep-indicator/mr-pagestep-indicator.component';
import { MrRowBookmarkComponent } from './components/mr-row-bookmark/mr-row-bookmark.component';
import { MrTablecolHdrComponent } from './components/mr-tablecol-hdr/mr-tablecol-hdr.component';
import { MrPdfExporterComponent } from './components/mr-pdf-exporter/mr-pdf-exporter.component';
import { MrPopupComponent } from './components/mr-popup/mr-popup.component';
import { MrPopoverComponent } from './components/mr-popover/mr-popover.component';
import { MrFcsdetailPageComponent } from './components/mr-fcsdetail-page/mr-fcsdetail-page.component';
import { MrFcsrowComponent } from './components/mr-fcsrow/mr-fcsrow.component'

@NgModule({
  declarations: [
    AppComponent,
    // MrFlowGraphComponent,
    MrLegendItemComponent,
    MrLegendGroupComponent,
    MrScorecardCellComponent,
    MrAuthmechanismPageComponent,
    MrPiegraphComponent,
    MrScorecardtableComponent,
    MrScorecardPageComponent,
    MrPercentViewComponent,
    MrPiegraphWithLegendsComponent,
    MrFilterboxComponent,
    MrTablehdrCellComponent,
    MrNumberFormatterComponent,
    MrPagestepIndicatorComponent,
    MrRowBookmarkComponent,
    MrTablecolHdrComponent,
    MrPdfExporterComponent,
    MrPopupComponent,
    MrPopoverComponent,
    MrFcsdetailPageComponent,
    MrFcsrowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BsDropdownModule
  ],
  providers: [ScorecardActivationService,AuthMechanismService],
  bootstrap: [AppComponent]
})
export class AppModule { }
