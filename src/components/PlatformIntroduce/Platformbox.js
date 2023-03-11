import React from 'react'
import './Platformbox.css'

export default function Platformbox() {
  return (
    <div className='Platformbox'>
        <div className="platform-txt">
            <div className="platform-txt-head">New Platform</div>
            <div className="platform-txt-body">Get one of our sports apps, which is only available on</div>
            <div className="platform-txt-footer">
                <div className="platform-txt-footer-txt">Download Apps :</div>
                <div className="platform-txt-footer-icons">
                   <img src="./img/platform/apple.png" alt="" /> 
                   <img src="./img/platform/android.png" alt="" /> 
                </div>
            </div>
        </div>
        <div className="platform-mobilePhone">
            <img src="./img/platform/first.png" className='livescore' alt="" />
            <img src="./img/platform/second.png" className='statistic' alt="" />
        </div>
    </div>
  )
}
