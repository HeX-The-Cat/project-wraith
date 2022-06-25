import BlogPost from "./components/BlogPost";
import BlogPosts from "./components/DevBlogJson.json";

const DevBlog = () => {
    return (
        <div className=" h-auto transparencyBlue ">
            <h1>
                DevBlog:
            </h1>
            
            {BlogPosts.map((item, index) => {
                return(
                    <BlogPost 
                        key={item.otsikko + index}
                        otsikko={item.otsikko}
                        paivaus={item.paivaus}
                        kirjoitus={item.kirjoitus}
                        youtube={item.youtube}
                        kuva={item.kuva}
                    />
                )
            })}
        </div>
    );
}

export default DevBlog;