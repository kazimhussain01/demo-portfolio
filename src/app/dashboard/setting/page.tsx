import Image from "next/image"
import Link from "next/link";
const setting = ()=> {
    return (
    <div>
        <center>
        <h1>Setting</h1>
    <Link href="./setting/password" className="no-underline"><b>Password</b></Link>
    <br />
    <Link href="./setting/profile" className="no-underline"><b>Profile</b></Link>
    </center>
    <br></br>
    <Image src="/seti1.jpg" alt="My-Image" width={200} height={195} style={{ marginLeft: '70px' }}></Image> 
    <Image src="/seti2.jpg" alt="My-Image" width={200} height={195} style={{ marginLeft: '240px', borderRadius: "13%", overflow: "hidden" }}></Image> 
    <br></br>
    <Link href="./dashboard" className="no-underline" style={{ marginLeft: '10px' }}><b>Back to Dashboard Page</b></Link>
    </div>
    )
}

export default setting;