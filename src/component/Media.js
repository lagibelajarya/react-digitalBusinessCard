import ionIcon from './ionIcon';

export default function Media() {
  return (
    <div className="Media">
      <div className="Media__icon-box">{ionIcon('logo-twitter')}</div>
      <div className="Media__icon-box">{ionIcon('logo-facebook')}</div>
      <div className="Media__icon-box">{ionIcon('logo-instagram')}</div>
      <div className="Media__icon-box">{ionIcon('logo-github')}</div>
    </div>
  );
}
