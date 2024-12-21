import blogs from "@/app/blogData";
import BlogPreview from "@/components/blogPreview";

export default function Blog() {
  return (
    <div>
      <h1 className="page-title">Blog</h1>
      <p className="page-title">More Coming Soon!</p>
      {blogs.map((blog) => (
        <BlogPreview
          title={blog.title}
          description={blog.description}
          image={blog.image}
          imageAlt={blog.image}
          date={blog.date}
          slug={blog.slug}
          key={blog.key}
        />
      ))}
    </div>
  );
}
