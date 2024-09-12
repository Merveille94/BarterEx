import data from "../data.jsx"; // Import the data

const Footer = () => {
    const footerData = data.footerSection[0]; // Access the first item in the footerSection

    return (
        <footer className="relative w-full h-auto text-slate-100 flex items-center justify-center bg-black z-20">
            <div className="container mx-auto flex items-center justify-center p-2">
                <p className="text-xs text-center">{footerData.description}</p>
            </div>
        </footer>
    );
};

export default Footer;
