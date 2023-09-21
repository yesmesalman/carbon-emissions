import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <h1>Welcome to the App</h1>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/about/team">About Team</Link></li>
      </ul>
    </>
  )
}

export default HomePage;