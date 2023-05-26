// import firebase from 'firebase/compat/app';
import 'firebase/storage';
// import { firebaseConfig } from './firebaseConfig';
import {storage} from './firebaseConfig';
// firebase.initializeApp(firebaseConfig);


async function uploadVideo(file) {

}

async function getVideoUrl(filename) {
    // // const fileRef = storageRef.child("/images/" + file.name);
    let url = ""
    await getDownloadURL(ref(storage,'videos/' + filename)).then((downloadURL) => {
      url = downloadURL;
    }).catch((error) => {
      console.log(error);
    })
    return url;
  }

export { uploadVideo, getVideoUrl };