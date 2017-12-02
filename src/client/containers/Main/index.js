// Main React component, that we'll import in `src/app.js`
//
// Note a few points from this file:
//
// 1.  We're using the format `main/index.js` for this file, which means we
// can simply import 'src/client/containers/main', which will auto-default to index.js.
// This is a useful pattern when you have styles/images to pull from, and you
// want to keep the component tree organised.
//
// 2.  We import SASS and a logo SVG file directly.  Classnames will be hashed
// automatically, and images will be compressed/optimised in production.  File
// names that are made available in the import variable will be identical on
// both the server and browser.
//
// 3.  We're introducing React Router in this component.  In RR v4, routes are
// not defined globally-- they're defined declaratively on components, so we
// can respond to route changes anywhere.
//
// 4.  We're using `react-helmet`, which allows us to set <head> data like
// a <title> or <meta> tags, which are filtered up to the main <Html> component
// before HTML rendering.

// ----------------------
// IMPORTS

/* NPM */

// React
import React from "react";

// Routing via React Router
import { Link, Route, Switch } from "react-router-dom";

// <Helmet> component for setting the page title/meta tags
import Helmet from "react-helmet";

/* ReactQL */

// NotFound 404 handler for unknown routes
import { Redirect } from "kit/lib/routing";

/* App */

// Child React components. Note:  We can either export one main React component
// per file, or in the case of <Home>, <Page> and <WhenFound>, we can group
// multiple components per file where it makes sense to do so
import { Page, WhenNotFound } from "src/client/routes";

import Home from "src/client/containers/Home";
import CreateUser from "src/client/containers/CreateUser"
import SearchFriends from "src/client/containers/SearchFriends";
import UserProfile from "src/client/containers/UserProfile";

// ----------------------

export default () => (
  <div>
    <Helmet
      title="ReactQL application"
      meta={[
        {
          name: "description",
          content: "ReactQL starter kit app"

        }
      ]}
      link={[{
        href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        rel: "stylesheet"
      }]}
    />

    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/page/:name" component={Page} />
      <Route path="/createUser" component={CreateUser} />
      <Route path="/search" component={SearchFriends} />
      <Route path="/userProfile/:userId" component={UserProfile} />
      <Redirect from="/old/path" to="/new/path" />
      <Route component={WhenNotFound} />
    </Switch>

    {/* prettier-ignore */}
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/page/about">About</Link></li>
      <li><Link to="/page/contact">Contact</Link></li>
      <li><Link to="/createUser">Create User</Link></li>
      <li><Link to="/search">Search</Link></li>
      <li><Link to="/userProfile/:userId">Profile</Link></li>
      <li><Link to="/old/path">Redirect from /old/path &#8594; /new/path</Link></li>
    </ul>
    {/* 
    <div className={css.hello}>
      <img src={logo} alt="ReactQL" className={css.logo} />
    </div> */}
  </div>
);
