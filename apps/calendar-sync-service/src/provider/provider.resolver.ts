import * as graphql from "@nestjs/graphql";
import { ProviderResolverBase } from "./base/provider.resolver.base";
import { Provider } from "./base/Provider";
import { ProviderService } from "./provider.service";

@graphql.Resolver(() => Provider)
export class ProviderResolver extends ProviderResolverBase {
  constructor(protected readonly service: ProviderService) {
    super(service);
  }
}
