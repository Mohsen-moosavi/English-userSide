import { appJsonApi } from "@/lib/axios";
import constant from "@/utils/constant";

export const getLastCourseService = async () :Promise<{responseData?:any, error?:any}>=>{
    try {
        const response = await fetch(`${constant.BASE_API_URL}/course/last-course`,{
            next : {revalidate : 86400},
            cache : 'force-cache'
        });
        const data = await response.json()
        return { responseData : data.data.courses };
    } catch (error) {
        return {error};
    }
}

export const getLastBookService = async () :Promise<{responseData?:any, error?:any}>=>{
    try {
        const response = await fetch(`${constant.BASE_API_URL}/book/last-book`,{
            next : {revalidate : 86400},
            cache : 'force-cache'
        });
        const data = await response.json()
        return { responseData : data.data.books };
    } catch (error) {
        return {error};
    }
}

export const getLastArticleService = async () :Promise<{responseData?:any, error?:any}>=>{
    try {
        const response = await fetch(`${constant.BASE_API_URL}/article/last-artilce`,{
            next : {revalidate : 86400},
            cache : 'force-cache'
        });
        const data = await response.json()
        return { responseData : data.data.articles };
    } catch (error) {
        return {error};
    }
}