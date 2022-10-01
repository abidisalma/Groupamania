import axios from "axios";

//url de l'endpoint de l'api
const API_URL = process.env.REACT_APP_BASE_URL;
//verifier s'il existe un token dans les localstorage
const token = localStorage.getItem('token')

//ajouter le header a la requete - preciser le type des donnee
const headersFiles = {
  headers: {
    'Accept' : 'application/json'
  },
};

//fonction pour executer l'api login 
const login = (data) => {
  return axios.post(API_URL+"/api/auth/login", data, headersFiles);
};

//fonction pour executer l'api login 
const inscription = (data) => {
  return axios.post(API_URL+"/api/auth/signup", data, headersFiles);
};

const User = {
    login,
    inscription
}
export default User;
