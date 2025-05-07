import apiPrivate from "@/lib/apiPrivate";
import { authRequest } from "@/lib/authApi";
import { appJsonApi } from "@/lib/axios";

export const getSingleSession = (sessionId:number):Promise<{response?:any, error?:any}> => {
    return authRequest(() =>
      async () => {
        try {
          const response = await apiPrivate(appJsonApi).get(`/session/user-side/get-single/${sessionId}`);
          return { response };
        } catch (error) {
          return { error };
        }
      }
    );
  };