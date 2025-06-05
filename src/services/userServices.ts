// src/services/userService.ts

import apiPrivate from "@/lib/apiPrivate";
import { authRequest } from "@/lib/authApi";
import { appJsonApi, multipartFormApi } from "@/lib/axios";

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

export const uploadProfileImageService = (file:any):Promise<{response?:any, error?:any}> => {
  return authRequest(() =>
    async () => {
      try {
        const formData = new FormData()
        formData.append('avatar' , file)
        const response = await apiPrivate(multipartFormApi).put("/user/user-side/update-profile",formData);
        return { response };
      } catch (error) {
        return { error };
      }
    }
  );
};

export const deleteProfileImageService = ():Promise<{response?:any, error?:any}> => {
  return authRequest(() =>
    async () => {
      try {
        const response = await apiPrivate(appJsonApi).delete("/user/user-side/delete-profile");
        return { response };
      } catch (error) {
        return { error };
      }
    }
  );
};

export const getUserCoursesService = ():Promise<{response?:any, error?:any}> => {
  return authRequest(() =>
    async () => {
      try {
        const response = await apiPrivate(appJsonApi).get("/user/user-side/get-courses");
        return { response };
      } catch (error) {
        return { error };
      }
    }
  );
};

export const getUserBagCoursesService = ():Promise<{response?:any, error?:any}> => {
  return authRequest(() =>
    async () => {
      try {
        const response = await apiPrivate(appJsonApi).post("/course/user-side/bag-courses");
        return { response };
      } catch (error) {
        return { error };
      }
    }
  );
};

export const deleteCourseFromUserBagsService = (courseId:number):Promise<{response?:any, error?:any}> => {
  return authRequest(() =>
    async () => {
      try {
        const response = await apiPrivate(appJsonApi).delete(`/course/user-side/bag-courses/${courseId}`);
        return { response };
      } catch (error) {
        return { error };
      }
    }
  );
};

export const applyOffCodeService = (code:string):Promise<{response?:any, error?:any}> => {
  return authRequest(() =>
    async () => {
      try {
        const response = await apiPrivate(appJsonApi).post(`/off/user-side/apply-off`,{code});
        return { response };
      } catch (error) {
        return { error };
      }
    }
  );
};

export const editUserInfoService = (name:string,username:string,password:string,confirmPassword:string):Promise<{response?:any, error?:any}> => {
  return authRequest(() =>
    async () => {
      try {
        const putBody : {name:string,username:string,password?:string,confirmPassword?:string} = {name,username};
        (password) && (putBody.password = password);
        (confirmPassword) && (putBody.confirmPassword = confirmPassword);

        const response = await apiPrivate(appJsonApi).put("/user/user-side/edit-info",putBody);
        return { response };
      } catch (error) {
        return { error };
      }
    }
  );
};

export const addToBagService = (courseId:number):Promise<{response?:any, error?:any}> => {
  return authRequest(() =>
    async () => {
      try {
        const response = await apiPrivate(appJsonApi).post("/user/add-bag",{courseId});
        return { response };
      } catch (error) {
        return { error };
      }
    }
  );
};

export const payService = (price:number,offCode?:string):Promise<{response?:any, error?:any}> => {
  return authRequest(() =>
    async () => {
      try {
        const body :{price:number,offCode?:string} = {price};
        offCode && (body.offCode = offCode)
        const response = await apiPrivate(appJsonApi).post("/sale/user-side",body);
        return { response };
      } catch (error) {
        return { error };
      }
    }
  );
};

export const sendContactService = (email:string,message:string):Promise<{response?:any, error?:any}> => {
  return authRequest(() =>
    async () => {
      try {
        const response = await apiPrivate(appJsonApi).post("/contact",{email,message});
        return { response };
      } catch (error) {
        return { error };
      }
    }
  );
};

export const logoutService = async () :Promise<{response?:any, error?:any}>=>{
  try {
    const response = await appJsonApi.post('/auth/logout',{},{
    withCredentials:true
  });
      return { response : response };
  } catch (error) {
      return {error};
  }
}