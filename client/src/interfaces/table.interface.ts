export type Post = {
    id: number,
    title : string,
    description : string
    createAt : Date
    updateAt : Date
}


export  interface tableField {
    postData : Post[]
}