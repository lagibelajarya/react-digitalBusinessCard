import profil from '../images/lauraSmith.png';
import ionIcon from './ionIcon';

export default function Info() {
  return (
    <div className="info">
      <img className="info__img" src={profil} />
      <div className="info__profil">
        <h1 className="info__name">Laura Smith</h1>
        <p className="info__desc">Frontend Developer</p>
        <p className="info__web">laurasmith.website</p>
      </div>

      <div className="socialMedia">
        <button className="socialMedia__email socialMedia-btn"> {ionIcon('mail-outline')} Email</button>
        <button className="socialMedia__linkedIn socialMedia-btn">{ionIcon('logo-linkedin')} LinkedIn</button>
      </div>
    </div>
  );
}
