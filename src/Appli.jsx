import './Appli.scss';
import Entete from './composants/entete';
import SectionPrincipale from './composants/sectionPrincipale';
import PiedPage from './composants/piedPage';

export default function Appli() {
  return (
    <div className="Appli">
        <Entete />;
        <SectionPrincipale />;
        <PiedPage />;
    </div>



  );
}
