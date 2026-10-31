# About
It is a Django app with React frontend. The frontend can be hosted independently.
 
# How to run?
1. `cd frontend`
2. `npm install`
3. `npm start`

The React frontend now uses the approved personal notebook design. The homepage
orders skills, selected projects, about, and blog notes; `/projects`, `/blogs`, and
`/blogs/thailand` remain available. Theme defaults to dark and saves a visitor's
light/dark choice across pages.

`npm run build` produces the production site for the root of a domain. Configure
your host to serve `index.html` for application routes so direct article links work.
For a GitHub Pages repository subpath, build with `PUBLIC_URL=/repository-name`
and `REACT_APP_ROUTER_MODE=hash`. Hash routing is also selected automatically on
`*.github.io` hosts. Section links support both router modes.

# Useful commands
1. Use `npm audit --force` to update versions.


# STATIC FILES
--------------------------------------------------------------------
-> Served from /apps/<>/static
--------------------------------------------------------------------
# NAVBAR
--------------------------------------------------------------------
-> Doesn't require css
-> Old green color #AEFF00
-> Disabled search box, expansion of projects. Instead created projects home page.
--------------------------------------------------------------------
#MODAL
--------------------------------------------------------------------
-> Single modal container for all cards.
-> JavaScript functionality on home-page.html. No separate files
--------------------------------------------------------------------
# CAROUSEL
-> Everything in home-page.html. Edit images from there only.
--------------------------------------------------------------------
# CARDS
-> Image size : 600x300


