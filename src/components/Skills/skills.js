import React from 'react'
import './skills.css'
import UTA from '../../assets/UTALogo.png';
import Whitworth from '../../assets/WhitworthLogo.png';


import DeepWes from '../../assets/DeepwesImage.jpeg';

const skills = () => {
  return (
    <section  id="skills">
        <span className='SkillTitle'><h1>More Graphical Data Representation</h1></span>
        <span className='skillDesc'>Some of these graphs can be used to determine a person's chances of becoming homeless</span>
        <div className="skillBars"> 
            <div className='SkillbarText'>
            </div>
        </div>
    </section>
//    <section id='skills'>
//          <span className="SkillTitle"><h1>My Work Experience</h1></span>
//          <span className="skillDesc">The various projects involve working on both the front-end and the back-end while utilizing Python, Mysql, Javascript, HTML, React.js, CSS and CRUD processes with the Django Framework<br/></span>
//          <div className="skillBars">
//                 <div className="skillBar">
//                      <img src={Whitworth} alt="WhitworthLogo" className="skillBarImg"/>
//                 <div className='skillBarText'>
//                     <h2>
//                         Whitworth University
//                     </h2>
//                     <p>Currently working to develop an readiness check for Math and Computer Science department, and has developed a user-friendly,     secure website for incoming freshmen to get tested on their Mathematics and Chemistry knowledge; Leveraging Next.js, CSS, JavaScript, and the Django framework which helps the site facilitate CRUD operations and incorporate a robust authentication system, and providing an admin portal will be included to manage user settings and content.
// Site for viewing:- https://whitworth.vercel.app/</p>
//                 </div>
//             </div>
//             <div className="skillBar">
//                 <img src={UTA} alt="UTALogo" className='skillBarImg'/>
//                 <div className='skillBarText'>
//                     <h2>
//                         The University Of Texas At Arlington 
//                     </h2>
//                     <p><h3>Peer Research Navigator</h3>Concentrate on locating research-related resources and helping and advising students on how to use the library website to identify certain topics that are urgently required. Students may easily access the chat system 24 hours a day, 7 days a week, and also assists with research and citations. </p>
//                 </div>
//             </div>
//             <div className="skillBar">
//                 <img src={DeepWes} alt="Deepwes" className='skillBarImg'/>
//                 <div className='skillBarText'>
//                     <h2>
//                         DeepWes Technologies
//                     </h2>
//                     <p>1. Worked on a card that uses NFC technology to eliminate hassles and replace visiting cards, a creative way to interact and connect in place of conventional cards.<br/>
// 2. Haggle Bot, a bot used for in-person negotiations with clients wherein the best bet wins, satiating the business with a variety of purchase outcomes, most of which are larger than the margin.</p>
//                 </div>
//             </div>
//          </div>
//    </section>
//   )
  )
}

export default skills
