// src/redux/features/user/userThunks.ts
import { checkOtpService, forgetPasswordService, getCaptchaService, getUserInfo, loginService, registerService, resendCodeService, resendForgetpassCodeService, resetPasswordService, verifyForgetCodeService, verifyPhoneService } from "@/services/userServices";
import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";


// <=============================== test ===============================> //
export const getUserInfoThunk = createAsyncThunk(
  "user/getUserInfo",
  async (_, thunkAPI) => {
    try {
      const { response, error } = await getUserInfo();
      if (error) throw error;
      console.log("user============================>" , response)
      return response.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err?.response?.data?.message || err.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  "user/login",
  async ({ phone, password }: { phone: string, password: string }, thunkAPI) => {
    try {
      const { response, error } = await loginService(phone, password);
      if (error) throw error;
      return response.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err?.response?.data?.message || err.message);
    }
  }
);


export const getCaptchaThunk = createAsyncThunk(
  "user/getCaptcha",
  async ({ uuid }: { uuid? : string}, thunkAPI) => {
    try {
      const { response, error } = await getCaptchaService(uuid);
      if (error) throw error;
      return response.data;
    } catch (err: any) {
      toast.error(err?.response?.data?.message || err.message)
      return thunkAPI.rejectWithValue(err?.response?.data?.message || err.message);
    }
  }
);


export const forgetPasswordThunk = createAsyncThunk(
  "user/forgetPassword",
  async ({ phone, uuid, captcha}: { phone:string , uuid:string | undefined , captcha:string}, thunkAPI) => {
    try {
      const { response, error } = await forgetPasswordService(phone,uuid,captcha);
      if (error) throw error;
      return response.data;
    } catch (err: any) {
      toast.error(err?.response?.data?.message || err.message)
      return thunkAPI.rejectWithValue(err?.response?.data?.message || err.message);
    }
  }
);

export const verifyPhoneThunk = createAsyncThunk(
  "user/verifyPhone",
  async ({ phone, uuid, captcha}: { phone:string , uuid:string | undefined , captcha:string}, thunkAPI) => {
    try {
      const { response, error } = await verifyPhoneService(phone,uuid,captcha);
      if (error) throw error;
      return response.data;
    } catch (err: any) {
      toast.error(err?.response?.data?.message || err.message)
      return thunkAPI.rejectWithValue(err?.response?.data?.message || err.message);
    }
  }
);

export const verifyForgetCodeThunk = createAsyncThunk(
  "user/verifyForgetCode",
  async ({ phone, otpCode , forgetpassParam, router}: { phone:string , otpCode:string, forgetpassParam:boolean , router:any}, thunkAPI) => {
    try {
      const { response, error } = await verifyForgetCodeService(phone,otpCode);
      if (error) throw error;
      return response.data;
    } catch (err: any) {
      toast.error(err?.response?.data?.message || err.message)
      if(err.response.status === 429){
        if(forgetpassParam){
          router.replace('/forget-password')
        }else{
          router.replace('/verify-phone')
        }
      }
      return thunkAPI.rejectWithValue(err?.response?.data?.message || err.message);
    }
  }
);

export const checkOtpThunk = createAsyncThunk(
  "user/checkOtp",
  async ({ phone, otpCode,  forgetpassParam, router}: { phone:string , otpCode:string, forgetpassParam:boolean , router:any}, thunkAPI) => {
    try {
      const { response, error } = await checkOtpService(phone,otpCode);
      if (error) throw error;
      return response.data;
    } catch (err: any) {
      toast.error(err?.response?.data?.message || err.message)
      if(err.response.status === 429){
        if(forgetpassParam){
          router.replace('/forget-password')
        }else{
          router.replace('/verify-phone')
        }
      }
      return thunkAPI.rejectWithValue(err?.response?.data?.message || err.message);
    }
  }
);


export const resendForgetpassCodeThunk = createAsyncThunk(
  "user/resendForgetpassCode",
  async ({ phone}: { phone:string}, thunkAPI) => {
    try {
      const { response, error } = await resendForgetpassCodeService(phone);
      if (error) throw error;
      return response.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err?.response?.data?.message || err.message);
    }
  }
);

export const resendCodeThunk = createAsyncThunk(
  "user/resendCode",
  async ({ phone}: { phone:string}, thunkAPI) => {
    try {
      const { response, error } = await resendCodeService(phone);
      if (error) throw error;
      return response.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err?.response?.data?.message || err.message);
    }
  }
);


export const registerThunk = createAsyncThunk(
  "user/register",
  async ({ phone, name, username, password, confirmPassword,verifiedPhoneCode}: { phone:string , name:string , username:string , password:string , confirmPassword:string ,verifiedPhoneCode:string}, thunkAPI) => {
    try {
      const { response, error } = await registerService(phone,name,username,password,confirmPassword,verifiedPhoneCode);
      console.log("result==================>" , response)
      if (error) throw error;
      return response.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err?.response?.data?.message || err.message);
    }
  }
);

export const resetPasswordThunk = createAsyncThunk(
  "user/resetPassword",
  async ({ phone, password, confirmPassword, verifiedPhoneCode}: { phone:string , password: string , confirmPassword:string , verifiedPhoneCode:string}, thunkAPI) => {
    try {
      const { response, error } = await resetPasswordService(phone, password, confirmPassword, verifiedPhoneCode);
      if (error) throw error;
      return response.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err?.response?.data?.message || err.message);
    }
  }
);