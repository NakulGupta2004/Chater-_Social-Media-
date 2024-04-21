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




function App() {
  return (
    <>
      <div className="window flex m">

        <div className="left ldimen m cw">
          <ul className="flex fc margin1">
            <l1 ><img src={Twitter} alt="" className='icon invert' />  Twitter</l1>
            <l1><img src={home} alt="" className='icon' /> Home</l1>
            <l1><img src={explore} alt="" className='icon' /> Explore</l1>
            <l1><img src={notification} alt="" className='icon' /> Notifications</l1>
            <l1><img src={comments} alt="" className='icon' /> Gork</l1>
            <l1><img src={list} alt="" className='icon' /> List</l1>
            <l1><img src={book} alt="" className='icon' /> Bookmarks</l1>
            <l1><img src={communities} alt="" className='icon' /> Communities</l1>
            <l1><img src={prem} alt="" className='icon' /> Premium</l1>
            <l1><img src={profile} alt="" className='icon' /> Profile</l1>
            <l1><img src={menu} alt="" className='icon' /> More</l1>
          </ul>
        </div>
        <div className="center cdimen m cw   ">
          <div className="cont1 flex border">

            <div className="center-1   margin1 photo"><img src={my} className='my bor1' alt="" /></div>
            <div className="center-2  dib margin1 b">
              <div className="parts-top div1 ">What is happening ?</div>
              <div className="parts-top div1 "><img src="" alt="" />Everyone can reply</div>
              <div className="parts-top d border"></div>

              <div className="parts-top div1  flex  gap ">
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
          <div className="cont2  border margin-t">

            <div className="e1 flex margin-left-1 ">
              <h4 className=''>Elon Musk</h4>
              <h5 className='grey margin-5'>@Elon Musk 6h ago</h5>
            </div>
            <div className="e2 dimen margin-left-1 margin-t"><p>I spent $44 billion for this app and now Lizard boy just decided to hit copy and paste. It’s personal now. See you in the cage, Zuck.</p></div>
            <div className="e3">
              <ul>
                <li className='flex margin-left-1'>
                  <p className='flex '><img className='invert icon-q' src={commet1} alt="" /> 1k</p>
                  <p className='flex margin-left-1-1' ><img className='invert icon-q' src={like} alt="" /> 1k</p>
                  <p className='flex margin-left-1-1'><img className='invert icon-q' src={share} alt="" />  1k</p>
                  <p className='flex margin-left-1-1'><img className='invert icon-q' src={poll} alt="" />  1k</p>
                </li>
              </ul>
            </div>

          </div>
        </div>
        <div className="right rdimen m cw"></div>
      </div>
    </>
  );
}

export default App;
