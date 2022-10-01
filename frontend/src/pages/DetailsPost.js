import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import logo from '../assets/logo/icon-left-font-monochrome-white.png';
import Header from '../components/Header';
import Post from '../services/post.services';

function DetailsPost() {

  const { id } = useParams();
  const [post, setPost] = useState([]);
  let count = 0;
  const navigate = useNavigate();
  useEffect(() => {
    getdata();
  }, [count]);

  const getdata = () => {
    Post.getOne(id)
      .then((response) => {
        setPost(response.data)
        console.log(response.data)
      })
      .catch()
  }
  const deletePost = (id) => {
    Post.deletepost(id)
      .then((val) => {
        navigate('/');
      })
      .catch((err) => {
        console.log(err?.response?.data)
      })
  }

  const addlike = (id) => {
    let like = {
      like: 1,
    }
    Post.like(like, id)
      .then((val) => {
        getdata();
        console.log(val)

      })
      .catch((err) => {
        console.log(err?.response?.data)
      })
  }
  const deletelike = (id) => {
    let like = {
      like: 0,
    }
    Post.like(like, id)
      .then((val) => {
        getdata();
        console.log(val)
      })
      .catch((err) => {
        console.log(err?.response?.data)
      })
  }
  const adddislike = (id) => {
    let like = {
      like: -1,
    }
    Post.like(like, id)
      .then((val) => {
        getdata();
        console.log(val)
      })
      .catch((err) => {
        console.log(err?.response?.data)
      })
  }

  return (
    <div className="App">

      <Header />

      <div className='postFlex'>
        <div className='images'><img src={post?.imageUrl} className="img" /></div>
        <div className='detail'>
          <h2>{post?.title}</h2>
          <p>{post?.description}</p>
          <div className='socia'>


            {!post?.usersDisliked?.includes(localStorage.getItem('userId')) ?
              <button className='like' onClick={() => {
                if (post?.usersLiked.includes(localStorage.getItem('userId'))) {
                  deletelike(post?._id)
                } else {
                  addlike(post?._id)
                }
              }} >
                <FontAwesomeIcon icon={faThumbsUp} /> {post?.likes} like
              </button>
              :
              <button className='like' disabled="true">
                <FontAwesomeIcon icon={faThumbsUp} /> {post?.likes} like
              </button>
            }

            {!post?.usersLiked?.includes(localStorage.getItem('userId')) ?
              <button className='dislike' onClick={() => {
                if (post?.usersDisliked.includes(localStorage.getItem('userId'))) {
                  deletelike(post?._id)
                } else {
                  adddislike(post?._id)
                }
              }}>
                <FontAwesomeIcon icon={faThumbsDown} /> {post?.dislikes} dislike
              </button>
              :
              <button className='dislike' disabled="true">
                <FontAwesomeIcon icon={faThumbsDown} /> {post?.dislikes} dislike
              </button>
            }

          </div>
          <div className='btn'>
            {localStorage.getItem('role') === "admin" ? (
              <>
                <button className='action' onClick={() => deletePost(post?._id)}>Supprimer</button>
                <button className='action green' onClick={() => navigate('/posts/update/' + post?._id)}>Modifier</button>
              </>
            ) : (
              <>
                {localStorage.getItem('userId') === post?.userId ? (<>
                  <button className='action' onClick={() => deletePost(post?._id)}>Supprimer</button>
                  <button className='action green' onClick={() => navigate('/posts/update/' + post?._id)}>Modifier</button>
                </>
                ) : ''}
              </>
            )}
            <button className='action green' onClick={() => navigate('/')}>Retour</button>
          </div>
        </div>
      </div>

      <footer>
        <img src={logo} />
      </footer>

    </div>
  );
}

export default DetailsPost;