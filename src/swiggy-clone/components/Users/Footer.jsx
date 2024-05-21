

export default function Footer() {
  return (
    <>
      <div className="Footer-section">
          <div className="col1">
            
            <h2>Swiggy</h2>
            <p>2024 BundI Technologies<br/>Pvt. Ltd</p>
          </div>
          <div className="col2">
            <h4>Company</h4>
            <ul>
              <li>About</li>
              <li>Careers</li>
              <li>Team</li>
              <li>Swiggy One</li>
              <li>Swiggy Instamart</li>
              <li>Swiggy Genie</li>
            </ul>
          </div>
          <div className="col3">
            <div className="col31">
            <h4>Contact Us</h4>
            <ul>
              <li>Help & Support</li>
              <li>Partners with us</li>
              <li>Ride with us</li>
            </ul>
            </div>
            <div className="col32">
              <h4>Legal</h4>
              <ul>
                <li>Terms & Conditons</li>
                <li>Cookie Policy</li>
                <li>Privacy Policy</li>
                <li>Investor Relations</li>
              </ul>
            </div>
          </div>
          <div className="col4">
            <h4>We deliver to</h4>
            <ul>
              <li>Bangalore</li>
              <li>Vijayawada</li>
              <li>Pune</li>
              <li>Hyderabad</li>
              <li>Delhi</li>
              <li>Mumbai</li>
              <li><select  defaultValue="1"> <option value={'1'} hidden>580 cities</option></select></li>
            </ul>
          </div>
        </div>    
    </>
  )
}
