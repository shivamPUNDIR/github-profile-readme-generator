import React, { useEffect, useState } from "react"
import { StarIcon, RepoForkedIcon } from "@primer/octicons-react"
import logo from "../images/mdg.png"
import links from "../constants/page-links"
import gsap from "gsap"
import axios from "axios"
import { Link } from "gatsby"
import { act } from "react-dom/test-utils"

const Header = props => {
 

  // const fetchData = async () => {
  //   if (shouldRequestStats()) {
  //     var response = await axios.get(
  //       "https://api.github.com/repos/rahuldkjain/github-profile-readme-generator"
  //     )

  //     const { stargazers_count, forks_count } = response.data

  //     act(() =>
  //       setstats({
  //         starsCount: stargazers_count,
  //         forksCount: forks_count,
  //       })
  //     )
  //   }
  // }

 

  // useEffect(() => {
  //   // fetchData()
  //   // setInterval(fetchData, 60000)

  //   gsap.set(".star, .fork", {
  //     transformOrigin: "center",
  //   })
  //   gsap.to(".star, .fork", {
  //     rotateZ: "360",
  //     duration: 2,
  //     ease: "elastic.inOut",
  //     repeat: -1,
  //     yoyo: true,
  //   })
  // }, [])

  return (
    <div className="shadow flex items-center justify-center flex-col mb-2 py-2">
      <Link to={links.home}>
        <h1 className="text-base font-bold font-title sm:text-2xl font-medium text-blue-800 flex justify-center items-center flex-col">
          <img
            src={logo}
            className="w-12 h-12"
            alt="github profile markdown generator logo"
          />
          <div>{props.heading}</div>
        </h1>
      </Link>
     
    </div>
  )
}

export default Header
