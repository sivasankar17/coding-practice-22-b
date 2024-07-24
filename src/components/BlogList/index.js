// Write your JS code here

import BlogItem from '../BlogItem'

import './index.css'

const BlogList = props => {
  const {blogList} = props

  return (
    <ul className="blog-list">
      {blogList.map(eachBlog => (
        <BlogItem key={eachBlog.id} blogDetails={eachBlog} />
      ))}
    </ul>
  )
}

export default BlogList
