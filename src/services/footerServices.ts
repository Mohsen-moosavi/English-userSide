import constant from "@/utils/constant";

export const getPopularCourseService = async () :Promise<{responseData?:any, error?:any}>=>{
    try {
        const response = await fetch(`${constant.BASE_API_URL}/course/user-side/footer/popular-courses`,{
            next : {revalidate : 2592000},
            cache : 'force-cache'
        });
        const data = await response.json()
        return { responseData : data.data.courses };
    } catch (error) {
        return {error};
    }
}