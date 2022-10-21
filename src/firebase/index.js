import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyAUyUsh3kFrt-_OdiAEWvUsDsStavoqpU8",
	authDomain: "testalmaz-b24d1.firebaseapp.com",
	databaseURL: "https://testalmaz-b24d1-default-rtdb.firebaseio.com",
	projectId: "testalmaz-b24d1",
	storageBucket: "testalmaz-b24d1.appspot.com",
	messagingSenderId: "723854823495",
	appId: "1:723854823495:web:f5f45f95eeb54a79bb6162"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const storage  = getStorage(app)