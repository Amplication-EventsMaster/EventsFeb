import { Module } from "@nestjs/common";
import { SyncLogModuleBase } from "./base/syncLog.module.base";
import { SyncLogService } from "./syncLog.service";
import { SyncLogController } from "./syncLog.controller";
import { SyncLogResolver } from "./syncLog.resolver";

@Module({
  imports: [SyncLogModuleBase],
  controllers: [SyncLogController],
  providers: [SyncLogService, SyncLogResolver],
  exports: [SyncLogService],
})
export class SyncLogModule {}
