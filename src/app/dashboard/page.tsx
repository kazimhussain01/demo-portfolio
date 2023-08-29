import Link from "next/link"
import Image from "next/image";

const DashBoard = () => {
    return <div>
      <center>
      <h1>Dashboard</h1>
      <Link href="./dashboard/analytics" className="no-underline"><b>Analytics</b></Link>
      <br />
      <Link href="./dashboard/setting" className="no-underline"><b>Setting</b></Link>
      </center>
      <h2>Lorem Description</h2>
      
<h6>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget velit non metus 
dignissim feugiat. In hac habitasse platea dictumst. Suspendisse sit amet metus nec leo 
hendrerit vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada 
fames ac turpis egestas. Sed tristique mollis enim, vel congue lorem suscipit nec. 
Suspendisse in mauris non sapien fermentum eleifend. Maecenas eget leo vel massa imperdiet
pretium non non leo. Pellentesque habitant morbi tristique senectus et netus et malesuada 
fames ac turpis egestas.

Proin feugiat, justo ac mattis sodales, velit ipsum bibendum nisi, quis mollis sapien sapien 
id purus. Etiam tincidunt nulla ut massa bibendum, a ullamcorper felis pharetra. Sed auctor 
enim sapien, vel fermentum lectus vestibulum sit amet. Integer mattis, leo vitae commodo
tincidunt, massa quam efficitur libero, non laoreet dolor nisl a eros. Vivamus tincidunt 
diam et turpis cursus, nec feugiat enim malesuada. Fusce a nisi vitae odio pellentesque 
consequat eget quis nibh. Nullam at justo ac ante consectetur sollicitudin. Vivamus pretium 
blandit arcu, quis malesuada magna auctor vel. Nam et velit vel mi pretium efficitur. 
Sed finibus iaculis ligula, non sagittis dolor venenatis id. Sed ut metus vitae tellus 
ultrices tincidunt vel quis est. Nam sodales tellus vel massa dapibus consequat. Suspendisse 
dignissim enim quis magna ullamcorper, vitae bibendum nisi tincidunt. Donec luctus tellus 
ante, quis vehicula massa dignissim vel.
</h6> 
    <Link href="#" className="no-underline"><b>Back to Home Page</b></Link>
    </div>;
  };

  export default DashBoard;