import apiPrivate from "@/lib/apiPrivate";
import { authRequest } from "@/lib/authApi";
import { appJsonApi } from "@/lib/axios";

export const createTicketService = (title: string, subject: string, message: string): Promise<{ response?: any, error?: any }> => {
    return authRequest(() =>
        async () => {
            try {
                const response = await apiPrivate(appJsonApi).post("/ticket", { title, subject, message });
                return { response };
            } catch (error) {
                return { error };
            }
        }
    );
};

export const getTicketsService = (): Promise<{ response?: any, error?: any }> => {
    return authRequest(() =>
        async () => {
            try {
                const response = await apiPrivate(appJsonApi).get("/ticket/user-side");
                return { response };
            } catch (error) {
                return { error };
            }
        }
    );
};

export const getSingleTicketService = (ticketId:number):Promise<{response?:any, error?:any}> => {
  return authRequest(() =>
    async () => {
      try {
        const response = await apiPrivate(appJsonApi).get(`/ticket/user-side/${ticketId}`);
        return { response };
      } catch (error) {
        return { error };
      }
    }
  );
};

export const closeTicketService = (ticketId:number):Promise<{response?:any, error?:any}> => {
  return authRequest(() =>
    async () => {
      try {
        const response = await apiPrivate(appJsonApi).post(`/ticket/user-side/close/${ticketId}`);
        return { response };
      } catch (error) {
        return { error };
      }
    }
  );
};

export const answerTicketService = (ticketId:number , message:string):Promise<{response?:any, error?:any}> => {
  return authRequest(() =>
    async () => {
      try {
        const response = await apiPrivate(appJsonApi).post(`/ticket/user-side/answer/${ticketId}` ,{message});
        return { response };
      } catch (error) {
        return { error };
      }
    }
  );
};