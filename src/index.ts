import { UserClient } from "./user.client";

export interface SdkConfig {
  apiUrl: string;
}

export let sdkConfig: SdkConfig | null = null;

export function initializeSdk(config: SdkConfig): void {
  sdkConfig = config;
  console.log("config: ", config, "SDK Config: ", sdkConfig);
}

export { UserClient };
