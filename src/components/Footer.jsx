function Footer() {
  return (
    <footer className="border-top bg-background-dark py-4 text-center">
      <div className="container">
        <p className="small text-white mb-0">
          © {new Date().getFullYear()} Sahrada. Built with React.
        </p>
      </div>
    </footer>
  );
}

export default Footer;