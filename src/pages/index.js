import React from "react"
import PostList from "./sections/post-list"

// import CSS
import "./../styles/tw.css"
import "./../styles/main.css"

const Home = ({ data }) => (
    <main>
      <div class="container my-12 mx-auto px-4 md:px-12">
        <h1 class="text-center text-3xl font-bold">Tailwind's Blog Posts</h1>
      </div>
      <div class="container my-12 mx-auto px-4 md:px-12">
        <PostList />
      </div>
    </main>
)

export default Home