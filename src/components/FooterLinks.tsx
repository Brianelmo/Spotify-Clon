type FooterLink = {
  name: string;
  link: string;
};

function FooterLinks({ name, link }: FooterLink) {
  return (
    <div>
      <ul>
        <li className={"text-white text-xl font-semibold"}>
          <a href={link}>{name}</a>
        </li>
      </ul>
    </div>
  );
}

export default FooterLinks;
