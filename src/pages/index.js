import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
// import HelloWorld from "./../components/hello-world"

// import CSS
import "./../styles/tw.css"
import "./../styles/main.css"

export const query = graphql`
  query {
    postImage: file(relativePath: { eq: "mountains.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 459) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    },
    authorThumb: file(relativePath: { eq: "thumb1.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 32) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
  }
`

const PostList = (props) => {
  const arrSizeSix = [...Array(6).keys()]
  const posts = arrSizeSix.map(v=>(

    <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

      {/* Article */}
      <article class="overflow-hidden rounded-lg shadow-lg">

        <a href="#">
          <Img alt="Placeholder" className="block h-auto w-full" fixed={props.data.postImage.childImageSharp.fixed} />
        </a>

        <header class="flex items-center justify-between leading-tight p-2 md:p-4">
          <h1 class="text-lg">
            <a class="no-underline hover:underline text-black" href="#">
              Article Title
            </a>
          </h1>
          <p class="text-grey-darker text-sm">
            14/4/19
        </p>
        </header>

        <footer class="flex items-center justify-between leading-none p-2 md:p-4">
          <a class="flex items-center no-underline hover:underline text-black" href="#">
            <Img alt="Placeholder" className="block rounded-full" fixed={props.data.authorThumb.childImageSharp.fixed} />
            <p class="ml-2 text-sm">
              Author Name
            </p>
          </a>
          <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
            <span class="hidden">Like</span>
            <i class="fa fa-heart"></i>
          </a>
        </footer>

      </article>
      {/* END Article */}

    </div>

  ))

  return (
    <div class="flex flex-wrap -mx-1 lg:-mx-4">
      {posts}
    </div>
  )
}

const Home = ({ data }) => (
    <main>
      <div class="container my-12 mx-auto px-4 md:px-12">
        <h1 class="text-center text-3xl font-bold">Tailwind's Blog Posts</h1>
      </div>
      <div class="container my-12 mx-auto px-4 md:px-12">
        <PostList data={data} />
      </div>
    </main>
)

export default Home