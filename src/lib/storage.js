import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "./FirebaseConfig";
import { v4 as uuidv4 } from "uuid";
export async function uploadImage(image, folder = "projects") {
    if (!image)
        return "";
    try {
        const uniqueImageName = `${uuidv4()}_${image.name}`;
        const storageRef = ref(storage, `images/${folder}/${uniqueImageName}`);
        await uploadBytes(storageRef, image);
        const url = await getDownloadURL(storageRef);
        return url;
    }
    catch {
        return "";
    }
}
