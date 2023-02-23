import React from "react";
import styles from "@/styles/singleUser.module.scss";
import { PT_Serif } from "@next/font/google";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Nav from "@/components/Nav";
import Links from "@/components/Links";
import UserStats from "@/components/userStatistics";
import FollowButton from "@/components/Button";
import Gallery from "@/components/Gallery";

const myFont = PT_Serif({ subsets: ["latin"], weight: "400" });

export default function User() {
  const router = useRouter();
  const userId = router.query.userid;
  const [user, setUser] = useState([]);

  useEffect(() => {
    // console.log(userId);
    fetchUser(userId);
  }, [userId]);

  const fetchUser = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        setUser(res);
      });
  };

  return (
    <section className={`${myFont.className} ${styles.body}`}>
      <Nav></Nav>
      <h1>{user.name}</h1>
      <div className="userInfoContainer">
        <Links
          email={user.email}
          website={user.website}
          phone={user.phone}
        ></Links>
        <FollowButton></FollowButton>
        <UserStats></UserStats>
        <Gallery></Gallery>
      </div>
    </section>
  );
}
