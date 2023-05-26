// import firebase from 'firebase/compat/app';
import 'firebase/storage';
// import { firebaseConfig } from './firebaseConfig';
import {storage} from './firebaseConfig';
import { ref, getDownloadURL } from 'firebase/storage';
// firebase.initializeApp(firebaseConfig);


async function uploadImage(file) {

}

async function getImageUrl(filename) {
  // // const fileRef = storageRef.child("/images/" + file.name);
  let url = ""
  await getDownloadURL(ref(storage,'images/' + filename)).then((downloadURL) => {
    url = downloadURL;
  }).catch((error) => {
    console.log(error);
  })
  return url;
}

export { uploadImage, getImageUrl };