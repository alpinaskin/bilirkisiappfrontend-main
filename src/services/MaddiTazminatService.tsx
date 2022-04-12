import axios from "axios";
import authHeader from "src/services/AuthHeader";

const API_URL = "https://springbilirkisiapp.herokuapp.com/api/v1/madditazminat/";

const getMaddiTazminatById = (id:any) => {
  return axios.get(API_URL + `${id}`, { headers: authHeader() });
};

const getAllMaddiTazminat = () => {
  return axios.get(API_URL, { headers: authHeader() });
}

const MaddiTazminatService = {
  getMaddiTazminatById,
  getAllMaddiTazminat
};
export default MaddiTazminatService;
