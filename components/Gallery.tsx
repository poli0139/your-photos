// import styles from "@/styles/button.module.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";

export default function Gallery() {
  const [pictures, setPictures] = useState([]);
  useEffect(() => {
    fetchPictures();
  }, []);
  const fetchPictures = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/albums/1/photos")
      .then((res) => {
        console.log(res);
        setPictures(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <section>
      <div className="img-container">
        {pictures.map((picture) => (
          <div className="picture" key={picture.id}>
            {/* <Image
              src={picture.url}
              alt={picture.title}
              width="300"
              height="500"
            ></Image> */}
          </div>
        ))}
      </div>
    </section>
  );
}
