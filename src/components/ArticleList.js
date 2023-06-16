import Article from "./Article.js"

function ArticleList({posts}){
    const newPosts = posts.map((post) => {
        return <Article key={post.id} title={post.title} date={post.date} preview={post.preview}/>
    })
    
    return (
        <main>
           {newPosts} 
        </main>
    )
}

export default ArticleList