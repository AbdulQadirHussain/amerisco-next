import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

const index = () => {

  const routerHook = useRouter();
  const navigateGallery = () => {
    routerHook.push('/blogs');
  }

  const routerHookInfo = useRouter();
  const navigateInfo = () => {
    routerHookInfo.push('/info')
  }
  return (
    <>
      <Head>
        <title> AMERICSO </title>
      </Head>
      <main>
        <div>
          <ul>
            <h1>
              //File Base Routing
              <li><Link href={'/about'}>About</Link></li>
              //File Base Routing
              <li><Link href={'/contact'}>Contact</Link></li>
              //Folder Base Routing
              <li><Link href={'/blogs'}>Blogs</Link></li>
              //Folder Base Routing
              <li> <Link href={'users'}>Users</Link></li>

              //DYNAMIC BUTTON ROUTING
              <li> <button onClick={navigateGallery}>Gallery</button></li>
              <li> <button onClick={navigateInfo}>Info</button></li>         
           </h1>
          </ul>
        </div>
      </main>
    </>
  )
}

export default index