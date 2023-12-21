import React from 'react'
import Header from '../components/layout/Header'
import Main from '../components/layout/Main'
import Footer from '../components/layout/Footer'
import Opening from '../components/section/Opening'
import Intro from '../components/section/Intro'
import Port from '../components/section/Port'
import More from '../components/section/More'
import About from '../components/section/About'
import Stack from '../components/section/Stack'
import Contact from '../components/section/Contact'
import Comment from '../components/section/Comment'
import Line from '../components/section/Line'

import ArrowImg from '../assets/img/arrow.png'
import { appear } from '../utils/apper'
import { mouse } from '../utils/mouse'
import Progress from '../components/section/Progress'
import Canvas from '../components/section/Canvas'
import UserJoin from '../components/user/UserJoin'
import UserLogin from '../components/user/UserLogin'

const HomeView = () => {
    return (
        <>
            <Progress />
            <Header />
            <Canvas />
            <Main>
                <Opening />
                <Intro appear={appear} />
                <Port arrowImg={ArrowImg} arrowAlt="화살표이미지" />
                <More arrowImg={ArrowImg} arrowAlt="화살표이미지" mouse={mouse} />
                <About arrowImg={ArrowImg} arrowAlt="화살표이미지" />
                <Stack arrowImg={ArrowImg} arrowAlt="화살표이미지" />
                <Contact arrowImg={ArrowImg} arrowAlt="화살표이미지" />
                <Comment arrowImg={ArrowImg} arrowAlt="화살표이미지" />
                <UserJoin />
                <UserLogin />
            </Main>
            <Footer />
            <Line />
        </>
    )
}

export default HomeView
