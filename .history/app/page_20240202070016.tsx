import Image from "next/image";
import getCurrentUser from "./getActions/getCurrentUser";
import getBlogs from "./getActions/getSuitation";
import News from "./components/News";
import { Blog, User } from "@prisma/client";


export default  async function Home() {
  const currentUser: User =await getCurrentUser()
  const blogs: Blog = await getBlogs()
  return (
    <main className="flex flex-col p-5">
      {blogs?.map((item: any) => (
          <News
          key={item.id}
          data={item}
          currentUser={currentUser}
          />
        ))}
     <h2>h</h2>
    </main>
  );
}
