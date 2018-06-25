import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ClienttdjhipTinhModule } from './tinh/tinh.module';
import { ClienttdjhipHuyenModule } from './huyen/huyen.module';
import { ClienttdjhipXaModule } from './xa/xa.module';
import { ClienttdjhipKhachHangModule } from './khach-hang/khach-hang.module';
import { ClienttdjhipCuaHangModule } from './cua-hang/cua-hang.module';
import { ClienttdjhipNhanVienModule } from './nhan-vien/nhan-vien.module';
import { ClienttdjhipAnhKhachHangModule } from './anh-khach-hang/anh-khach-hang.module';
import { ClienttdjhipHopDongModule } from './hop-dong/hop-dong.module';
import { ClienttdjhipLichSuDongTienModule } from './lich-su-dong-tien/lich-su-dong-tien.module';
import { ClienttdjhipBatHoModule } from './bat-ho/bat-ho.module';
import { ClienttdjhipVayLaiModule } from './vay-lai/vay-lai.module';
import { ClienttdjhipGhiNoModule } from './ghi-no/ghi-no.module';
import { ClienttdjhipLichSuThaoTacHopDongModule } from './lich-su-thao-tac-hop-dong/lich-su-thao-tac-hop-dong.module';
import { ClienttdjhipThuChiModule } from './thu-chi/thu-chi.module';
import { ClienttdjhipTaiSanModule } from './tai-san/tai-san.module';
import { ClienttdjhipAnhTaiSanModule } from './anh-tai-san/anh-tai-san.module';
import { VayLaiPageComponent } from './vay-lai-page/vay-lai-page.component';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        ClienttdjhipTinhModule,
        ClienttdjhipHuyenModule,
        ClienttdjhipXaModule,
        ClienttdjhipKhachHangModule,
        ClienttdjhipCuaHangModule,
        ClienttdjhipNhanVienModule,
        ClienttdjhipAnhKhachHangModule,
        ClienttdjhipHopDongModule,
        ClienttdjhipLichSuDongTienModule,
        ClienttdjhipBatHoModule,
        ClienttdjhipVayLaiModule,
        ClienttdjhipGhiNoModule,
        ClienttdjhipLichSuThaoTacHopDongModule,
        ClienttdjhipThuChiModule,
        ClienttdjhipTaiSanModule,
        ClienttdjhipAnhTaiSanModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [VayLaiPaageComponent],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ClienttdjhipEntityModule {}
