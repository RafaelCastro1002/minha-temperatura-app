import { createApi } from "unsplash-js";

const imageApi = createApi({
  accessKey: process.env.REACT_APP_ACCESS_KEY_IMAGE_API || "",
});

export default imageApi;
