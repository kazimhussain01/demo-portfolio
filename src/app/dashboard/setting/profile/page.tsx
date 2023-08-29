import Image from "next/image"
import Link from "next/link"
const profile = ()=> {
    return <div>
    <center>
    <h1>Profile</h1>
    <h2>Social Profiles Link</h2>
    </center>
    <a href="https://www.youtube.com/channel/UC2hKgQ40Qe1a1WxRPaxNH5A"> 
    <Image src="/youtube.jpg" alt="My-Image" width={200} height={185} style={{ marginLeft: '35px', borderRadius: "13%", overflow: "hidden" }}></Image> 
    </a>
    <a href="https://www.facebook.com/kazimhussain01/">
    <Image src="/facebook.jpg" alt="My-Image" width={200} height={185} style={{ marginLeft: '55px', borderRadius: "13%", overflow: "hidden" }}></Image> 
    </a>
    <a href="https://www.instagram.com/kazim_hussain01/">
    <Image src="/instagram.jpg" alt="My-Image" width={200} height={185} style={{ marginLeft: '55px', borderRadius: "13%", overflow: "hidden" }}></Image> 
    </a>
    <a href="https://twitter.com/kazimhussain01">
    <Image src="/twitter1.jpg" alt="My-Image" width={200} height={190} style={{ marginLeft: '35px', borderRadius: "13%", overflow: "hidden" }}></Image> 
    </a>
    <a href="https://www.linkedin.com/in/kazimhussainofficial/">
    <Image src="/linkedin3.jpg" alt="My-Image" width={200} height={190} style={{ marginLeft: '55px', borderRadius: "13%", overflow: "hidden" }}></Image> 
    </a>
    <a href="https://github.com/kazimhussain01">
    <Image src="/github2.png" alt="My-Image" width={200} height={200} style={{ marginLeft: '55px', borderRadius: "13%", overflow: "hidden" }}></Image> 
    </a>
    <br></br>
    <Link href="./dashboard/setting" className="no-underline" style={{ marginLeft: '10px' }}><b>Back to Setting Page</b></Link>
    </div>
}

export default profile