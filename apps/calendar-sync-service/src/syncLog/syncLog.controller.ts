import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SyncLogService } from "./syncLog.service";
import { SyncLogControllerBase } from "./base/syncLog.controller.base";

@swagger.ApiTags("syncLogs")
@common.Controller("syncLogs")
export class SyncLogController extends SyncLogControllerBase {
  constructor(protected readonly service: SyncLogService) {
    super(service);
  }
}
