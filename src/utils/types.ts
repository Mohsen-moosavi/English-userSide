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
    comments: CommentsType[],
    tags:{name:string}[]
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
    user: {id:number,name:string},
    tags:{name:string}[]
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

export type BookType = {
    id: number,
    name: string,
    shortDescription: string,
    longDescription: string,
    ageGrate: string,
    grate: string,
    cover: string,
    slug: string,
    links: string,
    created_at: Date,
    time: string,
    forChildren: boolean,
    courses : {id:number, slug:string, cover:string,name:string}[],
    tags : {name:string}[],
}

export type SingleSessionType = {
    id: number,
    name: string,
    video: string,
    file: string|null,
    isFree:boolean
}

export type TicketType = {
    id: number,
    title: string,
    subject: string,
    updated_at: Date,
    status:string
}

export type TicketMessageType = {
    id:number,
    sender:{
        id:number,
        avatar:string,
        name:string
    },
    message:string,
    created_at:Date
}

export type TicketDetailsType = {
    id: number,
    status:string
    title: string,
    user_id:number,
    subject: string,
    messages : TicketMessageType[]
}
