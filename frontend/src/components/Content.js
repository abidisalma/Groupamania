import { useEffect, useState } from 'react';
import Post from '../services/post.services';
import Posts from "./Posts";

function Content() {
    const [listposts, setListposts] = useState([]);
    let count = 0;

    useEffect(() => {
        Post.getAll()
            .then((response) => {
                setListposts(response.data)
                console.log(response.data)
            })
            .catch()
    }, [count]);

    return (
        <div className="content">
            {listposts && listposts?.map((item, index) => {
                return (
                    <Posts data={item} key={index} />
                )
            })}
        </div>
    );
}

export default Content;
