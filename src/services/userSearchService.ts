import { appJsonApi } from "@/lib/axios";

export const searchAllBookService = async (limit:number,offset:number,searchWord:string,category:string) :Promise<{response?:any, error?:any}>=>{
    try {
        let queryString = `?limit=${limit}&offset=${offset}`;
        (searchWord) && (queryString += `&searchWord=${searchWord}`);
        (category) && (queryString += `&category=${category}`);
        const response = await appJsonApi.get(`/search/book-only${queryString}`);
        return { response : response.data };
    } catch (error) {
        return {error};
    }
}

export const getAllBookCategoryService = async () :Promise<{response?:any, error?:any}>=>{
    try {
        const response = await appJsonApi.get(`/search/book-only/category`);
        return { response : response.data };
    } catch (error) {
        return {error};
    }
}

export const searchAllCourseService = async (limit:number,offset:number,searchWord:string,category:string) :Promise<{response?:any, error?:any}>=>{
    try {
        let queryString = `?limit=${limit}&offset=${offset}`;
        (searchWord) && (queryString += `&searchWord=${searchWord}`);
        (category) && (queryString += `&category=${category}`);
        const response = await appJsonApi.get(`/search/course-only${queryString}`);
        return { response : response.data };
    } catch (error) {
        return {error};
    }
}

export const getAllCourseCategoryService = async () :Promise<{response?:any, error?:any}>=>{
    try {
        const response = await appJsonApi.get(`/search/course-only/category`);
        return { response : response.data };
    } catch (error) {
        return {error};
    }
}


export const searchAllArticleService = async (limit:number,offset:number,searchWord:string) :Promise<{response?:any, error?:any}>=>{
    try {
        let queryString = `?limit=${limit}&offset=${offset}`;
        (searchWord) && (queryString += `&searchWord=${searchWord}`);
        const response = await appJsonApi.get(`/search/article-only${queryString}`);
        return { response : response.data };
    } catch (error) {
        return {error};
    }
}