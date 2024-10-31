import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL = 'http://localhost:3007/api/settings/'; 
const BASE_URL = 'http://localhost:3007/api/'; 


// Function to get session ID from AsyncStorage
const getSessionID = async () => {
  try {
    const sessionID = await AsyncStorage.getItem('session-id');
    return sessionID;
  } catch (e) {
    console.error('Failed to fetch session ID:', e);
    return null;
  }
};

const getAll = async () => {
    console.log('API_URL:', API_URL);
console.log('BASE_URL:', BASE_URL);
    // Assuming getSessionID is not needed since we are hardcoding the session ID.
    const payload = {
      functionName: 'GetUserRole',
      postData: {},
    };
  
    const headers = {
      'Content-Type': 'application/json',
      'token': 'eKV-CkKv2NTHKk_yYgp_6aYuCIqzQZnY', // Manually set session ID
    };
  
    return axios.post(API_URL, payload, { headers });
  };
// Delete a user role
const deleteRole = async (id) => {
  const sessionID = await getSessionID();
  const payload = {
    functionName: 'DeleteUserRole',
    postData: { _id: id },
  };

  const headers = {
    'Content-Type': 'application/json',
    'token': sessionID,
  };

  return axios.post(API_URL, payload, { headers });
};

// Add a new role
const addRole = async (payload) => {
  const sessionID = await getSessionID();
  const headers = {
    'Content-Type': 'application/json',
    'token': sessionID,
  };

  console.log('Received addRole Payload:', payload);
  return axios.post(API_URL, payload, { headers });
};

// Update an existing role
const updateRole = async (payload) => {
  const sessionID = await getSessionID();
  const headers = {
    'Content-Type': 'application/json',
    'token': sessionID,
  };

  console.log('Received updateRole Payload:', payload);
  return axios.post(API_URL, payload, { headers });
};

// Get businesses
const GetBusinesses = async () => {
  const sessionID = await getSessionID();
  const payload = {
    functionName: 'GetBusinesses',
    postData: {
      limit: 999999999,
      business_ids: [],
      offset: 0,
    },
  };

  const headers = {
    'Content-Type': 'application/json',
    'token': sessionID,
  };

  return axios.post(`${BASE_URL}BusinessModule/GetBusinesses`, payload, { headers });
};

const RoleService = {
  getAll,
  GetBusinesses,
  deleteRole,
  addRole,
  updateRole,
};

export default RoleService;
