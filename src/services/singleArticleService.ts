import constant from "@/utils/constant";
import { ArticleType, RelatedArticleType, RelatedCourseType } from "@/utils/types";

export const getSingleArticleService = async (slug: string): Promise<{ responseData?: any, error?: any }> => {
    try {
      const response = await fetch(`${constant.BASE_API_URL}/article/user-side/get-info/${slug}`, {
        next: { revalidate: 86400 },
        cache: 'force-cache'
      });
      const data = await response.json()
      const responseData: ArticleType = data.data.article;
      return { responseData };
    } catch (error) {
      return { error };
    }
  }

  export const getRelatedArticlesService = async (slug: string): Promise<{ responseData?: any, error?: any }> => {
    try {
      const response = await fetch(`${constant.BASE_API_URL}/article/user-side/related-to-article/${slug}`, {
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

  export const getRelatedCoursesService = async (slug: string): Promise<{ responseData?: any, error?: any }> => {
    try {
      const response = await fetch(`${constant.BASE_API_URL}/course/user-side/related-to-article/${slug}`, {
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