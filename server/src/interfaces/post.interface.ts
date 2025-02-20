
export interface Ipost {
    id : number
    title : string
    description : string
    createdAt : Date
    updatedAt : Date
}

export interface Upost {
    title ?: string | null,
    description ?: string | null,
}

export interface PostInputDTO {
    title : string 
    description : string,
}