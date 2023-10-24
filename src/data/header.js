import { AiFillStar, AiFillHeart } from 'react-icons/ai';   // 인기 아티스트, 즐겨듣는 음악 아이콘
import { BsFillMoonStarsFill } from "react-icons/bs";   // 추천음악 아이콘
import { FiGithub, FiMusic } from "react-icons/fi";   // 오늘의 음악 아이콘 Github아이콘
import { SiYoutubemusic } from "react-icons/si";    // Youtube Music아이콘

export const menuText = [
    {
        title: "인기 아티스트",
        icon: <AiFillStar />,
        src: "/"
    },{
        title: "오늘의 음악",
        icon: <FiMusic />,
        src: "/today"
    },{
        title: "추천 음악",
        icon: <BsFillMoonStarsFill />,
        src: "/recommend"
    },{
        title: "즐겨듣는 음악",
        icon: <AiFillHeart />,
        src: "/favorite"
    }
]

export const keywordText = [
    {
        title: "SM",
        src: "/search/SM"
    },{
        title: "JYP",
        src: "/search/JYP"
    },{
        title: "YG",
        src: "/search/YG"
    },{
        title: "HYBE",
        src: "/search/HYBE"
    },{
        title: "starship",
        src: "/search/starshipTV"
    },{
        title: "LUCY",
        src: "/search/루시"
    },{
        title: "DAY6",
        src: "/search/DAY6"
    },{
        title: "아이유",
        src: "/search/아이유"
    },{
        title: "윤하",
        src: "/search/윤하"
    },{
        title: "김세정",
        src: "/search/김세정"
    }
]

export const snsText = [
    {
        title: "github",
        src:"https://github.com/",
        icon: <FiGithub />
    },{
        title: "YouTubeMusic",
        src:"https://www.youtube.com/premium",
        icon: <SiYoutubemusic />
    }, {
        title: "Blog",
        src:"",
        icon: <FiGithub />
    }
]