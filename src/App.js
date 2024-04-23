import logo from './logo.svg';
import './App.css';
import home from './images/home.png'
import explore from './images/explore.png'
import notification from './images/notification.png'
import comments from './images/comments.png'
import book from './images/bookmark.png'
import communities from './images/communities.png'
import list from './images/list .png'
import prem from './images/prem.png'
import profile from './images/profile.png'
import menu from './images/menu.png'
import my from './images/photo.jpg'
// import my from './images/photo.jpg'
import gallery from './images/gallery.png'
import gif from './images/gif.png'
import smile from './images/smile.png'
import calender from './images/calendar.png'
import loc from './images/placeholder.png'
import men from './images/menu-bar.png'
import Twitter from './images/twitter.png'
import commet1 from './images/comment1.png'
import share from './images/share.png'
import like from './images/like.png'
import poll from './images/poll.png'
import social from './images/social-media.png'




function App() {
  return (
    <>
      <div className="window flex m">

        <div className="left ldimen m cw">
          <ul className="flex fc margin1">
            <l1 ><div className='flex-j-c'><img src={Twitter} alt="" className='icon invert' /> <h3>Twitter</h3></div></l1>
            <l1><div className='flex-j-c'><img src={home} alt="" className='icon' /> <h3>Home</h3> </div></l1>
            <l1><div className='flex-j-c'><img src={explore} alt="" className='icon' /> <h3>Explore</h3> </div></l1>
            <l1><div className='flex-j-c'><img src={notification} alt="" className='icon' /> <h3>Notifications</h3> </div></l1>
            <l1><div className='flex-j-c'><img src={comments} alt="" className='icon' /> <h3>Gork</h3></div></l1>
            <l1><div className='flex-j-c'><img src={list} alt="" className='icon' /> List </div></l1>
            <l1><div className='flex-j-c'><img src={book} alt="" className='icon' /> <h3>Bookmarks</h3> </div></l1>
            <l1><div className='flex-j-c'><img src={communities} alt="" className='icon' /><h3>Communities</h3>  </div></l1>
            <l1><div className='flex-j-c'><img src={prem} alt="" className='icon' /> <h3>Premium</h3> </div></l1>
            <l1><div className='flex-j-c'><img src={profile} alt="" className='icon' /> <h3>Profile</h3></div></l1>
            <l1><div className='flex-j-c'><img src={menu} alt="" className='icon' /><h3>More </h3> </div></l1>
          </ul>
        </div>
        <div className="center cdimen m cw  overflow  ">
          <div className="cont1 flex border pallet-rad pad-20px">

            <div className="center-1   margin1 photo"><img src={my} className='my bor1' alt="" /></div>
            <div className="center-2  dib margin1 b">
              <div className="parts-top div1  ">What is happening ?</div>
              <div className="parts-top div1 blu "><img src="" alt="" />Everyone can reply</div>
              <div className="parts-top d border"></div>

              <div className="parts-top div1  flex  gap-1 ">
                <ul className='flex style margin-t'>
                  <li><img className='small' src={gallery} alt="" /></li>
                  <li><img className='small' src={gif} alt="" /></li>
                  <li><img className='small' src={men} alt="" /></li>
                  <li><img className='small' src={loc} alt="" /></li>
                  <li><img className='small' src={smile} alt="" /></li>
                  <li><img className='small' src={calender} alt="" /></li>
                </ul>
                <button className='button margin-t'>POST</button>

              </div>
            </div>
          </div>
          <div className="cont2  border margin-t pad-20px pallet-rad">

            <div className="e1 flex margin-left-1 ">
              <h4 className=''>Elon Musk</h4>
              <h5 className='grey margin-5'>@Elon Musk 6h ago</h5>
            </div>
            <div className="e2 dimen margin-left-1 margin-t"><p>I spent $44 billion for this app and now Lizard boy just decided to hit copy and paste. It’s personal now. See you in the cage, Zuck.</p></div>
            <div className="e3">
              <ul>
                <li className='flex margin-left-1 gap'>
                  <p className='flex-j-c   '><img className='invert icon-q' src={commet1} alt="" /> 1k</p>
                  <p className='flex-j-c  ' ><img className='invert icon-q' src={like} alt="" /> 1k</p>
                  <p className='flex-j-c '><img className='invert icon-q' src={share} alt="" />  1k</p>
                  <p className='flex-j-c '><img className='invert icon-q' src={poll} alt="" />  1k</p>
                </li>
              </ul>
            </div>

          </div>

          <div className="cont3 border flex-j-c fc margin-t pallet-rad pad-20px">
            <div className="con1 flex-j-c">
              <div className="icon photo margin1  height"><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdALl5Pwb2mrMVMzjqES0ZNXPARVVPvwVaQw&s' className='my bor1' alt="" /></div>
              <div className="text1 ">
                <div className="text-1-1 flex-cont ">

                  <div className='flex space'>
                    <div>Sagar</div>
                    <div><img src={social} className="social" alt="" /></div>
                    <div className='grey'>@Sagarcasm</div>
                  </div>

                  <div>
                    <h2 className='grey'>...</h2>
                  </div>

                </div>
                <div className="text-1-2">Gautam to michel</div>
              </div>
            </div>
            <div className="con2"><img className='car' src="data:image/jpeg;base64,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" alt="" /></div>
            <div className="con3 grey ">From autocar india</div>
            <div className="con4 flex gap-3">
            <p className='flex-j-c gap'><img className='invert icon-q' src={commet1} alt="" />  1k</p>
            <p className='flex-j-c gap'><img className='invert icon-q' src={like} alt="" />  1k</p>
            <p className='flex-j-c gap'><img className='invert icon-q' src={share} alt="" />  1k</p>
            <p className='flex-j-c gap'><img className='invert icon-q' src={poll} alt="" />  1k</p>
             
            </div>
          </div>

          <div className="cont3 border flex-j-c fc margin-t pallet-rad pad-20px ">
            <div className="con1 flex-j-c">
              <div className="icon photo margin1  height"><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdALl5Pwb2mrMVMzjqES0ZNXPARVVPvwVaQw&s' className='my bor1' alt="" /></div>
              <div className="text1 ">
                <div className="text-1-1 flex-cont ">

                  <div className='flex space'>
                    <div>Sagar</div>
                    <div><img src={social} className="social" alt="" /></div>
                    <div className='grey'>@Sagarcasm</div>
                  </div>

                  <div>
                    <h2 className='grey'>...</h2>
                  </div>

                </div>
                <div className="text-1-2">Gautam to michel</div>
              </div>
            </div>
            <div className="con2"><img className='car' src="data:image/jpeg;base64,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" alt="" /></div>
            <div className="con3 grey ">From autocar india</div>
            <div className="con4 flex gap-3">
            <p className='flex-j-c gap'><img className='invert icon-q' src={commet1} alt="" />  1k</p>
            <p className='flex-j-c gap'><img className='invert icon-q' src={like} alt="" />  1k</p>
            <p className='flex-j-c gap'><img className='invert icon-q' src={share} alt="" />  1k</p>
            <p className='flex-j-c gap'><img className='invert icon-q' src={poll} alt="" />  1k</p>
             
            </div>
          </div>

        </div>
        <div className="right rdimen m cw flex-j-c overflow fc">
          <h3>Trending</h3>
          <div className='pallet border flex-j-c-1 fc fonti pallet-rad example'><h3 className=''>#EarthDay</h3><p>A history of the movement by EarthDay.org, where Hayes remains board chair emeritus, says the date of the first Earth Day — April 22, 1970 — was chosen because it fell on a weekday between spring break and final exams and the aim was to attract as many students as possible.</p></div>
          <div className='pallet border flex-j-c fc fonti pallet-rad example'><h3 className=''>#WWERaw</h3><p>We have a developing story: Michael Cole and Pat McAfee are in the ring. Cole talks about how Rhea Ripley had to vacate her Women’s World Championship due to injury. McAfee says for only the fourth time ever, a Battle Royal will determine a new World Champion. The last woman standing will be the brand new Women’s World Champion.</p></div>
          <div className='pallet border flex-j-c fc fonti pallet-rad example'><h3 className=''>#EarthDay</h3><p>A history of the movement by EarthDay.org, where Hayes remains board chair emeritus, says the date of the first Earth Day — April 22, 1970 — was chosen because it fell on a weekday between spring break and final exams and the aim was to attract as many students as possible.</p></div>
        </div>
      </div>
    </>
  );
}

export default App;
