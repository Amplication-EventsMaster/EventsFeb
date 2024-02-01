import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SyncTokenService } from "./syncToken.service";
import { SyncTokenControllerBase } from "./base/syncToken.controller.base";

@swagger.ApiTags("syncTokens")
@common.Controller("syncTokens")
export class SyncTokenController extends SyncTokenControllerBase {
  constructor(protected readonly service: SyncTokenService) {
    super(service);
  }
}
