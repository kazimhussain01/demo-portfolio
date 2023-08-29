import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div>
 <nav>
  <ul>
    <b>
      <div className="flex justify-center gap-10 py-3" style={{fontFamily: "Consolas"}}>
    <li><Link href="dashboard">Dashboard</Link></li>
    <li><Link href="About">About</Link></li>
    <li><Link href="contact-us">Contact</Link></li>
    </div>
    </b>
  </ul>
</nav>
<br></br>
<br></br>
    <Image className="px-10 ml-3 -mt-8" src="/home.jpg" alt="home" width={770} height={415}></Image>
    </div>
  )  
};