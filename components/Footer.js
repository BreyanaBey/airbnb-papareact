function Footer () {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 pb-8 bg-gray-100 text-gray-600">

            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">ABOUT</h5>
                <p>How Airbnb works</p>
                <p>Newsroom</p>
                <p>Investors</p>
                <p>Airbnb Plus</p>
                <p>Airbnb Luxe</p>
            </div>

            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">COMMUNITY</h5>
                <p>Accessibility</p>
                <p>Diversity and Belonging</p>
                <p>Guest Referrals</p>
                <p>Airbnb.org</p>
                <p>Gift Cards</p>
            </div>

            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">HOST</h5>
                <p>Host your home</p>
                <p>Host and online experience</p>
                <p>Responsible hosting</p>
                <p>Resource Center</p>
                <p>Community Center</p>
            </div>

            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">Support</h5>
                <p>Our COVID-19 Response</p>
                <p>Help Center</p>
                <p>Cancellation options</p>
                <p>Neigborhood Support</p>
                <p>Trust and Safety</p>
            </div>
        </div>
    );
}

export default Footer;
