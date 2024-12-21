import React from "react";
import Image from "next/image";
import style from "./blogPreview.module.css";
import Blog from "@/app/blogData";
import Link from "next/link";

export default function BlogPreview(props: (typeof Blog)[0]) {
  return (
    <div className={style["blog-element"]}>
      <Link href={props.slug}>
        <h3>{props.title}</h3>
        <div className={style["blog-img"]}>
          <Image
            src={props.image}
            alt={props.imageAlt}
            width={300}
            height={300}
          ></Image>
        </div>
        <p>{props.description}</p>
        <p>{props.date}</p>
      </Link>
    </div>
  );
}
