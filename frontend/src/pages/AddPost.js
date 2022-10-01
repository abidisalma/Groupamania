import '../assets/css/globale.scss'
import Header from '../components/Header';
import logo from '../assets/logo/icon-left-font-monochrome-white.png'
import { useState } from 'react';
import { useNavigate } from "react-router-dom"
import Post from '../services/post.services';

function AddPost() {
    const [values, setValues] = useState([]);
    const [error, setError] = useState([]);
    const [success, setSuccess] = useState([]);
    const navigate = useNavigate();

    const handleChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            [event.target.name]: event.target.value,
        }));
    }
    const handleChange_file = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            [event.target.name]: event.target.files[0],
        }));
    }

    const handleSubmit = () => {
        console.log(values)
        let formData = new FormData();
        formData.append('userId', localStorage.getItem('userId'));
        formData.append('title', values.title);
        formData.append('description', values.description);
        formData.append('image', values.file);
        Post.create(formData)
            .then((response) => {
                setSuccess(response.data.message)
            })
            .catch();
    }
    return (
        <div className="App">

            <Header />

            <div className='form'>
                <h2>Creer Post</h2>

                <label className='error'>{error}</label>
                <label className='success'>{success}</label>
                <div className='inputgroup'>
                    <label>Titre</label>
                    <input type="text" name="title" onChange={handleChange}></input>
                </div>
                <div className='inputgroup'>
                    <label>Description</label>
                    <input type="textarea" name="description" onChange={handleChange}></input>
                </div>
                <div className='inputgroup'>
                    <label>image</label>
                    <input type="file" name="file" onChange={handleChange_file}></input>
                </div>
                <div className='inputgroup'>
                    <button onClick={handleSubmit}>Ajouter post</button>
                </div>
            </div>

            <footer>
                <img src={logo} />
            </footer>

        </div>
    );
}

export default AddPost;
