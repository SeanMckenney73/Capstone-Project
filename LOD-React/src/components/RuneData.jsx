import { useState } from "react";
import { Container, Row, Col, OverlayTrigger, Tooltip, Spinner, Alert } from "react-bootstrap";
import { useRuneData } from "../hooks/useRuneData";
import './RuneData.css'


const runeTreeConfig = [
    {
        name: 'Precision',
        themeColor: '#c8aa6e',
        rows: [
            {name: 'Keystone', ids: [1,2,3,4]},
            {name: 'Slot 1', ids: [5,6,7]},
            {name: 'Slot 2', ids: [8,9,10]},
            {name: 'Slot 3', ids: [11,12,13]}
        ]
    },
    {
        name: 'Domination',
        themeColor: '#dc2626',
        rows: [
            {name: 'Keystone', ids: [14,15,16]},
            {name: 'Slot 1', ids: [17,18,19]},
            {name: 'Slot 2', ids: [20,21,22]},
            {name: 'Slot 3', ids: [23,24,25]}
        ]
    },
    {
        name: 'Sorcery',
        themeColor: '#6366f1',
        rows: [
            {name: 'Keystone', ids: [26,27,28,29]},
            {name: 'Slot 1', ids: [30,31,32]},
            {name: 'Slot 2', ids: [33,34,35]},
            {name: 'Slot 3', ids: [36,37,38]}
        ]
    },
    {
        name: 'Resolve',
        themeColor: '#22c55e',
        rows: [
            {name: 'Keystone', ids: [39,40,41]},
            {name: 'Slot 1', ids: [42,43,44]},
            {name: 'Slot 2', ids: [45,46,47]},
            {name: 'Slot 3', ids: [48,49,50]}
        ]
    },
    {
        name: 'Inpiration',
        themeColor: '#06b6d4',
        rows: [
            {name: 'Keystone', ids: [51,52,53]},
            {name: 'Slot 1', ids: [54,55,56]},
            {name: 'Slot 2', ids: [57,58,59]},
            {name: 'Slot 3', ids: [60,61,62]}
        ]
    }
]



function RuneData() {
  const { runes, loading, error } = useRuneData();

  if (loading) {
    return (
      <Container fluid className="rune-page-bg text-light min-vh-100 d-flex justify-content-center align-items-center">
        <Spinner animation="border" variant="warning" />
      </Container>
    );
  }

  if (error) {
    return (
      <Container fluid className="rune-page-bg text-light min-vh-100 p-4">
        <Alert variant="danger">Error loading runes: {error}</Alert>
      </Container>
    );
  }

  return (
    <Container fluid className="rune-page-bg text-light min-vh-100 p-4">
      <h2 
        className="mb-5 text-uppercase tracking-widest text-center" 
        style={{ fontFamily: "'Quantico', sans-serif", color: '#ececec' }}
      >
        Runes
      </h2>

      <div className="d-flex flex-row justify-content-center align-items-start gap-3 flex-wrap">
        {runeTreeConfig.map((tree) => (
          <div key={tree.name} className="rune-tree-column p-3 flex-fill" style={{ maxWidth: '320px' }}>
            
            <h4 
              className="text-center text-uppercase mb-4 tracking-wider" 
              style={{ fontFamily: "'Quantico', sans-serif", color: tree.themeColor }}
            >
              {tree.name}
            </h4>

            {tree.rows.map((row) => {
              const rowRunes = runes.filter(rune => row.ids.includes(rune.id));
              const isKeystone = row.name === 'Keystone';

              return (
                <div key={row.name} className="rune-row-wrapper d-flex justify-content-center align-items-center my-4">
                  <div className="d-flex gap-2 align-items-center justify-content-center flex-nowrap flex-row">
                    
                    {rowRunes.map((rune) => (
                      <OverlayTrigger
                        key={rune.id}
                        placement="bottom"
                        delay={{ show: 150, hide: 100 }}
                        overlay={
                          <Tooltip id={`rune-tooltip-${rune.id}`}>
                            <div className="text-start p-1" style={{ maxWidth: '240px' }}>
                              <strong style={{ color: tree.themeColor }} className="h6 d-block mb-1">
                                {rune.runeName}
                              </strong>
                              <p className="mb-0 small text-light fw-normal">{rune.runeDesc}</p>
                            </div>
                          </Tooltip>
                        }
                      >
                        
                        <div 
                          className={`rune-circle-frame ${isKeystone ? 'keystone-frame' : 'standard-frame'}`}
                          style={{ '--hover-color': tree.themeColor }}
                        >
                          <img 
                            src={rune.runeImg} 
                            alt={rune.runeName} 
                            className="rune-image"
                          />
                        </div>
                      </OverlayTrigger>
                    ))}

                  </div>
                </div>
              );
            })}

          </div>
        ))}
      </div>
    </Container>
  );
}

export default RuneData;