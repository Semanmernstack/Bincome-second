import Image from "next/image";
import getCurrentUser from "./getActions/getCurrentUser";

import News from "./components/News";
import { Blog, User } from "@prisma/client";
import getSituation from "./getActions/getSuitation";


export default  async function Home() {
  const currentUser: User =await getCurrentUser()
  const blogs: Blog = await getSituation()
  return (
    <main className="flex flex-col p-5">
      {blogs?.map((item: any) => (
          <News
          key={item.id}
          data={item}
          currentUser={currentUser}
          />
        ))}
     
    </main>
  );
}
