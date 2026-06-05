import { Container, Row, Col, Card, OverlayTrigger, Tooltip } from "react-bootstrap";
import { useChampionData } from "../hooks/useChampionData";
import { Outlet } from "react-router-dom";
import "./ChampionData.css"; 

function ChampionData({ patch = "latest", champ, nameChampion, champID }) {

  const API_URL = import.meta.env.VITE_API_URL

  
  const dataChampion = useChampionData(`${API_URL}/api/champions`);
  const iconChampion = `https://cdn.communitydragon.org/${patch}/champion/${champ}/square`;

  if (!dataChampion || !dataChampion.data) {
    return (
      <div className="ChampionData min-vh-100 d-flex align-items-center justify-content-center bg-dark-theme text-light">
        <Container className="p-5 text-center font-quantico">
          <p className="tracking-wider">Loading champion details...</p>
        </Container>
      </div>
    );
  }

  const { 
    champName, id, champRole, lane, 
    passName, passIcon, passDesc, 
    qName, qIcon, qDesc, qCD, 
    wName, wIcon, wDesc, wCD, 
    eName, eIcon, eDesc, eCD, 
    rName, rIcon, rDesc, rCD 
  } = dataChampion.data;

  
  const abilities = [
    { key: "P", name: passName, icon: passIcon, desc: passDesc, cd: null },
    { key: "Q", name: qName, icon: qIcon, desc: qDesc, cd: qCD },
    { key: "W", name: wName, icon: wIcon, desc: wDesc, cd: wCD },
    { key: "E", name: eName, icon: eIcon, desc: eDesc, cd: eCD },
    { key: "R", name: rName, icon: rIcon, desc: rDesc, cd: rCD }
  ];

  return (
    <div className="ChampionData min-vh-100 bg-dark-theme text-light">
      <Container className="py-5 font-quantico">
        
        
        <Card className="mb-4 theme-card border-secondary">
          <Card.Body className="d-flex justify-content-center align-items-center gap-4 p-4 flex-wrap flex-sm-nowrap">
            <div className="champ-portrait-frame">
              <img 
                src={iconChampion} 
                alt={`${nameChampion} icon`} 
                className="champ-portrait-img"
              />
            </div>
            <div>
              <h2 className="text-gold text-uppercase mb-1 tracking-wider">{nameChampion}</h2>
              <p className="mb-0 uppercase-tracking text-white">
                Role: <span className="text-light">{champRole}</span> | Lane: <span className="text-light">{lane}</span>
              </p>
            </div>
          </Card.Body>
        </Card>

        
        <Card className="theme-card border-secondary">
          <Card.Body className="p-4">
            <h4 className="h6 text-uppercase tracking-wider mb-4 border-bottom border-dark pb-2 text-white">
              Abilities
            </h4>
            
            
            <div className="d-flex flex-row justify-content-center align-items-center gap-4 flex-wrap">
              {abilities.map((ability) => (
                <OverlayTrigger
                  key={ability.key}
                  placement="bottom"
                  delay={{ show: 150, hide: 100 }}
                  overlay={
                    <Tooltip id={`spell-tooltip-${ability.key}`}>
                      <div className="text-start p-1 font-quantico" style={{ maxWidth: '260px' }}>
                        <div className="border-bottom border-secondary pb-1 mb-2">
                          <strong className="text-gold d-block">{ability.name}</strong>
                          <span className=" small fw-bold">Slot: {ability.key}</span>
                        </div>
                        <p className="mb-2 small text-light fw-normal" style={{ lineHeight: '1.4' }}>
                          {ability.desc}
                        </p>
                        {ability.cd && (
                          <div className="bg-black text-success p-1 rounded small font-monospace" style={{ fontSize: '0.75rem' }}>
                            ⏳ Cooldown: {ability.cd}
                          </div>
                        )}
                      </div>
                    </Tooltip>
                  }
                >
                  <div className="ability-slot-wrapper">
                    <span className="spell-key-badge">{ability.key}</span>
                    <div className="spell-icon-frame">
                      <img 
                        src={ability.icon} 
                        alt={`${ability.name} icon`} 
                        className="spell-icon-img"
                      />
                    </div>
                  </div>
                </OverlayTrigger>
              ))}
            </div>
          </Card.Body>
        </Card>

      </Container>
    </div>
  );
}

export default ChampionData;