import Link from "next/link"
import Image from "next/image"
const setting = ()=> {
    return <div>
    <center>
    <h1>Password</h1> 
    <h2>Strong Password Method</h2>
    </center>
    <Image src="/pass2.jpg" alt="My-Image" width={220} height={195} style={{ marginLeft: '70px', borderRadius: "13%", overflow: "hidden"  }}></Image> 
    <Image src="/pass1.jpg" alt="My-Image" width={210} height={195} style={{ marginLeft: '215px', borderRadius: "13%", overflow: "hidden"  }}></Image> 
    <br></br>
    <Link href="./dashboard/setting" className="no-underline" style={{ marginLeft: '10px' }}><b>Back to Setting Page</b></Link>
    </div>
}

export default setting