import { Link } from 'react-router-dom';

export function About() {
  return (
    <div>
      <h1>This is the about page</h1>
      <Link to="/">Click to view our home page</Link>
      <Link to="contact">Click to view our contact page</Link>
    </div>
  );
}
