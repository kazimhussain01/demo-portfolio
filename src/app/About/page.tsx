import Link from "next/link";
import Image from "next/image";

export default function(){
    return <div>
    <center>
    <h1 style={{fontFamily: "Consolas"}}>About Us</h1>
    <div className="container"></div>
    
    <Image src="/aboutuspic1.png" alt="Image description" width={210} height={153} style={{borderRadius: '50%'}}></Image>
   <div className="reduceSpace"></div>
    
    <h4 style={{fontFamily: 'Consolas'}}>Thanks for Visiting my Website. I am a Kazim Hussain!</h4>
    <div className="space"></div>
    
    <h6 style={{fontFamily: "Consolas"}}>I am a Social Media Marketer, 
    SEO (Search Engine Optimization) Professional & Video Editor. I have much experience 
working with Youtube Marketing, Guest Post, WordPress Websites, Facebook Ads, Google 
Listening & WhatsApp Marketing & more than 2-year experience in the industry, I Provide 
in one Prefect Marketing Solutions for any Business. I also do Website audits & Keyword 
research. I Carefully follow the latest trends & Innovations in the Feild of IT & Currently
Learning Web 3.0 & MeterVerse Technology. So, feel free to contact me. Thank You!</h6>
</center>
    
    <Link href="#" className="no-underline"><b>Back to Home Page</b></Link>
</div>
}