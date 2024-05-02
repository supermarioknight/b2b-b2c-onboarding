import { Amplify } from "aws-amplify";
import { config } from "../../config";

export function configureAmplify() {
  Amplify.configure({
    Auth: {
      region: config.cognito.region,
      userPoolId: config.cognito.poolId,
      userPoolWebClientId: config.cognito.webClientId,
      authenticationFlowType: "USER_PASSWORD_AUTH",
    },
  });
}
