import Image from "next/image";
import getCurrentUser from "./getActions/getCurrentUser";


export default  async function Home() {
  const currentUser = getCurrentUser
  return (
    <main className="flex flex-col">
      <div>
        {}
      </div>
     
    </main>
  );
}
