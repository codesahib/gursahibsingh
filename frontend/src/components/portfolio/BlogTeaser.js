import React from 'react';
import { Link } from 'react-router-dom';
import thailand from '../../static/img/thailand.jpg';
export default function BlogTeaser() { return (<section className="beyond" id="notes" aria-labelledby="notes-heading">
          <div className="blog-intro"><p className="eyebrow">04 / Blog</p><h2 id="notes-heading">Beyond the code<span className="blue">.</span></h2>
          <p className="beyond-intro">There’s a person<br />behind the commits.</p>
          </div><div className="blog-entry"><Link className="postcard" to="/blogs/thailand"><img src={thailand} alt="Turquoise water, limestone cliffs, and long-tail boats in Thailand" width="1000" height="667" loading="lazy" /><span>Notes from Thailand <span aria-hidden="true">↗</span></span></Link>
          <p className="postcard-caption">From the archive · December 2019<br />A backpack, local food, and a lot of walking.</p>
          </div>
        </section>); }
