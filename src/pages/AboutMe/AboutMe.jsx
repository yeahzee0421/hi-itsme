import s from './AboutMe.module.css';
// import profile from './images/profile-2.png';
export default function Two(){
    return(
        <>
        <div className= {s.wrapper}>
            <h2 className={s.title}>About Me</h2>
            <div className={s.container}>
            
                <div className={s.left}>
                    <div className={s.top}>
                        <h3>🔍Profile</h3>
                        <h4>이예지 2001.04.21</h4>
                        <h4>강원대학교 컴퓨터공학과 <a3>2021.03~</a3></h4>
                    </div>
                    <div className={s.bottom}>
                        <h3>🔥Etc</h3>
                        <h5>강원대학교 컴퓨터공학과 과동아리 ‘블렌딩’ 운영 <a3>2022.8~2023.02</a3></h5>
                        <h5>강원지역혁신플랫폼 정밀의료사업단 메이커톤 경진대회 사업단장상</h5>
                        <h5>2023년도 춘천 창업도시 창업아이디어 발굴 경진대회 본선 <a3>2023.4</a3></h5>
                    </div>
                </div>
                
                <div className={s.right}>
                <h3>✨Career</h3>
                        <h4> 강원대학교 멋쟁이사자처럼 <a3>2023.03~현재</a3></h4>
                        <h5>  • 강원대학교 멋쟁이사자처럼 12기 운영진</h5>
                        <h5>  • 홍보기획팀 & FE 담당</h5>
                        <h5>  • 중앙 해커톤 FE 참여</h5>
                        <h4> ENACTUS (주)견으로 <a3>2023.03~2023.12</a3></h4>
                        <h5>  • 예비사회적기업 견으로 서비스팀</h5>
                        <h5>  • 2023 고용노동부 소셜벤처 경진대회 입상</h5>
                        <h5>  • 2023 MG 청년 로컬 창업캠프 우수상</h5>
                </div>
                <img className={s.profilePic} src="./images/profile-2.png" />
            </div>
        </div>
        </>
    )
}