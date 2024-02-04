import Image from "next/image";
import getCurrentUser from "./getActions/getCurrentUser";
import getBlogs from "./getActions/getSuitation";


export default  async function Home() {
  const currentUser =await getCurrentUser()
  const blog =await getBlogs()
  return (
    <main className="flex flex-col">
      <div>
        
      </div>
     
    </main>
  );
}
