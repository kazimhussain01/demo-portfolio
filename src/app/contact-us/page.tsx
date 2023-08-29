import Link from "next/link";
import Image from "next/image";

const contactus = () => {
    return <div>
     <Image src="/contact us.jpg" alt="my-image" width={777} height={270}></Image>
    <h1 style={{ fontFamily: 'Arial', fontSize: '40px'}}>FORM*</h1>
    <center>
    <form action="/submit-form">
    <input type="firstName" placeholder="First Name" style={{ marginLeft: '20px'}}></input>
    <input type="lastName"  placeholder="Last Name" style={{ marginLeft: '80px'}}></input>
    <br></br>
    <br></br>
    
    <input type="country" placeholder="Country" style={{ marginLeft: '20px'}}></input>
    <input type="city"  placeholder="City" style={{ marginLeft: '80px'}}></input>
    <br></br>
    <br></br>
    <input type="adress"  placeholder="Adress" style={{ marginLeft: '20px', width: '53.4%'}}></input>
    <br></br>
    <br></br>
    <input type="phone number"  placeholder="Phone Number" style={{ marginLeft: '20px', width: '53.4%'}}></input>
    <br></br>
    <br></br>
    <input type="email"  placeholder="Email" style={{ marginLeft: '20px', width: '53.4%'}}></input>
    <br></br>
    <br></br>
    <input type="password"  placeholder="Password" maxLength={15} minLength={8} style={{ marginLeft: '20px', width: '53.4%'}}></input>
    <br></br>
    <br></br>
    <Link href="/contact-us/sumbit">
    <button type="submit" style={{ backgroundColor: 'blue', color: 'white', marginLeft: "46%", width: "10.5%" }}>Submit</button>
    </Link>
    </form>
    </center>
    <br></br>
    <Link href="#" className="no-underline"><b>Back to Home Page</b></Link>
    </div>
}


export default contactus