import React from "react";
import PropTypes from 'prop-types';

function Profiletest ({ fullName, bio, profession, children,handleName }) {
  
    return (
      <div>
        <img src={'https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/273763387_5211819232186133_1689985846967814907_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_ohc=0lg2p7kyhOkAX9aimNY&_nc_ht=scontent.ftun16-1.fna&oh=00_AfBZ3vjG4uhP11ir7qPEDR3kXhSHqv3B0Io9Ptz635YCYg&oe=6463932B'} alt={`picture`} width={500} height={500}/>
        <h1 style={{ fontSize: '65px',margin: '10px 0' }}>{fullName}</h1>
        <p style={{ fontStyle: 'italic',fontSize: '30px', marginTop: '10px' }}>{profession}</p>
        <p style={{ fontSize: '25px', textAlign:'justify' }}>{bio}</p>
         <button onClick={handleName}style={{ backgroundColor: 'blue', color: 'white', padding: '10px', borderRadius: '5px', marginTop: '10px' }}>Show Name</button>
      </div>
      
    );
  }
  
  Profiletest.propTypes= {
    children: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    handleName: PropTypes.func.isRequired,
  
  };
  
  Profiletest.defaultProps = {
    children: 'https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/273763387_5211819232186133_1689985846967814907_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_ohc=0lg2p7kyhOkAX9aimNY&_nc_ht=scontent.ftun16-1.fna&oh=00_AfBZ3vjG4uhP11ir7qPEDR3kXhSHqv3B0Io9Ptz635YCYg&oe=6463932B',
    fullName: 'Rim Ammar',
    profession: 'Chargée de communication',
    bio: "Créative et passionnée par le monde du digital et les médias de l’audiovisuel jai pu acquérir et  assimiler de nombreuses connaissances et compétences utiles à la mission, qui me sera confiée.Après avoir suivi un long cursus universitaire, au sein de l’Institut des Arts Multimédias de la Manouba, j’ai jalonné plusieurs postes qui ont marbré d’une belle empreinte mon expérience professionnell De mes premiers pas de designer en la société dHexabyte jusquà mon expertise dans les domaines du digital au sein  de la Sultane magazine et de Enda inter-arabe j’ai pu faire preuve d’autonomie  de rigueur et  surtout d’inventivité lorsqu’il s’agissait d’organisation événementielle, ou bien de rencontres à caractère professionnel. Mon penchant pour l’écriture,  voire même le journalisme et mon attachement personnel pour le milieu associatif m’ont permis de renforcer mon sens de l’écoute et mon vif du débat. Désormais, de nouveau chargée de communication digitale au sein dun grand groupe dindustries alimentaires joccupe un  poste central  et sensible qui fait appel à la prise dinitiative car je collabore avec plusieurs directions qualité commerciale  recherche et développement", 
    handleName: () => alert('The name of this profile is Rim AMMAR'),
  };
  
  export default Profiletest;
  