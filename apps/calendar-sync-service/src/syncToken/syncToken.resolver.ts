import * as graphql from "@nestjs/graphql";
import { SyncTokenResolverBase } from "./base/syncToken.resolver.base";
import { SyncToken } from "./base/SyncToken";
import { SyncTokenService } from "./syncToken.service";

@graphql.Resolver(() => SyncToken)
export class SyncTokenResolver extends SyncTokenResolverBase {
  constructor(protected readonly service: SyncTokenService) {
    super(service);
  }
}
