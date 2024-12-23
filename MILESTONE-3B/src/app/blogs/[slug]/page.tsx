import Image from "next/image";
import Comments from "@/components/comment";
import IComment from "@/database/blogSchema";

type Props = {
  params: { slug: string };
};

async function getBlog(slug: string) {
  try {
    // This fetches the blog from an api endpoint that would GET the blog
    const res = await fetch(`http://localhost:3000/api/Blogs/${slug}`, {
      cache: "no-store",
    });
    // This checks that the GET request was successful
    if (!res.ok) {
      throw new Error("Failed to fetch blog");
    }

    return res.json();
  } catch (err: unknown) {
    console.log(`error: ${err}`);
    return null;
  }
}

export default async function Blog({ params: { slug } }: Props) {
  const j: IComment = await getBlog(slug);
  const comList = j["comments"];
  comList.sort((a, b) => a.time.localeCompare(b.time));

  return (
    <div className={"blog-element"}>
      <h1>{j["title"]}</h1>
      <div className={"blog-img"}>
        <Image src={j["image"]} alt={"alt"} width={300} height={300}></Image>
      </div>
      {j["content"]}
      <h2>Comments</h2>
      {comList.map((fcomment) => (
        <Comments
          user={fcomment.user}
          comment={fcomment.comment}
          time={fcomment.time}
        />
      ))}
    </div>
  );
}
