import axios from "axios";

export const imageBBUpload = async (image) => {
  const form = new FormData();
  console.log(image);
  form.append("image", image);
  console.log(form);
  const { data } = await axios.post(
    `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_APIkey}`,
    form
  );
  return data;
};
