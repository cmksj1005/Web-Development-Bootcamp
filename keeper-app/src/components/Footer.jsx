function Footer() {
  const cTime = new Date();
  const cYear = cTime.getFullYear();
  const text = 'copyright';
  const cSymbol = '\u00A9';
  const space = ' ';

  return (
    <footer>
      <p>
        {text} {space} {cSymbol} {space} {cYear}
      </p>
    </footer>
  );
}

export default Footer;
