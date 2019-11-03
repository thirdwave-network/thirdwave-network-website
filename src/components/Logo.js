import React from 'react'

/**
 * An inline SVG for thirdwave.network Logo with aria labels
 *
 * @param {String} color dark or light
 */
const Logo = ({ color }) =>
  color === 'dark' ? (
    <svg xmlns="http://www.w3.org/2000/svg" width="230px" height="35px" viewBox="0 0 230 35" >
      <title>thirdwave.network</title>
      <g>
      <g id="typography">
        <g>
          <path fill="#FFFFFF" d="M66.409,3.796c0.524,0,0.787,0.412,0.787,0.862c0,0.45-0.225,0.937-0.787,0.937H59.96V30.38
            c0,0.563-0.487,0.825-0.938,0.825c-0.487,0-0.938-0.263-0.938-0.825V5.595h-6.524c-0.487,0-0.787-0.45-0.787-0.899
            c0-0.45,0.3-0.9,0.787-0.9H66.409z"/>
          <path fill="#FFFFFF" d="M84.03,17.856H72.595V30.38c0,0.563-0.45,0.825-0.938,0.825c-0.45,0-0.938-0.263-0.938-0.825V4.583
            c0-0.563,0.487-0.787,0.938-0.787c0.487,0,0.938,0.225,0.938,0.787v11.548H84.03V4.583c0-0.563,0.487-0.787,0.938-0.787
            c0.487,0,0.938,0.225,0.938,0.787V30.38c0,0.563-0.45,0.825-0.938,0.825c-0.45,0-0.938-0.263-0.938-0.825V17.856z"/>
          <path fill="#FFFFFF" d="M91.828,4.583c0-0.563,0.487-0.787,0.938-0.787c0.487,0,0.938,0.225,0.938,0.787V30.38
            c0,0.563-0.45,0.825-0.938,0.825c-0.45,0-0.938-0.263-0.938-0.825V4.583z"/>
          <path fill="#FFFFFF" d="M99.626,4.583c0-0.412,0.3-0.787,0.825-0.787h6.411c4.237,0,7.912,1.762,7.912,7.274
            c0,4.724-2.7,6.674-6.112,7.161l6,11.623c0.074,0.15,0.112,0.301,0.112,0.451c0,0.486-0.375,0.937-1.012,0.937
            c-0.451,0-0.863-0.75-1.163-1.313l-5.887-11.511h-5.212V30.38c0,0.563-0.45,0.825-0.938,0.825c-0.45,0-0.938-0.263-0.938-0.825
            V4.583z M101.501,5.595v11.099h5.361c3.563,0,6.037-1.575,6.037-5.586c0-3.975-2.475-5.513-6.037-5.513H101.501z"/>
          <path fill="#FFFFFF" d="M126.509,3.796c4.237,0,7.574,2.137,7.574,7.874v11.662c0,5.736-3.337,7.874-7.574,7.874h-6.637
            c-0.524,0-0.899-0.376-0.899-0.788V4.583c0-0.412,0.375-0.787,0.899-0.787H126.509z M120.848,5.595v23.809h5.661
            c3.562,0,5.699-1.912,5.699-6.073V11.669c0-4.162-2.138-6.074-5.699-6.074H120.848z"/>
          <path fill="#FFFFFF" d="M164.564,30.755c-0.149,0.45-0.637,0.675-1.087,0.675s-0.938-0.225-1.013-0.675l-3.862-14.023
            l-3.861,14.023c-0.113,0.45-0.563,0.675-1.051,0.675c-0.487,0-0.937-0.225-1.05-0.675l-7.424-25.909
            c-0.037-0.113-0.037-0.15-0.037-0.263c0-0.487,0.525-0.787,1.013-0.787c0.374,0,0.749,0.187,0.862,0.563l6.636,23.696l3.825-14.21
            c0.112-0.488,0.563-0.75,1.012-0.75c0.413,0,0.9,0.263,1.051,0.75l3.937,14.21l6.562-23.696c0.113-0.375,0.487-0.563,0.862-0.563
            c0.487,0,1.013,0.3,1.013,0.787c0,0.113,0,0.15-0.038,0.263L164.564,30.755z"/>
          <path fill="#FFFFFF" d="M171.057,30.38c0-0.074,0-0.149,0.038-0.225l8.024-25.91c0.149-0.45,0.562-0.675,1.049-0.675
            c0.451,0,0.901,0.226,1.051,0.675l7.949,25.91c0,0.075,0.037,0.112,0.037,0.225c0,0.449-0.563,0.825-1.087,0.825
            c-0.338,0-0.638-0.15-0.751-0.563l-1.837-5.962h-10.798l-1.8,5.962c-0.15,0.412-0.451,0.563-0.825,0.563
            C171.619,31.205,171.057,30.904,171.057,30.38z M185.005,22.956l-4.837-16.011l-4.948,16.011H185.005z"/>
          <path fill="#FFFFFF" d="M188.091,4.846c-0.038-0.075-0.038-0.15-0.038-0.226c0-0.525,0.563-0.825,1.05-0.825
            c0.375,0,0.675,0.149,0.825,0.563l7.236,23.696l7.199-23.696c0.112-0.413,0.412-0.563,0.75-0.563c0.524,0,1.087,0.375,1.087,0.825
            c0,0.113-0.037,0.15-0.037,0.226l-7.949,25.909c-0.112,0.45-0.6,0.675-1.05,0.675c-0.487,0-0.899-0.225-1.05-0.675L188.091,4.846z
            "/>
          <path fill="#FFFFFF" d="M211.84,16.619h5.961c0.487,0,0.788,0.412,0.788,0.899c0,0.375-0.226,0.825-0.788,0.825h-5.961v11.061
            h12.373c0.487,0,0.787,0.45,0.787,0.938c0,0.413-0.225,0.863-0.787,0.863h-13.349c-0.449,0-0.899-0.263-0.899-0.825V4.621
            c0-0.563,0.45-0.825,0.899-0.825h13.349c0.563,0,0.787,0.45,0.787,0.862c0,0.487-0.3,0.937-0.787,0.937H211.84V16.619z"/>
        </g>
      </g>
      <g id="glyph">
        <g>
          <path fill="#D09E8B" d="M5,30.381V4.584C5,4.06,5.313,3.797,5.938,3.797c0.624,0,0.938,0.263,0.938,0.787v25.797
            c0,0.549-0.313,0.824-0.938,0.824C5.313,31.205,5,30.93,5,30.381z"/>
        </g>
        <g>
          <path fill="#D09E8B" d="M17.662,30.381V4.584c0-0.524,0.624-0.787,1.874-0.787c1.249,0,1.875,0.263,1.875,0.787v25.797
            c0,0.549-0.626,0.824-1.875,0.824C18.286,31.205,17.662,30.93,17.662,30.381z"/>
        </g>
        <g>
          <path fill="#D09E8B" d="M31.014,30.381V4.584c0-0.524,0.938-0.787,2.813-0.787c1.873,0,2.812,0.263,2.812,0.787v25.797
            c0,0.549-0.938,0.824-2.812,0.824C31.951,31.205,31.014,30.93,31.014,30.381z"/>
        </g>
      </g>
    </g>
    </svg>
  ) : (
    <svg xmlns="http://www.w3.org/2000/svg" width="230px" height="35px" viewBox="0 0 230 35">
      <title>thirdwave.network</title>
      <g>
      <g id="typography">
        <g>
          <path fill="#FFFFFF" d="M66.409,3.796c0.524,0,0.787,0.412,0.787,0.862c0,0.45-0.225,0.937-0.787,0.937H59.96V30.38
            c0,0.563-0.487,0.825-0.938,0.825c-0.487,0-0.938-0.263-0.938-0.825V5.595h-6.524c-0.487,0-0.787-0.45-0.787-0.899
            c0-0.45,0.3-0.9,0.787-0.9H66.409z"/>
          <path fill="#FFFFFF" d="M84.03,17.856H72.595V30.38c0,0.563-0.45,0.825-0.938,0.825c-0.45,0-0.938-0.263-0.938-0.825V4.583
            c0-0.563,0.487-0.787,0.938-0.787c0.487,0,0.938,0.225,0.938,0.787v11.548H84.03V4.583c0-0.563,0.487-0.787,0.938-0.787
            c0.487,0,0.938,0.225,0.938,0.787V30.38c0,0.563-0.45,0.825-0.938,0.825c-0.45,0-0.938-0.263-0.938-0.825V17.856z"/>
          <path fill="#FFFFFF" d="M91.828,4.583c0-0.563,0.487-0.787,0.938-0.787c0.487,0,0.938,0.225,0.938,0.787V30.38
            c0,0.563-0.45,0.825-0.938,0.825c-0.45,0-0.938-0.263-0.938-0.825V4.583z"/>
          <path fill="#FFFFFF" d="M99.626,4.583c0-0.412,0.3-0.787,0.825-0.787h6.411c4.237,0,7.912,1.762,7.912,7.274
            c0,4.724-2.7,6.674-6.112,7.161l6,11.623c0.074,0.15,0.112,0.301,0.112,0.451c0,0.486-0.375,0.937-1.012,0.937
            c-0.451,0-0.863-0.75-1.163-1.313l-5.887-11.511h-5.212V30.38c0,0.563-0.45,0.825-0.938,0.825c-0.45,0-0.938-0.263-0.938-0.825
            V4.583z M101.501,5.595v11.099h5.361c3.563,0,6.037-1.575,6.037-5.586c0-3.975-2.475-5.513-6.037-5.513H101.501z"/>
          <path fill="#FFFFFF" d="M126.509,3.796c4.237,0,7.574,2.137,7.574,7.874v11.662c0,5.736-3.337,7.874-7.574,7.874h-6.637
            c-0.524,0-0.899-0.376-0.899-0.788V4.583c0-0.412,0.375-0.787,0.899-0.787H126.509z M120.848,5.595v23.809h5.661
            c3.562,0,5.699-1.912,5.699-6.073V11.669c0-4.162-2.138-6.074-5.699-6.074H120.848z"/>
          <path fill="#FFFFFF" d="M164.564,30.755c-0.149,0.45-0.637,0.675-1.087,0.675s-0.938-0.225-1.013-0.675l-3.862-14.023
            l-3.861,14.023c-0.113,0.45-0.563,0.675-1.051,0.675c-0.487,0-0.937-0.225-1.05-0.675l-7.424-25.909
            c-0.037-0.113-0.037-0.15-0.037-0.263c0-0.487,0.525-0.787,1.013-0.787c0.374,0,0.749,0.187,0.862,0.563l6.636,23.696l3.825-14.21
            c0.112-0.488,0.563-0.75,1.012-0.75c0.413,0,0.9,0.263,1.051,0.75l3.937,14.21l6.562-23.696c0.113-0.375,0.487-0.563,0.862-0.563
            c0.487,0,1.013,0.3,1.013,0.787c0,0.113,0,0.15-0.038,0.263L164.564,30.755z"/>
          <path fill="#FFFFFF" d="M171.057,30.38c0-0.074,0-0.149,0.038-0.225l8.024-25.91c0.149-0.45,0.562-0.675,1.049-0.675
            c0.451,0,0.901,0.226,1.051,0.675l7.949,25.91c0,0.075,0.037,0.112,0.037,0.225c0,0.449-0.563,0.825-1.087,0.825
            c-0.338,0-0.638-0.15-0.751-0.563l-1.837-5.962h-10.798l-1.8,5.962c-0.15,0.412-0.451,0.563-0.825,0.563
            C171.619,31.205,171.057,30.904,171.057,30.38z M185.005,22.956l-4.837-16.011l-4.948,16.011H185.005z"/>
          <path fill="#FFFFFF" d="M188.091,4.846c-0.038-0.075-0.038-0.15-0.038-0.226c0-0.525,0.563-0.825,1.05-0.825
            c0.375,0,0.675,0.149,0.825,0.563l7.236,23.696l7.199-23.696c0.112-0.413,0.412-0.563,0.75-0.563c0.524,0,1.087,0.375,1.087,0.825
            c0,0.113-0.037,0.15-0.037,0.226l-7.949,25.909c-0.112,0.45-0.6,0.675-1.05,0.675c-0.487,0-0.899-0.225-1.05-0.675L188.091,4.846z
            "/>
          <path fill="#FFFFFF" d="M211.84,16.619h5.961c0.487,0,0.788,0.412,0.788,0.899c0,0.375-0.226,0.825-0.788,0.825h-5.961v11.061
            h12.373c0.487,0,0.787,0.45,0.787,0.938c0,0.413-0.225,0.863-0.787,0.863h-13.349c-0.449,0-0.899-0.263-0.899-0.825V4.621
            c0-0.563,0.45-0.825,0.899-0.825h13.349c0.563,0,0.787,0.45,0.787,0.862c0,0.487-0.3,0.937-0.787,0.937H211.84V16.619z"/>
        </g>
      </g>
      <g id="glyph">
        <g>
          <path fill="#D09E8B" d="M5,30.381V4.584C5,4.06,5.313,3.797,5.938,3.797c0.624,0,0.938,0.263,0.938,0.787v25.797
            c0,0.549-0.313,0.824-0.938,0.824C5.313,31.205,5,30.93,5,30.381z"/>
        </g>
        <g>
          <path fill="#D09E8B" d="M17.662,30.381V4.584c0-0.524,0.624-0.787,1.874-0.787c1.249,0,1.875,0.263,1.875,0.787v25.797
            c0,0.549-0.626,0.824-1.875,0.824C18.286,31.205,17.662,30.93,17.662,30.381z"/>
        </g>
        <g>
          <path fill="#D09E8B" d="M31.014,30.381V4.584c0-0.524,0.938-0.787,2.813-0.787c1.873,0,2.812,0.263,2.812,0.787v25.797
            c0,0.549-0.938,0.824-2.812,0.824C31.951,31.205,31.014,30.93,31.014,30.381z"/>
        </g>
      </g>
    </g>
    </svg>
  )

export default Logo
