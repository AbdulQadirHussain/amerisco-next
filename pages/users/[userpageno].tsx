import { useRouter } from "next/router"

const userpageno = () => {
    const router = useRouter();
    const users = router.query.userpageno;
    return (
    <>
    <h1>This is use router index {users} </h1>
    </>
  )
}

export default userpageno