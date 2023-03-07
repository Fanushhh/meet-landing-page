
import './description.scss';


export default function Description({props}){
    return(
        <section className="description">
            <div className="descriptionImgContainer">
                {props.descriptionImages.map((img, index) => {
                    return <img key={index} src={img} alt='people' />;
                })}
            </div>
            <div className='desc'>
                <p className='purpose'>{props.purpose}</p>
                <p className='catchphrase'>{props.catchphrase}</p>
                <p className='descriptionParagraph'>{props.description}</p>
            </div>
        </section>
    )
}