import Image from "next/image";
import getCurrentUser from "./getActions/getCurrentUser";

import News from "./components/News";
import { Blog, User } from "@prisma/client";
import getSituation from "./getActions/getSuitation";


export default  async function Home() {
  const currentUser =await getCurrentUser()
  const blogs: Blog[]  = await getSituation() 
  console.log(blogs)
  return (
    <main className="flex flex-col p-5">
      {blogs?.map((item) => (
          <News
          key={item.id}
          id={item.id}
          name={item.name}
          accident={item.accident}
          description={item.description}
          imageSrc={item.imageSrc}
          userId={item.userId}
          currentUser={currentUser}
          />
        ))}
        <h1>fff</h1>
     
    </main>
  );
}
