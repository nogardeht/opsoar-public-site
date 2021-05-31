import './Hero.css';

function Hero(props) {
    return (
        <div className="hero">
            <img src={props.logo} alt='Here goes the logo' className='img-fluid hero-logo'/>
        </div>
    )
}

export default Hero;