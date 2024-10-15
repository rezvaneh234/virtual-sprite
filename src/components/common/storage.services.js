const setItem = (key, value) => {
<<<<<<< HEAD
    localStorage.setItem(key, JSON.stringify(value));
  };
  const getItem = (key) => {
    if (localStorage.getItem(key)) return JSON.parse(localStorage.getItem(key));
    // if (localStorage.getItem(key)) return String(localStorage.getItem(key));
    return false;
  };
  const getItemGeneric = (key) => {
    if (localStorage.getItem(key)) return localStorage.getItem(key);
    return false;
  };
  const setItemGeneric = (key, value) => {
    localStorage.setItem(key, value);
  };
  const removeItem = (key) => {
    if (getItem(key) === false) return false;
    localStorage.removeItem(key);
  };
  const clearStorage = () => {
    localStorage.clear();
  };
  export {
    setItem,
    getItem,
    getItemGeneric,
    setItemGeneric,
    removeItem,
    clearStorage,
  };
  
=======
  localStorage.setItem(key, JSON.stringify(value));
};
const getItem = (key) => {
  if (localStorage.getItem(key)) return JSON.parse(localStorage.getItem(key));
  // if (localStorage.getItem(key)) return String(localStorage.getItem(key));
  return false;
};
const getItemGeneric = (key) => {
  if (localStorage.getItem(key)) return localStorage.getItem(key);
  return false;
};
const setItemGeneric = (key, value) => {
  localStorage.setItem(key, value);
};
const removeItem = (key) => {
  if (getItem(key) === false) return false;
  localStorage.removeItem(key);
};
const clearStorage = () => {
  localStorage.clear();
};
export {
  setItem,
  getItem,
  getItemGeneric,
  setItemGeneric,
  removeItem,
  clearStorage,
};
>>>>>>> af5ceba0b24620e71986f28c6410fd70fc5998d7
