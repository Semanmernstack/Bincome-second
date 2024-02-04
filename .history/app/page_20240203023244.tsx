import Image from "next/image";
import getCurrentUser from "./getActions/getCurrentUser";

import Newss from "./components/Newss";
import { Blog, User } from "@prisma/client";
import getSituation from "./getActions/getSuitation";


export default  async function Home() {
  const currentUser =await getCurrentUser()
  const blogs: Blog[]  = await getSituation() 
  console.log(blogs)
  return (
    <main className="flex flex-col gap-3 mt-5 items-center justify-center max-w-3xl md:max-w-4xl mx-auto">
      {blogs?.map((item) => (
          <Newss
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
        
     
    </main>
  );
}
