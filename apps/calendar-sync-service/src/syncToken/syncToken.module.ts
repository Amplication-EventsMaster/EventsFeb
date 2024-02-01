import { Module } from "@nestjs/common";
import { SyncTokenModuleBase } from "./base/syncToken.module.base";
import { SyncTokenService } from "./syncToken.service";
import { SyncTokenController } from "./syncToken.controller";
import { SyncTokenResolver } from "./syncToken.resolver";

@Module({
  imports: [SyncTokenModuleBase],
  controllers: [SyncTokenController],
  providers: [SyncTokenService, SyncTokenResolver],
  exports: [SyncTokenService],
})
export class SyncTokenModule {}
