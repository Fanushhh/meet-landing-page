import './about.scss';


export default function About({props}){
    return(
        <section>
            <div className='logoContainer'>
                <img src={props.logoImg} alt='logo-img' />
            </div>
            <div className="imageContainer">
                {/* <img className='leftImg' src={props.aboutMeImages.leftImg} alt='people-img' />
                <img className='rightImg' src={props.aboutMeImages.rightImg} alt='people-img' /> */}
            </div>
            <div className='appDescription'>
                <h1>{props.aboutMeTitle}</h1>
                <p>{props.aboutMeDesc}</p>
                <div className="buttonsContainer">
                    <button className='downloadBtn'>{props.download} <span>{props.version}</span></button>
                    <button className='questionBtn'>{props.question}</button>
                </div>
                
            </div>
            <p className='hrRule'>{props.hrtext}</p>
        </section>
    )
}