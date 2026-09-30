import BlogCard from "./BlogCard";
import ButtonYellowWicon from "./ButtonYellowWicon";
import Heading from "./Heading";
import blogThumb from "../assets/blog-thumb.png"
import blogThumb2 from "../assets/blog-thumb2.png"
import blogThumb3 from "../assets/blog-thumb3.png"

const Blog = () => {
  return (
    <section className="py-28">
      <div className="container">
        <div className="flex items-center justify-between pb-18">
          <div className="max-w-140">
            <Heading
              name={"LATEST BLOG"}
              heading={"Learn about our Latest News from Blog"}
            />
          </div>
          <div>
            <ButtonYellowWicon ButtonName={"Veiw All Blog"} />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-7">
          <BlogCard image={blogThumb} day={"02"} month={"MAY"} heading={"Newest Cleaning Tools for House 2024"} paragraph={"Competently repurpose forward benefits conveniently target e-business"} />
          <BlogCard image={blogThumb2} day={"12"} month={"MAY"} heading={"10 Most Popular Cleaning Tips for House"} paragraph={"Competently repurpose forward benefits conveniently target e-business"} />
          <BlogCard image={blogThumb3} day={"25"} month={"MAY"} heading={"Floor Cleaning Use New Equipment"} paragraph={"Competently repurpose forward benefits conveniently target e-business"} />
        </div>
      </div>
    </section>
  );
};

export default Blog;
