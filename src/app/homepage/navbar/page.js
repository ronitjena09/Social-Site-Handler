import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div>
        <nav className="navbar  navbar-expand-lg bg-body-tertiary">
          <div className="navbar-left flex gap-2 container-fluid">
            <Link href="/src/components/homepage/navbar">
              <span className="logo-text">Zoho Social</span>
            </Link>
          </div>
          <ul className="navbar-right flex gap-2 bg-body-tertiary">
            <li className="dropdown">
              <Link href="/homepage/navbar/features">
                Features
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link href="/">Publishing</Link>
                </li>
                <li>
                  <Link href="/">Scheduling</Link>
                </li>
                <li>
                  <Link href="/">Monitoring</Link>
                </li>
                <li>
                  <Link href="/">Analytics</Link>
                </li>
                <li>
                  <Link href="/">Collaboration</Link>
                </li>
                <li>
                  <Link href="/">Inbox</Link>
                </li>
                <li>
                  <Link href="/">Integrations</Link>
                </li>
                <li>
                  <Link href="/">Mobile</Link>
                </li>
                <li>
                  <Link href="/">All Features</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/homepage/navbar/pricing">
                Pricing
              </Link>
            </li>
            <li className="dropdown">
              <Link href="/homepage/navbar/solutions">
                Solutions
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link href="/">Agencies</Link>
                </li>
                <li>
                  <Link href="/">Remote Teams</Link>
                </li>
                <li>
                  <Link href="/">Individuals</Link>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <Link href="/homepage/navbar/channels">
                Channels
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link href="/">Facebook</Link>
                </li>
                <li>
                  <Link href="/">X(formerly Twitter)</Link>
                </li>
                <li>
                  <Link href="/">LinkedIn</Link>
                </li>
                <li>
                  <Link href="/">Instagram</Link>
                </li>
                <li>
                  <Link href="/">Google Business Profile</Link>
                </li>
                <li>
                  <Link href="/">YouTube</Link>
                </li>
                <li>
                  <Link href="/">Pinterest</Link>
                </li>
                <li>
                  <Link href="/">TikTok</Link>
                </li>
                <li>
                  <Link href="/">Mastodon</Link>
                </li>
                <li>
                  <Link href="/">All Channels</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/homepage/navbar/nav_social">
                Navigating Social
              </Link>
            </li>
            <li className="dropdown">
              <Link href="/homepage/navbar/resources">
                Resources
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link href="/">User Guide</Link>
                </li>
                <li>
                  <Link href="/">Glossary</Link>
                </li>
                <li>
                  <Link href="/">Videos</Link>
                </li>
                <li>
                  <Link href="/">Webinars</Link>
                </li>
                <li>
                  <Link href="/">Blogs</Link>
                </li>
                <li>
                  <Link href="/">Social Journal</Link>
                </li>
                <li>
                  <Link href="/">Community</Link>
                </li>
                <li>
                  <Link href="/">Whats New</Link>
                </li>
                <li>
                  <Link href="/">FAQs</Link>
                </li>
                <li>
                  <Link href="/">All Resources</Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
