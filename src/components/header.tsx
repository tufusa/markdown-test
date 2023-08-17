import { Link } from "react-router-dom";

export const Header = () => (
  <header>
    <div className="text-3xl font-semibold m-1">ReactMarkdown + Tailwind Test</div>
    <div className="m-2 flex flex-wrap gap-x-10 gap-y-3">
      <LinkItem to="/" text="Home" />
      <LinkItem to="/basic" text="Basic" />
      <LinkItem to="/table" text="Table" />
      <LinkItem to="/checkbox" text="Checkbox" />
    </div>
    <hr />
  </header>
)

const LinkItem = (props: { to: string, text: string }) => (
  <Link to={props.to}
    className="text-lg underline underline-offset-4"
    children={props.text}
  />
)
