// src/services/userService.ts

import apiPrivate from "@/lib/apiPrivate";
import { authRequest } from "@/lib/authApi";
import { appJsonApi } from "@/lib/axios";

export const getUserInfo = ():Promise<{response?:any, error?:any}> => {
  return authRequest(() =>
    async () => {
      try {
        const response = await apiPrivate(appJsonApi).get("/auth/get-me/user-side");
        return { response };
      } catch (error) {
        return { error };
      }
    }
  );
};


export const loginService = async (phone : string , password : string) :Promise<{response?:any, error?:any}>=>{
    try {
        const response = await appJsonApi.post('/auth/login', {
            phone : `+98${String(phone)}`,
            password
        },{
          withCredentials:true
        });
        return { response : response.data };
    } catch (error) {
        return {error};
    }
}


export const getCaptchaService = async (uuid : string | undefined) :Promise<{response?:any, error?:any}>=>{
  try {
      const response = await appJsonApi.post('/auth/get-captcha' , {uuid});
      return { response : response.data };
  } catch (error) {
      return {error};
  }
}

export const forgetPasswordService = async (phone:string , uuid:string | undefined , captcha:string) :Promise<{response?:any, error?:any}>=>{
  try {
    const response = await appJsonApi.post('/auth/forget-password', {
      phone : `+98${String(phone)}`,
      captcha,
      uuid
  });
      return { response : response.data };
  } catch (error) {
      return {error};
  }
}

export const verifyPhoneService = async (phone:string , uuid:string | undefined , captcha:string) :Promise<{response?:any, error?:any}>=>{
  try {
    const response = await appJsonApi.post('/auth/send-otp', {
      phone : `+98${String(phone)}`,
      uuid,
      captcha
  });;
      return { response : response.data };
  } catch (error) {
      return {error};
  }
}


export const verifyForgetCodeService = async (phone:string , otpCode:string) :Promise<{response?:any, error?:any}>=>{
  try {
    const response = await appJsonApi.post("/auth/verify-forget-code", {
      phone,
      code : otpCode
  });
      return { response : response.data };
  } catch (error) {
      return {error};
  }
}

export const checkOtpService = async (phone:string , otpCode:string) :Promise<{response?:any, error?:any}>=>{
  try {
    const response = await appJsonApi.post("/auth/verify-code", {
      phone,
      code : otpCode
  });
      return { response : response.data };
  } catch (error) {
      return {error};
  }
}

export const resendForgetpassCodeService = async (phone:string) :Promise<{response?:any, error?:any}>=>{
  try {
    const response = await appJsonApi.post('/auth/resend-forgetpass-otp', {
      phone
  });
      return { response : response.data };
  } catch (error) {
      return {error};
  }
}

export const resendCodeService = async (phone:string) :Promise<{response?:any, error?:any}>=>{
  try {
    const response = await appJsonApi.post('/auth/resend-otp', {
      phone
  });;
      return { response : response.data };
  } catch (error) {
      return {error};
  }
}

export const registerService = async (phone:string , name:string , username:string , password:string , confirmPassword:string ,verifiedPhoneCode:string) :Promise<{response?:any, error?:any}>=>{
  try {
    const response = await appJsonApi.post('/auth/register', {
      phone,
      name,
      username,
      password,
      confirmPassword,
      verifiedPhoneCode
  },{
    withCredentials:true
  });
      return { response : response };
  } catch (error) {
      return {error};
  }
}

export const resetPasswordService = async (phone:string , password: string , confirmPassword:string , verifiedPhoneCode:string) :Promise<{response?:any, error?:any}>=>{
  try {
    const response = await appJsonApi.post('/auth/reset-Password', {
      phone,
      password,
      confirmPassword,
      verifiedPhoneCode
  },{
    withCredentials:true
  });
      return { response : response };
  } catch (error) {
      return {error};
  }
}