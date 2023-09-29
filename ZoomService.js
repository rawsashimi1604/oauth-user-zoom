import axios from "axios";

async function authorizeUser() {
  console.log(process.env.ZOOM_CLIENT_ID);
}

export default { authorizeUser };
