import { uploadPhoto } from "./utils.js";
import { createUser } from "./utils.js";

function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then(([photo, user]) => {
      console.log(photo.body, user.firstName, user.lastName);
    })
    .catch((error) => {
      console.error("Signup system offline");
    });
}

export default handleProfileSignup;
