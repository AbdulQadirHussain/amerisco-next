import { useRouter } from "next/router"
import Image from "next/image";

const info = () => {
    const routerHook = useRouter();
    const navigateHome = () => {
        routerHook.push('/')
    }
  return (
    <>
    <Image
    src="/image.png"
    alt="meta image"
    width={200}
    height={200}
    >        
    </Image>
    
    &nbsp; 
    &nbsp;
    
    <Image
    src={"/next.svg"}
    alt="next.js"
    width={200}
    height={200}
    >
    </Image>
    <button onClick={navigateHome}>Home</button>
    </>
  )
}

export default info
