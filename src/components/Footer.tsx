const Footer = () => {
    return (
    <footer className="border-t border-border py-12">
    <div className="container mx-auto px-6">
    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-serif text-xl font-semibold text-foreground">
        <img className="logo" src="/Logo.svg" />
        </p>
        <p className="text-sm text-muted-foreground">
        © 2120 Spacentials - Don't leave without them
        </p>
    </div>
    </div>
    </footer>
    );
};

export default Footer;