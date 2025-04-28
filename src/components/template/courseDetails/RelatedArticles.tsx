import RelatedArticleBox from '@/components/modules/RelatedArticleBox'
import { getRelatedArticlesService } from '@/services/singleCourseService'
import { RelatedArticleType } from '@/utils/types'
import React from 'react'

async function RelatedArticles({ slug }: { slug: string }) {

  const { responseData: articles, error }: { responseData?: RelatedArticleType[], error?: any } = await getRelatedArticlesService(slug)

  if (error) {
    return (
      <div className='h-[100px] rounded-xl p-3 items-self-start shadow-center text-red-400 font-bold text-sm flex items-center w-full justify-center'>
        مقاله مرتبطی یافت نشد!!!
      </div>
    )
  } else {
    return (
      <article className="rounded-xl p-3 items-self-start mt-4 shadow-center">
        <span className="text-lg text-custom-dark-blue font-bold">مقاله های مرتبط</span>
        <div className="mt-3 flex flex-col gap-y-3">
          {articles?.map((article, i) => (
            <RelatedArticleBox key={i} {...article} />
          ))}
        </div>
      </article>
    )
  }
}

export default RelatedArticles
