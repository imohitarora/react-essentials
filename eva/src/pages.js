import React from "react";
import { Link, useLocation, Outlet } from "react-router-dom";

export function Home() {
  return (
    <>
      <h1>Home</h1>
      <nav>
        <Link to="about"> About </Link>
        <Link to="events"> Events </Link>
        <Link to="contact"> Contact </Link>
      </nav>
    </>
  );
}

export function About() {
  return (
    <>
      <h1>About</h1>
      <Outlet />
    </>
  );
}
export function Events() {
  return (
    <>
      <h1>Events</h1>
    </>
  );
}
export function Contact() {
  return (
    <>
      <h1>Contact</h1>
    </>
  );
}

export function Services() {
  return (
    <div>
      <h2>Services</h2>
    </div>
  );
}
export function CompanyHistory() {
  return (
    <div>
      <h2>CompanyHistory</h2>
    </div>
  );
}
export function Location() {
  return (
    <div>
      <h2>Location</h2>
    </div>
  );
}

export function Woopse404() {
  const location = useLocation();
  return (
    <>
      <h1>Resource not found at {location.pathname}</h1>
    </>
  );
}
