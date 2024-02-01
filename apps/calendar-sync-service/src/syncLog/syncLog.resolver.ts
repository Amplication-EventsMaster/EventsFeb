import * as graphql from "@nestjs/graphql";
import { SyncLogResolverBase } from "./base/syncLog.resolver.base";
import { SyncLog } from "./base/SyncLog";
import { SyncLogService } from "./syncLog.service";

@graphql.Resolver(() => SyncLog)
export class SyncLogResolver extends SyncLogResolverBase {
  constructor(protected readonly service: SyncLogService) {
    super(service);
  }
}
