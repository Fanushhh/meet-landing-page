import './cta.scss';

export default function Cta({props}){
    return(
        <section className="cta">
            <div className="colorOverlay">
            </div>
            <div class="ctaDescription">
                <p className="ctaTitle">{props.ctaTitle}</p>
                <p className="ctaDesc">{props.ctaDescription}</p>
                <div className="buttonsContainer">
                    <button className='downloadBtn'>{props.download} <span>{props.version}</span></button>
                </div>
            </div>
            <p className='hrRule'>02</p>
        </section>
    )
}