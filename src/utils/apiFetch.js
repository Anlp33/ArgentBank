const APIURL = "http://localhost:3001";

/**
 * Get user token
 * @param {*} user get token depending on the user
 * @returns user token
 */

export const getToken = async (user) => {
  const response = await fetch(`${APIURL}/api/v1/user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  return response.json();
};

/**
 * Get user informations
 * @param {*} token find user informations depending on token parameter
 * @returns user data
 */
export const getUser = async (token) => {
  const response = await fetch(`${APIURL}/api/v1/user/profile`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return response.json();
};

/**
 * Update user profile
 * @param {*} token
 * @param {*} firstname
 * @param {*} lastname
 * @returns
 */
export const updateProfile = async (token, firstName, lastName) => {
  const response = await fetch(`${APIURL}/api/v1/user/profile`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      firstName,
      lastName,
    }),
  });
  return response.json();
};
