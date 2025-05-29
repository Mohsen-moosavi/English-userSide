import apiPrivate from "@/lib/apiPrivate";
import { authRequest } from "@/lib/authApi";
import { appJsonApi } from "@/lib/axios";

export const getSingleSession = (sessionId:number,courseId:number):Promise<{response?:any, error?:any}> => {
    return authRequest(() =>
      async () => {
        try {
          const queryString = Number(sessionId) === 0 ? '':`?sessionId=${sessionId}`
          const response = await apiPrivate(appJsonApi).get(`/session/user-side/get-single/${courseId}${queryString}`);
          return { response };
        } catch (error) {
          return { error };
        }
      }
    );
  };