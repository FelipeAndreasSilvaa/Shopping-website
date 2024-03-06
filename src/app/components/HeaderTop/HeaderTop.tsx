import React from 'react'

import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

export default function HeaderTop() {
  return (
    <div className='border-b -border-gray-200 hidden sm:block'>
      <div className="container py-4">
        <div className="flex justify-between items-center">
          <div className="hideen lg:flex gap-1">
            <div className="header_top__icon_wrapper">
              <FaFacebookSquare />
            </div>{/*header_top__icon_wrapper*/}
            <div className="header_top__icon_wrapper">
              <FaInstagramSquare />
            </div>{/*header_top__icon_wrapper*/}
            <div className="header_top__icon_wrapper">
              <FaLinkedin />
            </div>{/*header_top__icon_wrapper*/}
            <div className="header_top__icon_wrapper">
              <FaTwitterSquare />
            </div>{/*header_top__icon_wrapper*/}
          </div>{/*hideen lg:flex gap-1*/}

          <div className="text-gray-500 text-[12px">
              <b>FREE SHIPPING</b> THIS WEEK ORDER OVER = $55
          </div>{/*text-gray-500 text-[12px*/}

          <div className="flex gap-4">
          <select name="currency" id="currency" className='text-gray-500 text-[12px] w-[70px]'>
                <option value="USD $"> USD $</option>
                <option value="EURO">EURO </option>
                <option value="INR">INR</option>
            </select>
            <select name="language" id="language" className='text-gray-500 text-[12px] w-[70px]'>
                <option value="es"> English</option>
                <option value="pt"> Portuguese</option>
            </select>
          </div>{/*flex gap-4"*/}

        </div>{/*flex justify-between items-center*/}
      </div>{/*hideen lg:flex gap-1*/}
    </div>
  )
}
