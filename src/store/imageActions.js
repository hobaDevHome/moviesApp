import { listAll, getDownloadURL, ref } from "firebase/storage";
import { storage } from "../firebaseConfig";

export const fetchImageUrls = (color) => async (dispatch) => {
  const imagesListRef = ref(storage, `pics/${color}`);
  try {
    const response = await listAll(imagesListRef);

    const fetchPromises = response.items.map(async (item) => {
      const url = await getDownloadURL(item);
      return url;
    });

    const imageUrls = await Promise.all(fetchPromises);

    dispatch(setImageUrls(imageUrls));
  } catch (error) {
    console.error("Error fetching image URLs:", error);
  }
};

const setImageUrls = (urls) => ({
  type: "SET_IMAGE_URLS",
  payload: urls,
});
