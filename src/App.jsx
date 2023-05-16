import './App.css'

function App() {

  return (
    <>
      <div className="NavBar">
        <div id='logo'>
          <img src="src/img/Logo.png" alt=""/>
        </div>
        <div className='BarRight'>
          <a href="#">About us</a>
          <a href="#">Services</a>
          <a href="#">Use Cases</a>
          <a href="#">Pricing</a>
          <a href="#">Blog</a>
          <button>Request a quote</button>
        </div>
      </div>
      <div className='Header'>
        <div className='TitleText'>
          <h1>Navigating the <br/>digital landscape <br/>for success</h1>
          <p>Our digital marketing agency helps businesses <br/>grow and succeed online through a range of <br/>services including SEO, PPC, social media marketing, <br/>and content creation.</p>
          <button>Book a consulation</button>
        </div>
        <div className='HeaderIllustration'>
          <img src="src/img/Illustration.png" alt="Illustration" />
        </div>
      </div>
      <div className='Logotypes'>
        <img src="src/img/Company logo.png" alt="" />
        <img src="src/img/Company logo(1).png" alt="" />
        <img src="src/img/Company logo(2).png" alt="" />
        <img src="src/img/Company logo(3).png" alt="" />
        <img src="src/img/Company logo(4).png" alt="" />
        <img src="src/img/Company logo(5).png" alt="" />
      </div>
      <div className='Services'>
        <h2>Services</h2>
        <p>At our digital marketing agency, we offer a range of services to <br/>help businesses grow and succeed online. These services include:</p>
      </div>
      <div className='ServicesBlock'>
        <div className='CardSelection1'>
          <div className="Card1" id='BlockNum1'>
            <div className='BlockText1'>
              <p>Search engine <br/>optimization</p>
              <div id='LearnMore'>
                <img src="src/img/icon(1).png" alt="" href='#'/>
                <a href='#'>Learn more</a>
              </div>
            </div>
            <img src="src/img/elements1.png" alt="" />
          </div>
          <div className="Card1" id='BlockNum2'>
            <div className="BlockText1">
              <p>Pay-per-click <br/>advertising</p>
              <div id='LearnMore'>
                <img src="src/img/icon(1).png" alt="" />
                <a href='#'>Learn more</a>
              </div>
            </div> 
            <img src="src/img/elements2.png" alt="" href='#'/>
          </div>
        </div>
        <div className='CardSelection2'>
          <div className="Card2" id='BlockNum3'>
            <div className='BlockText1'>
              <p>Social Media <br/>Marketing</p>
              <div id='LearnMore3'>
                <img src="src/img/icon(2).png" alt="" href='#' />
                <a href='#'>Learn more</a>
              </div>
            </div>
            <img src="src/img/elements3.png" alt=""/>
          </div>
          <div className="Card2" id='BlockNum4'>
            <div className='BlockText1'>
              <p>Email <br/>Marketing</p>
              <div id='LearnMore'>
                <img src="src/img/icon(1).png" alt="" href='#'/>
                <a href='#'>Learn more</a>
              </div>
            </div>
            <img src="src/img/elements4.png" alt="" />
          </div>
        </div>
        <div className='CardSelection3'>
          <div className="Card3" id='BlockNum5'>
            <div className="BlockText1">
              <p>Content <br/>Creation</p>
              <div id='LearnMore'>
                <img src="src/img/icon(1).png" alt="" href='#'/>
                <a href='#'>Learn more</a>
              </div>
            </div>
            <img src="src/img/elements5.png" alt=""/>
          </div>
          <div className="Card3" id='BlockNum6'>
            <div className='BlockText1'>
              <p>Analytics and <br/>Tracking</p>
              <div id='LearnMore6'>
                <img src="src/img/icon(2).png" alt="" href='#'/>
                <a href='#'>Learn more</a>
              </div>
            </div>
            <img src="src/img/elements6.png" alt=""/>
          </div>
        </div>
      </div>
      <div className="CtaBlock">
        <div className="CtaText">
          <h2>Let's make things happen</h2>
          <p>Contact us today to learn more about how our digital <br/>marketing services can help your business grow and <br/>succeed online.</p>
          <button>Get your free proposal</button>
        </div>
        <img src="src/img/proposal.png" alt="" />
      </div>
      <div className='CaseStudiesBlock'>
        <div className='CaseStudy'>
          <p>For a local restaurant, we <br/>implemented a targeted PPC <br/>campaign that resulted in a 50% <br/>increase in website traffic and a <br/>25% increase in sales.</p>
          <a href='#'>Learn More</a>
          <img src="src/img/icon(1).png" alt="" />
        </div>
        <div className='CaseStudy'>
          <p>For a B2B software company, we <br/>developed an SEO strategy that <br/>resulted in a first page ranking <br/>for key keywords and a <br/>200% increase in organic traffic.</p>
          <a href='#'>Learn More</a>
          <img src="src/img/icon(1).png" alt="" />
        </div>
        <div className='CaseStudy'>
          <p>For a national retail chain, we <br/>created a social media <br/>marketing campaign that <br/>increased followers by 25% and generated a 20% increase in <br/>online sales.</p>
          <a href="#">Learn More</a>
          <img src="src/img/icon(1).png" alt="" />
        </div>
      </div>
      <div className='WorkingProcess'>
        <h2>Our Working Process</h2>
        <p>Step-by-Step Guide to Achieving <br/>Your Business Goals</p>
      </div>
      <div className="CardBlock">
        <div className="CardNumbers">
          <div className="CardNumberLeft">
            <h2>01</h2>
            <p>Consultation</p>
          </div>
        </div>
        <div className="CardNumbers">
          <div className="CardNumberLeft">
            <h2>02</h2>
            <p>Research and Strategy Development</p>
          </div>
        </div>
        <div className="CardNumbers">
          <div className="CardNumberLeft">
            <h2>03</h2>
            <p>Implementation</p>
          </div>
        </div>
        <div className="CardNumbers">
          <div className="CardNumberLeft">
            <h2>04</h2>
            <p>Monitoring and Optimization</p>
          </div>
        </div>
        <div className="CardNumbers">
          <div className="CardNumberLeft">
            <h2>05</h2>
            <p>Reporting and Communication</p>
          </div>
        </div>
        <div className="CardNumbers">
          <div className="CardNumberLeft">
            <h2>06</h2>
            <p>Continual Improvement</p>
          </div>
        </div>
      </div>
      <div className='TeamMeet'>
        <h2>Team</h2>
        <p>Meet the skilled and experienced team behind our <br/>successful digital marketing strategies</p>
      </div>
      
      <div className="GroupOfCards">
        <div className="RowCards">
          <div className="Card">
            <img  id='SocialIcon' src="src/img/person/Social icon.png" alt="" />
            <img src="src/img/person/Persoon.png" alt="" />
            <div className="LinePerson"></div>
            <p>10+ years of experience in digital <br/>marketing. Expertise in SEO, PPC,<br/> and content strategy</p>
          </div>
          <div className="Card">
          <img  id='SocialIcon' src="src/img/person/Social icon.png" alt="" />
            <img src="src/img/person/Picture and name.png" alt="" />
            <div className="LinePerson"></div>
            <p>7+ years of experience in project <br/>management and team leadership. <br/>Strong organizational and <br/>communication skills</p>
          </div>
          <div className="Card">
          <img  id='SocialIcon' src="src/img/person/Social icon.png" alt="" />
            <img src="src/img/person/Picture and name4.png" alt="" />
            <div className="LinePerson"></div>
            <p>5+ years of experience in SEO and <br/>content creation. Proficient in <br/>keyword research and on-page <br/>optimization</p>
          </div>
        </div>
        <div className="RowCards">
          <div className="Card">
          <img  id='SocialIcon' src="src/img/person/Social icon.png" alt="" />
            <img src="src/img/person/Picture and name2.png" alt="" />
            <div className="LinePerson"></div>
            <p>3+ years of experience in paid <br/>search advertising. Skilled in <br/>campaign management and <br/>performance analysis</p>
          </div>
          <div className="Card">
          <img  id='SocialIcon' src="src/img/person/Social icon.png" alt="" />
            <img src="src/img/person/Persoon1.png" alt="" />
            <div className="LinePerson"></div>
            <p>4+ years of experience in social <br/>media marketing. Proficient in <br/>creating and scheduling content, <br/>analyzing metrics, and building <br/>engagement</p>
          </div>
          <div className="Card">
          <img  id='SocialIcon' src="src/img/person/Social icon.png" alt="" />
            <img src="src/img/person/Picture and name1.png" alt="" />
            <div className="LinePerson"></div>
            <p>2+ years of experience in writing <br/>and editing <br/>Skilled in creating compelling, SEO-<br/>optimized content for various <br/>industries</p>
          </div>
        </div>
      </div>
      <button id='SeeAllTeam'>See all team</button>
      <div className='ContactUs'>
        <h2>Contact Us</h2>
        <p>Connect with Us: Let's Discuss Your <br/>Digital Marketing Needs</p>
      </div>
      <div className="ContactForms">
        <div className='LeftContactForms'>
          <div className='RadioButton'>
            <input type="radio" id="radioButton1" name="radioGroup" value="option1" />
            <label htmlFor="radioButton1">Say Hi</label>
            <br />
            <input type="radio" id="radioButton2" name="radioGroup" value="option2" />
            <label htmlFor="radioButton2">Get a Quote</label>
          </div>
          <div className='ContactInfo'>
            <p>Name</p>
            <input type="text" placeholder='Name'/>
            <p>Email*</p>
            <input type="text" placeholder='Email'/>
            <p>Message*</p>
            <input id='InputContact' type="text" placeholder='Message' />
            <button>Send Message</button>
          </div>
        </div>
        <img src="src/img/Mask Group.png" alt="" />
      </div>
      <div className='PositiviusEnd'>
        <div className="ContactPls">
          <p id='Yellowcontact'>Contact us:</p>
          <p>Email: info@Positivius.com</p>
          <p>Phone: 555-567-8901</p>
          <p>Adress: 1234 Main st<br/>Moonstone City, Stardust State 12345</p>
        </div>
        <div className="ContactRight">
          <input type="text" placeholder='Email'/>
          <button>Subscribe to news</button>
        </div>
        <div className="EndInfo">
          <p>© 2023 Positivus. All Rights Reserved.</p>
        </div>
      </div>
    </>
  )
}

export default App
