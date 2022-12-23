import { HeaderAnimationContainer } from "../StyledComponents/Header/HeaderAnimation.styled";
import { useLayoutEffect } from "react";
import gsap from "gsap";

const HeaderAnimation = () => {

    useLayoutEffect( () => {

        const ctx = gsap.context( () => {

            let timeLineApear = gsap.timeline();

            timeLineApear.to(".a1", {
                y: 0,
                opacity: 1,
                delay: 2.5,
                duration: 0.38
            }).to(".b1", {
                y: 0,
                opacity: 1,
                duration: 0.38
            }).to(".c2", {
                y: 0,
                opacity: 1,
                duration: 0.38
            }).to(".a2", {
                y: 0,
                opacity: 1,
                duration: 0.38
            }).to(".b2", {
                y: 0,
                opacity: 1,
                duration: 0.38
            }).to(".c3", {
                y: 0,
                opacity: 1,
                duration: 0.38
            }).to(".a3", {
                y: 0,
                opacity: 1,
                duration: 0.38
            }).to(".b3", {
                y: 0,
                opacity: 1,
                duration: 0.38
            }).to(".c4", {
                y: 0,
                opacity: 1,
                duration: 0.38
            }).to(".b4", {
                y: 0,
                opacity: 1,
                duration: 0.38
            });

        })
        return () => ctx.revert();

    }, []);

    return(
        <HeaderAnimationContainer>
                <div class="a1"></div>
                <div class="a2"></div>
                <div class="a3"></div>
                <div class="b1"></div>
                <div class="b2"></div>
                <div class="b3"></div>
                <div class="b4"></div>
                <div class="c1"></div>
                <div class="c2"></div>
                <div class="c3"></div>
                <div class="c4"></div>
        </HeaderAnimationContainer>
    );
};

export default HeaderAnimation;