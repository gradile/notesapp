import { defineAuth } from '@aws-amplify/backend';
/**
 * Define and configure your auth resourde
 * @see https://docs.amplify.aws/react/build-a-backend/auth/
 */
 
export const auth = defineAuth({
  loginWith: { email: true, },
});