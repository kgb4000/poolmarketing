'use client'

import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
} from 'react-share'
import { EmailIcon, FacebookIcon, TwitterIcon } from 'react-share'

const ShareBtn = ({ shareLink }) => {
  return (
    <>
      <div className="">
        <div className="flex flex-row my-2">
          <div className="mr-4">
            <FacebookShareButton url={shareLink}>
              <FacebookIcon size={35} round={true} />
            </FacebookShareButton>
          </div>
          <div className="mr-4">
            <EmailShareButton url={shareLink}>
              <EmailIcon size={35} round={true} />
            </EmailShareButton>
          </div>
          <div className="">
            <TwitterShareButton url={shareLink}>
              <TwitterIcon size={35} round={true} />
            </TwitterShareButton>
          </div>
        </div>
      </div>
    </>
  )
}

export default ShareBtn
