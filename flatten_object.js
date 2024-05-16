/*

const obj = {
  first: "first",
  name: {
    firstname: "Abhinav",
    lastname: "Singh",
    phone: {
      mobile: "9456266850",
    },
  },
  address: {
    city: "Moradabad",
    locality: "Linepar",
    pincode: 244001,
    country: "India",
  },
};

Ans
obj = {
  "first": "first",
  "name.firstname": "Abhinav",
  "name.lastname": "Singh",
  "address.city": "Moradabad",
  "address.locality": "Linepar",
  "address.pincode": 244001,
  "address.country": "India"
}

*/

function flatObj(obj, prevkey = undefined) {
    let newObj = {};
    for (let key in obj) {
      const value = obj[key];
      const newKey = !prevkey ? key : `${prevkey}.${key}`;
      if (
        typeof value === "function" ||
        typeof value === "number" ||
        typeof value === "string" ||
        typeof value === "symbol" ||
        typeof value === "boolean" ||
        typeof value === "bigint"
      ) {
        newObj[`${newKey}`] = obj[key];
      } else {
        const recursiveObj = flatObj(obj[key], newKey);
        newObj = {
          ...newObj,
          ...recursiveObj,
        };
      }
    }
    return newObj;
  }