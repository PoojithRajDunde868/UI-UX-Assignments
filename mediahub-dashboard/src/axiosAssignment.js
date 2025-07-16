import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com/users';

export async function getUsers() {
  try {
    const response = await axios.get(BASE_URL);
    console.log('GET - Users:', response.data);
  } catch (error) {
    console.error('GET Error:', error.message);
  }
}

export async function createUser() {
  try {
    const newUser = {
      name: 'Poojith',
      email: 'poojithrajdunde@asu.edu',
      phone: '123-456-7890'
    };
    const response = await axios.post(BASE_URL, newUser);
    console.log('POST - Created User:', response.data);
  } catch (error) {
    console.error('POST Error:', error.message);
  }
}

export async function updateUser() {
  try {
    const updatedUser = {
      name: 'Poojith Raj',
      email: 'pdunde@asu.edu',
      phone: '000-000-0000'
    };
    const response = await axios.put(`${BASE_URL}/1`, updatedUser);
    console.log('PUT - Updated User:', response.data);
  } catch (error) {
    console.error('PUT Error:', error.message);
  }
}

export async function patchUser() {
  try {
    const response = await axios.patch(`${BASE_URL}/1`, { email: 'patched@example.com' });
    console.log('PATCH - Patched User:', response.data);
  } catch (error) {
    console.error('PATCH Error:', error.message);
  }
}

export async function deleteUser() {
  try {
    const response = await axios.delete(`${BASE_URL}/1`);
    console.log('DELETE - Deleted User:', response.data);
  } catch (error) {
    console.error('DELETE Error:', error.message);
  }
}
