import axios from "axios";
import {useEffect , useState} from "react"; 

function PostsPage()  {

    const [posts,setPosts] = useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((results)=>{
            setPosts(results.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[]);

        return (
            <div>
                <ul>{
                    posts.map(data=><li key={data.id}>
                        <div><h3>{data.title}</h3></div>    
                        <div><p>{data.body}</p></div>
                        <hr></hr>
                    </li>)
                    }</ul>
            </div>
        );
}

export default PostsPage;