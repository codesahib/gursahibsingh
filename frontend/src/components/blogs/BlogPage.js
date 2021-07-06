import React from 'react'
import { withRouter } from 'react-router-dom'

function BlogPage(props) {
    props.show_banner(false)
    props.show_home_link(true)
    
    console.log(props.match.params.blog_name)
    return (
        <div>
            This is blog page
        </div>
    )
}

export default withRouter(BlogPage)