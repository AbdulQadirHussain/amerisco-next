import { useRouter } from 'next/router'
import Link from 'next/link';

const slug = () => {
    const routerHook = useRouter();
    const dynamicRoute = routerHook.query.slug;
    return (
    <>
      // Dynamic Routing
      <h2>
        This is Dynamic Routing {dynamicRoute}
      </h2>
      <Link href={'./'} >Back</Link>
    </>
  )
}

export default slug
