// SellOnline.js
import React from 'react';


import DifferentComponent from '../component/DifferentComponent';
 
import SupportComponent from '../component/SupportComponent';


import CardVideo from '../component/CardVideo';
import CardHeader from '../component/CardHeader';

import SloganCard from '../component/SloganCard';
import '../App.css';
import '../Sidebar.css';
import Growbusiness from '../component/Growbusiness';
import Passingfeatures from '../component/Passingfeatures';
import VideoContainer from '../component/VideoContainer';
import ParentComponent from '../component/ParentComponent';
function SellOnline() {
 return(
  <div>
<DifferentComponent />
<ParentComponent />
<CardHeader />
<CardVideo />
<SloganCard />
<VideoContainer />
<Growbusiness />
<Passingfeatures />

<SupportComponent />
 {/* <Footer /> */}

  </div>
 )
}

export default SellOnline;
