import constant from "@/utils/constant";
import { BookType, RelatedArticleType } from "@/utils/types";

export const getSingleBookService = async (slug: string): Promise<{ responseData?: any, error?: any }> => {
    try {
      const response = await fetch(`${constant.BASE_API_URL}/book/user-side/${slug}`, {
        next: { revalidate: 86400 },
        cache: 'force-cache'
      });
      const data = await response.json()
      const responseData: BookType = data.data.book
      return { responseData };
    } catch (error) {
      return { error };
    }
  }

  export const getRelatedArticlesService = async (): Promise<{ responseData?: any, error?: any }> => {
    try {
      const response = await fetch(`${constant.BASE_API_URL}/article/user-side/related-to-book`, {
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