module.exports = {
     posts: [
        {id: "Kubalatumba",
        title: "Teste do Mural",
        description: "Descrição"
        },
    ],


    getAll(){
        return this.posts;
    },


    newPost(title, description){

        this.posts.push({ id: generateID(), title, description});
    },


    deletePost(id){
        
    }


}

function generateID(){
    return Math.random().toString(36).substring(2,9);
}