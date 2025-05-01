export type SessionsType = {
    id: number,
    name: string,
    time: string,
    isFree: boolean
}

export type CommentsType = {
    id: number,
    content: string,
    score: number | null,
    created_at: Date,
    replies: CommentsType[],
    user: { name: string, avatar: string | null, role: { name: string } }
}

export type CourseType = {
    id: number,
    name: string,
    shortDescription: string,
    longDescription: string,
    price: string,
    cover: string,
    introductionVideo: string,
    isCompleted: number,
    sessionCount: number,
    commentCount: number,
    time: string,
    offs: [{ id: number, percent: number, expire: Date }],
    level: { id: number, name: string },
    score: number | string,
    book_collection: { id: number, name: string, ageGrate: string }
    user: { id: number, name: string }
    sessions: SessionsType[],
    comments: CommentsType[]
}


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

export type TypeCourseBox = {
    id:number
    name : string,
    slug : string,
    cover : string,
    levelName : string,
    levelId : number,
    score : number|string,
    teacherName : string,
    teacherId : number,
    offPercent : number | null,
    price : string|number
}

export type TypeBookBox = {
    id: number,
    name: string,
    cover: string,
    slug: string,
    courseCount: number,
}