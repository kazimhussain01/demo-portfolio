import Link from "next/link"
import Image from "next/image"
const analytics =  ()=> {
    return <div>
        <center>
    <h1>Analytics</h1>
    <h2>Graph of Analytics</h2>
    </center>
    <Image src= "/dem1.jpg" alt="My-Image" width={210} height={140} style={{ marginLeft: '50px' }}></Image>
    <Image src= "/analytics5.jpeg" alt="Image" width={210} height={140} style={{ marginLeft: '30px'}}></Image>
    <Image src= "/dem3.jpg" alt="My-Image" width={210} height={140} style={{ marginLeft: '30px' }}></Image>
    <br></br>
    <br></br>
    <Link href="./dashboard" className="no-underline" style={{ marginLeft: '10px' }}><b>Back to Dashboard Page</b></Link>
    
    </div> 


}

export default analytics