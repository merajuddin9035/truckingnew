import axios from 'axios';


const getUsers = async () => {
    try {
      const response = await axios.get('/users'); // Assuming your backend server is running on the same host as your frontend
      console.log(response.data); // Handle the response data
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };
  

  