import products from "../data.json";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/config.js";

const sendJSONToFirebase = async () => {
  try {
    products.forEach(async (product) => {
      const docRef = await addDoc(collection(db, "products"), {
        title: product.title,
        author: product.author,
        category: product.category,
        volume: product.volume,
        price: product.price,
        pictureURL: product.pictureURL,
        description: product.description,
        stock: product.stock,
      });
      console.log("Document written with ID: ", docRef.id);
    });
  } catch (err) {
    console.log(err);
  }
};

export default sendJSONToFirebase;
