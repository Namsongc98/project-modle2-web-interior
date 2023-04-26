import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Đây là file config cá nhân được khởi tạo dự trên firebase
const firebaseConfig = {
    apiKey: "AIzaSyAXDRP7MHbmvIlmbNe5sH_j35v1Lm2VAEI",
    authDomain: "project-img--interior.firebaseapp.com",
    databaseURL: "https://project-img--interior-default-rtdb.firebaseio.com",
    projectId: "project-img--interior",
    storageBucket: "project-img--interior.appspot.com",
    messagingSenderId: "847127612125",
    appId: "1:847127612125:web:66bda2280537c678232934",
    measurementId: "G-2J8PBYM5SV"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Cloud Storage and get a reference to the service
// Nhận tham chiếu đến dịch vụ lưu trữ, được sử dụng để tạo tham chiếu trong bộ chứa lưu trữ của bạn
export const storage = getStorage(app);