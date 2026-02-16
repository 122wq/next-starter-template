import Link from "next/link"


const User = () => {
  return (
    <div>
        <h1 className = "text-5xl">The Users</h1>
        <ul className = "mt-10" style = {{ textDecoration: "underline" }}>
            <li className = "text-blue-500"> <Link href="/dashboard/user/1">User 1</Link> </li>
            <li className = "text-blue-500"> <Link href="/dashboard/user/2">User 2</Link> </li>
            <li className = "text-blue-500"> <Link href="/dashboard/user/3">User 3</Link> </li>
            <li className = "text-blue-500"> <Link href="/dashboard/user/4">User 4</Link> </li>
        </ul>
    </div>
  )
}

export default User