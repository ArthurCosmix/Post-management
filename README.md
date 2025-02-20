Postman collection
get all post : http://localhost:5000/getPosts
get post by id : http://localhost:5000/getPostById/:id 
create post : http://localhost:5000/createPost 
  --> example {
    "title" : "morning",
     " description" : "This morning is boring"
  }
update post : http://localhost:5000/updatePost/:id 
----> exmaple {
  "title" : "This evening", 
  "description" : "This evening is peach of shit"
}

delete post : http://localhost:5000/deletePost/:id
