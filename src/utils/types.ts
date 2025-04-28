export type RelatedCourseType = {
    id: number,
    name: string,
    slug: string,
    cover: string
}

export type RelatedArticleType = {
    id: number,
    title: string,
    slug: string,
    cover: string
}

export type ArticleType = {
    id: number,
    title: string,
    shortDescription: string,
    longDescription: string,
    links: string,
    cover: string,
    slug: string,
    isPublished: boolean,
    created_at: Date,
    user: {id:number,name:string}
}