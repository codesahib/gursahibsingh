import {React, useEffect } from 'react'
import { withRouter } from 'react-router-dom'

import './BlogPage.css'

function BlogPage(props) {
    // To resolve cannot update a component while rendering a different component warning
    useEffect(()=>{
        props.show_banner(false)
        props.show_home_link(true)
    })
    
    const blog_name = props.match.params.blog_name;

    return (
        <div id="blogPageComponent">
            {blog_name === "thailand"?
            <div id="blogContainer">
                <h1 class="blog-title">THAILAND 2019 :)</h1>
                <p className="content-para">Hi! This post will cover the basic expenses+itenary+other details about my trip to Thailand in Dec 2019.</p>
                <p className="content-para bold">DISCALIMER: The details or figures are true as on Dec 2019. They might change in future.</p>
                <hr></hr>
                <h3 className="blog-heading">Introduction</h3>
                <p className="content-para"> It was a fairly less thought-over decision to go for Thailand this winter and I would thank the quickness of the decision as it kept out the unnecesaary doubts and questioning. So it was a backpacking style of travel so my itenary and cost would not really suit family trips. But I'm going to mention the extra amount of cost and an alternative itenary for sure.</p>
                <h3 className="blog-heading">Cost</h3>
                <p className="content-para">The entire trip costed me for around 35k but this might not be true for everyone. I didn't eat Indian food and tried every bit of local Thai food so that helped saving the cost. Also, we didn't take a taxi and just relied on metro, "Baht bus" and our feet. But if you are planning to go with your family, you might have to get Indian food because Thai taste doesn't suit Indian tongue plus you'll obviously be taking taxi for travel as backpacking style of travel is not comfortable with kids.</p>
                {/* <h3 className="blog-heading">Accomodation</h3> */}
                <h3 className="blog-heading">Food</h3>
                <p className="content-para">"FoodLand" for salads.
                "7 eleven" for on-the-go shakes/drinks/juices.</p>
                <h6 className="blog-subheading">Indian</h6>
                <ul>
                    <li>Thali = 170-200 BHT (Filling for 2 people)</li>
                    <li>Combo dishes(rice with rajma/kadi/chhole) = 120-150 BHT (Filling for 2 people)</li>
                    <li>Roti = 15-25 BHT</li>
                    <li>Dry veggies = 150-200 BHT</li>
                    <li>Curry veggies = 200-250 BHT</li>
                </ul>
                <h6 className="blog-subheading">Thai</h6>
                <ul>
                    <li>Pad Thai (fried noodles with seafood) = 50-75 BHT</li>
                    <li>Rice combo(with chicken/beef) = 50-75 BHT</li>
                    <li>Seafood Platter = 150-200 BHT</li>
                    <li>Mango rice = 70-120 BHT</li>
                    <li>Smoothies = 50-70 BHT</li>
                    <li>Pancakes = 40-60 BHT</li>
                </ul>

                <h3 className="blog-heading">Local Commute</h3>
                <h6 className="blog-subheading">Pattaya</h6>
                <p className="content-para">So Pattaya has this culture of "Baht bus". It is a pickup style truck with a canopy roof, and 2 bench seats in the back for passengers. It's just similar in operation as Rickshaw where you tell the driver you destination and he tells you the price. The most convinient and cheap option as it's easily available. Plus there's no metro in Pattaya so the other options are taxi and bike taxi. </p>

                <h6 className="blog-subheading">Bangkok</h6>
                <p className="content-para">Metro is there for your rescue. If you're coming from Delhi it'll be cakewalk for you but if not, you might find the number of people at certain stations exceeding the comfortable limit. But keeping this aside, the metro network is well covered and connects all the major spots and markets of city. It also connects the city to airport as well.</p>
                <p className="content-para">Apart from this, there's always a taxi and another thing called "Tuk-Tuk". So this is basically an auto which went to abroad for higher studies. Simply stating, the look & feel is of an auto-rickshaw with a poweful engine and big silencers that roar loud when it accelarates. It's fancy but expensive.</p>
                
                <p className="content-para bold">A special note about renting a bike. You'll need an international driving permit so as to escape without a fine from the police. Also if you are renting a bike, do make sure you make a video of the bike highlighting all the scars and scratches so that the lender won't bother you afterwards. But you can rent a bike in Koh Larn(coral island) without a permit. We did that!</p>

                <h3 className="blog-heading">Itenary</h3>
                <p className="content-para">I'll try to suggest 3 types of itenary which covers almost all kinds of people/groups. </p>
                <h5 className="blog-list-item bold">1. Chill</h5>
                <h5 className="blog-list-item bold">2. Party</h5>
                <h5 className="blog-list-item bold">3. Sightseeing</h5>

                <h3 className="blog-heading">Tips</h3>
                <ul>
                    <li>Master <i className="blog-text-highlight">Google maps</i> and <i className="blog-text-highlight">Google translate</i> skills. These are your primary weapons if you are visiting Thailand where english fluency is a big concern and people are ready to loot you over local commute. Google Maps can help you choose the best option for commute between taxi, metro, walking etc.</li>
                    <li>Get a local sim card. I bought an <i className="blog-text-highlight">AIS</i> sim card there. It had the best plan for a week's trip compared to <i className="blog-text-highlight">TrueMobile</i> and <i className="blog-text-highlight">DTAC</i>. It performed decently well when trying to browse some stuff over video calling. You can get it from the airport after immigration. You don't need international roaming on your exsiting sim.</li>
                    <li>Install <i className="blog-text-highlight">Grab</i> and <i className="blog-text-highlight">ViaBus</i> apps for commute. </li>
                </ul>
            </div>
            : <div class="blog-not-available">Blog not available</div> }
        </div>
    )
}

export default withRouter(BlogPage)