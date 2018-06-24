
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ClienttdjhipButtonDemoModule } from './buttons/button/buttondemo.module';
import { ClienttdjhipSplitbuttonDemoModule } from './buttons/splitbutton/splitbuttondemo.module';

import { ClienttdjhipDialogDemoModule } from './overlay/dialog/dialogdemo.module';
import { ClienttdjhipConfirmDialogDemoModule } from './overlay/confirmdialog/confirmdialogdemo.module';
import { ClienttdjhipLightboxDemoModule } from './overlay/lightbox/lightboxdemo.module';
import { ClienttdjhipTooltipDemoModule } from './overlay/tooltip/tooltipdemo.module';
import { ClienttdjhipOverlayPanelDemoModule } from './overlay/overlaypanel/overlaypaneldemo.module';
import { ClienttdjhipSideBarDemoModule } from './overlay/sidebar/sidebardemo.module';

import { ClienttdjhipKeyFilterDemoModule } from './inputs/keyfilter/keyfilterdemo.module';
import { ClienttdjhipInputTextDemoModule } from './inputs/inputtext/inputtextdemo.module';
import { ClienttdjhipInputTextAreaDemoModule } from './inputs/inputtextarea/inputtextareademo.module';
import { ClienttdjhipInputGroupDemoModule } from './inputs/inputgroup/inputgroupdemo.module';
import { ClienttdjhipCalendarDemoModule } from './inputs/calendar/calendardemo.module';
import { ClienttdjhipCheckboxDemoModule } from './inputs/checkbox/checkboxdemo.module';
import { ClienttdjhipChipsDemoModule } from './inputs/chips/chipsdemo.module';
import { ClienttdjhipColorPickerDemoModule } from './inputs/colorpicker/colorpickerdemo.module';
import { ClienttdjhipInputMaskDemoModule } from './inputs/inputmask/inputmaskdemo.module';
import { ClienttdjhipInputSwitchDemoModule } from './inputs/inputswitch/inputswitchdemo.module';
import { ClienttdjhipPasswordIndicatorDemoModule } from './inputs/passwordindicator/passwordindicatordemo.module';
import { ClienttdjhipAutoCompleteDemoModule } from './inputs/autocomplete/autocompletedemo.module';
import { ClienttdjhipSliderDemoModule } from './inputs/slider/sliderdemo.module';
import { ClienttdjhipSpinnerDemoModule } from './inputs/spinner/spinnerdemo.module';
import { ClienttdjhipRatingDemoModule } from './inputs/rating/ratingdemo.module';
import { ClienttdjhipSelectDemoModule } from './inputs/select/selectdemo.module';
import { ClienttdjhipSelectButtonDemoModule } from './inputs/selectbutton/selectbuttondemo.module';
import { ClienttdjhipListboxDemoModule } from './inputs/listbox/listboxdemo.module';
import { ClienttdjhipRadioButtonDemoModule } from './inputs/radiobutton/radiobuttondemo.module';
import { ClienttdjhipToggleButtonDemoModule } from './inputs/togglebutton/togglebuttondemo.module';
import { ClienttdjhipEditorDemoModule } from './inputs/editor/editordemo.module';

import { ClienttdjhipGrowlDemoModule } from './messages/growl/growldemo.module';
import { ClienttdjhipMessagesDemoModule } from './messages/messages/messagesdemo.module';
import { ClienttdjhipGalleriaDemoModule } from './multimedia/galleria/galleriademo.module';

import { ClienttdjhipFileUploadDemoModule } from './fileupload/fileupload/fileuploaddemo.module';

import { ClienttdjhipAccordionDemoModule } from './panel/accordion/accordiondemo.module';
import { ClienttdjhipPanelDemoModule } from './panel/panel/paneldemo.module';
import { ClienttdjhipTabViewDemoModule } from './panel/tabview/tabviewdemo.module';
import { ClienttdjhipFieldsetDemoModule } from './panel/fieldset/fieldsetdemo.module';
import { ClienttdjhipToolbarDemoModule } from './panel/toolbar/toolbardemo.module';
import { ClienttdjhipGridDemoModule } from './panel/grid/griddemo.module';
import { ClienttdjhipScrollPanelDemoModule } from './panel/scrollpanel/scrollpaneldemo.module';
import { ClienttdjhipCardDemoModule } from './panel/card/carddemo.module';

import { ClienttdjhipDataTableDemoModule } from './data/datatable/datatabledemo.module';
import { ClienttdjhipTableDemoModule } from './data/table/tabledemo.module';
import { ClienttdjhipDataGridDemoModule } from './data/datagrid/datagriddemo.module';
import { ClienttdjhipDataListDemoModule } from './data/datalist/datalistdemo.module';
import { ClienttdjhipDataScrollerDemoModule } from './data/datascroller/datascrollerdemo.module';
import { ClienttdjhipPickListDemoModule } from './data/picklist/picklistdemo.module';
import { ClienttdjhipOrderListDemoModule } from './data/orderlist/orderlistdemo.module';
import { ClienttdjhipScheduleDemoModule } from './data/schedule/scheduledemo.module';
import { ClienttdjhipTreeDemoModule } from './data/tree/treedemo.module';
import { ClienttdjhipTreeTableDemoModule } from './data/treetable/treetabledemo.module';
import { ClienttdjhipPaginatorDemoModule } from './data/paginator/paginatordemo.module';
import { ClienttdjhipGmapDemoModule } from './data/gmap/gmapdemo.module';
import { ClienttdjhipOrgChartDemoModule } from './data/orgchart/orgchartdemo.module';
import { ClienttdjhipCarouselDemoModule } from './data/carousel/carouseldemo.module';
import { ClienttdjhipDataViewDemoModule } from './data/dataview/dataviewdemo.module';

import { ClienttdjhipBarchartDemoModule } from './charts/barchart/barchartdemo.module';
import { ClienttdjhipDoughnutchartDemoModule } from './charts/doughnutchart/doughnutchartdemo.module';
import { ClienttdjhipLinechartDemoModule } from './charts/linechart/linechartdemo.module';
import { ClienttdjhipPiechartDemoModule } from './charts/piechart/piechartdemo.module';
import { ClienttdjhipPolarareachartDemoModule } from './charts/polarareachart/polarareachartdemo.module';
import { ClienttdjhipRadarchartDemoModule } from './charts/radarchart/radarchartdemo.module';

import { ClienttdjhipDragDropDemoModule } from './dragdrop/dragdrop/dragdropdemo.module';

import { ClienttdjhipMenuDemoModule } from './menu/menu/menudemo.module';
import { ClienttdjhipContextMenuDemoModule } from './menu/contextmenu/contextmenudemo.module';
import { ClienttdjhipPanelMenuDemoModule } from './menu/panelmenu/panelmenudemo.module';
import { ClienttdjhipStepsDemoModule } from './menu/steps/stepsdemo.module';
import { ClienttdjhipTieredMenuDemoModule } from './menu/tieredmenu/tieredmenudemo.module';
import { ClienttdjhipBreadcrumbDemoModule } from './menu/breadcrumb/breadcrumbdemo.module';
import { ClienttdjhipMegaMenuDemoModule } from './menu/megamenu/megamenudemo.module';
import { ClienttdjhipMenuBarDemoModule } from './menu/menubar/menubardemo.module';
import { ClienttdjhipSlideMenuDemoModule } from './menu/slidemenu/slidemenudemo.module';
import { ClienttdjhipTabMenuDemoModule } from './menu/tabmenu/tabmenudemo.module';

import { ClienttdjhipBlockUIDemoModule } from './misc/blockui/blockuidemo.module';
import { ClienttdjhipCaptchaDemoModule } from './misc/captcha/captchademo.module';
import { ClienttdjhipDeferDemoModule } from './misc/defer/deferdemo.module';
import { ClienttdjhipInplaceDemoModule } from './misc/inplace/inplacedemo.module';
import { ClienttdjhipProgressBarDemoModule } from './misc/progressbar/progressbardemo.module';
import { ClienttdjhipRTLDemoModule } from './misc/rtl/rtldemo.module';
import { ClienttdjhipTerminalDemoModule } from './misc/terminal/terminaldemo.module';
import { ClienttdjhipValidationDemoModule } from './misc/validation/validationdemo.module';
import { ClienttdjhipProgressSpinnerDemoModule } from './misc/progressspinner/progressspinnerdemo.module';

@NgModule({
    imports: [

        ClienttdjhipMenuDemoModule,
        ClienttdjhipContextMenuDemoModule,
        ClienttdjhipPanelMenuDemoModule,
        ClienttdjhipStepsDemoModule,
        ClienttdjhipTieredMenuDemoModule,
        ClienttdjhipBreadcrumbDemoModule,
        ClienttdjhipMegaMenuDemoModule,
        ClienttdjhipMenuBarDemoModule,
        ClienttdjhipSlideMenuDemoModule,
        ClienttdjhipTabMenuDemoModule,

        ClienttdjhipBlockUIDemoModule,
        ClienttdjhipCaptchaDemoModule,
        ClienttdjhipDeferDemoModule,
        ClienttdjhipInplaceDemoModule,
        ClienttdjhipProgressBarDemoModule,
        ClienttdjhipInputMaskDemoModule,
        ClienttdjhipRTLDemoModule,
        ClienttdjhipTerminalDemoModule,
        ClienttdjhipValidationDemoModule,

        ClienttdjhipButtonDemoModule,
        ClienttdjhipSplitbuttonDemoModule,

        ClienttdjhipInputTextDemoModule,
        ClienttdjhipInputTextAreaDemoModule,
        ClienttdjhipInputGroupDemoModule,
        ClienttdjhipCalendarDemoModule,
        ClienttdjhipChipsDemoModule,
        ClienttdjhipInputMaskDemoModule,
        ClienttdjhipInputSwitchDemoModule,
        ClienttdjhipPasswordIndicatorDemoModule,
        ClienttdjhipAutoCompleteDemoModule,
        ClienttdjhipSliderDemoModule,
        ClienttdjhipSpinnerDemoModule,
        ClienttdjhipRatingDemoModule,
        ClienttdjhipSelectDemoModule,
        ClienttdjhipSelectButtonDemoModule,
        ClienttdjhipListboxDemoModule,
        ClienttdjhipRadioButtonDemoModule,
        ClienttdjhipToggleButtonDemoModule,
        ClienttdjhipEditorDemoModule,
        ClienttdjhipColorPickerDemoModule,
        ClienttdjhipCheckboxDemoModule,
        ClienttdjhipKeyFilterDemoModule,

        ClienttdjhipGrowlDemoModule,
        ClienttdjhipMessagesDemoModule,
        ClienttdjhipGalleriaDemoModule,

        ClienttdjhipFileUploadDemoModule,

        ClienttdjhipAccordionDemoModule,
        ClienttdjhipPanelDemoModule,
        ClienttdjhipTabViewDemoModule,
        ClienttdjhipFieldsetDemoModule,
        ClienttdjhipToolbarDemoModule,
        ClienttdjhipGridDemoModule,
        ClienttdjhipScrollPanelDemoModule,
        ClienttdjhipCardDemoModule,

        ClienttdjhipBarchartDemoModule,
        ClienttdjhipDoughnutchartDemoModule,
        ClienttdjhipLinechartDemoModule,
        ClienttdjhipPiechartDemoModule,
        ClienttdjhipPolarareachartDemoModule,
        ClienttdjhipRadarchartDemoModule,

        ClienttdjhipDragDropDemoModule,

        ClienttdjhipDialogDemoModule,
        ClienttdjhipConfirmDialogDemoModule,
        ClienttdjhipLightboxDemoModule,
        ClienttdjhipTooltipDemoModule,
        ClienttdjhipOverlayPanelDemoModule,
        ClienttdjhipSideBarDemoModule,

        ClienttdjhipDataTableDemoModule,
        ClienttdjhipTableDemoModule,
        ClienttdjhipDataGridDemoModule,
        ClienttdjhipDataListDemoModule,
        ClienttdjhipDataViewDemoModule,
        ClienttdjhipDataScrollerDemoModule,
        ClienttdjhipScheduleDemoModule,
        ClienttdjhipOrderListDemoModule,
        ClienttdjhipPickListDemoModule,
        ClienttdjhipTreeDemoModule,
        ClienttdjhipTreeTableDemoModule,
        ClienttdjhipPaginatorDemoModule,
        ClienttdjhipOrgChartDemoModule,
        ClienttdjhipGmapDemoModule,
        ClienttdjhipCarouselDemoModule,
        ClienttdjhipProgressSpinnerDemoModule

    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ClienttdjhipprimengModule {}
