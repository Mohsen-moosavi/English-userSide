import { CourseType, SessionsType } from "@/app/(main)/courses/[slug]/page";
import apiPrivate from "@/lib/apiPrivate";
import { authRequest } from "@/lib/authApi";
import { appJsonApi } from "@/lib/axios";
import constant from "@/utils/constant";
import { RelatedArticleType, RelatedCourseType } from "@/utils/types";

export const getSingleCourseService = async (slug: string): Promise<{ responseData?: any, error?: any }> => {
  try {
    const response = await fetch(`${constant.BASE_API_URL}/course/user-side/${slug}`, {
      next: { revalidate: 86400 },
      cache: 'force-cache'
    });
    const data = await response.json()
    const responseData: CourseType = { ...data.data.course, sessionCount: data.data.sessionCount, commentCount: data.data.commentCount, time: data.data.time }
    return { responseData };
  } catch (error) {
    return { error };
  }
}

export const getSingleCourseSessionService = async (id: number): Promise<{ responseData?: any, error?: any }> => {
  try {
    const response = await fetch(`${constant.BASE_API_URL}/session/user-side/${id}`);
    const data = await response.json()
    const responseData: SessionsType = data.data.sessions
    return { responseData };
  } catch (error) {
    return { error };
  }
}

export const sendCommentService = (content: string, score: number, courseId: number): Promise<{ response?: any, error?: any }> => {
  return authRequest(() =>
    async () => {
      try {
        const response = await apiPrivate(appJsonApi).post("/comment", { content, score, courseId });
        return { response };
      } catch (error) {
        return { error };
      }
    }
  );
};

export const getMoreCommentService = async (courseId: number,commentShowCount:number): Promise<{ response?: any, error?: any }> => {
  try {
    const response = await appJsonApi.get(`/comment/user-side/${courseId}?offset=${commentShowCount || 3}`);
    return { response };
  } catch (error) {
    return { error };
  }
}

export const getRelatedCoursesService = async (slug: string): Promise<{ responseData?: any, error?: any }> => {
  try {
    const response = await fetch(`${constant.BASE_API_URL}/course/user-side/related/${slug}`, {
      next: { revalidate: 86400 },
      cache: 'force-cache'
    });
    const data = await response.json()
    const responseData: RelatedCourseType[] = data.data.courses
    return { responseData };
  } catch (error) {
    return { error };
  }
}

export const getRelatedArticlesService = async (slug: string): Promise<{ responseData?: any, error?: any }> => {
  try {
    const response = await fetch(`${constant.BASE_API_URL}/article/user-side/related-to-course/${slug}`, {
      next: { revalidate: 86400 },
      cache: 'force-cache'
    });
    const data = await response.json()
    const responseData: RelatedArticleType[] = data.data.articles
    return { responseData };
  } catch (error) {
    return { error };
  }
}