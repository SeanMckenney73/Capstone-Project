import React, {useState} from "react";
import { useItemData } from "../hooks/useItemData";
import {Container, Row, Col, OverlayTrigger, Tooltip, Spinner, Alert, Card} from 'react-bootstrap'
import './ItemList.css'


function ItemList() {

    const { groupedItems, loading, error} = useItemData()
    
    const typeOrder = ['Starter', 'Boot', 'Basic', 'Epic', 'Legendary']

    if (loading) {
        return (
            <Container className="bg-dark text-light min-vh-100 d-flex justify-content-between align-items-center mb-2 border-bottom border-secondary pb-1">
                <Spinner animation="border" variant="primary" />
                <span className="ms-2">Loading shop items...</span>
            </Container>
        )
    }

    if (error) {
        return (
            <Container className="bg-dark text-light min-vh-100 p-4">
                <Alert variant="danger">Oh no! The Poros ransacked the shop!: {error}</Alert>
            </Container>
        )
    }

   return (
    <Container fluid className="bg-dark text-light min-vh-100 p-4">
      <h2 className="border-bottom border-secondary pb-2 mb-4 text-white">Item Shop</h2>

      {typeOrder.map(type => {
        const currentGroup = groupedItems[type] || [];
        if (currentGroup.length === 0) return null;

        return (
          <Card 
            key={type} 
            className="mb-4 border-secondary text-light"
            style={{ backgroundColor: '#1a1d20' }} 
          >
            <Card.Body className="p-4">
              <h3 
                className="h5 text-uppercase mb-3"
                style={{ fontFamily: "'Quantico', sans-serif", fontWeight: '500' }}
              >
                {type}
              </h3>
              
              <div className="d-flex flex-wrap gap-3">
                {currentGroup.map(item => (
                  <OverlayTrigger
                    key={item.id}
                    placement="bottom"
                    delay={{ show: 150, hide: 100 }}
                    overlay={
                      <Tooltip id={`tooltip-${item.id}`}>
                        <div className="text-start p-1" style={{ maxWidth: '250px' }}>
                          <div className="mb-2 border-bottom border-secondary pb-1">
                            <strong className="text-white h6 d-block mb-0">{item.itemName}</strong>
                          </div>
                          
                          {item.itemDesc && (
                            <p className="mb-1 small text-light fw-normal">
                              {item.itemDesc}
                            </p>
                          )}
                          
                          {item.itemAddDesc && (
                            <p className="mb-2 small text-info fst-italic" style={{ fontSize: '0.8rem' }}>
                              {item.itemAddDesc}
                            </p>
                          )}
                          
                          {(item.firstStat || item.secondStat || item.thirdStat || item.fourthStat) && (
                            <div className="bg-black text-success p-2 rounded small font-monospace mt-2" style={{ fontSize: '0.8rem', lineHeight: '1.4' }}>
                              {item.firstStat && <div className="border-bottom border-dark pb-1 mb-1">▪ {item.firstStat}</div>}
                              {item.secondStat && <div className="border-bottom border-dark pb-1 mb-1">▪ {item.secondStat}</div>}
                              {item.thirdStat && <div className="border-bottom border-dark pb-1 mb-1">▪ {item.thirdStat}</div>}
                              {item.fourthStat && <div>▪ {item.fourthStat}</div>}
                            </div>
                          )}

                        {item.itemCost && (
                            <div className="gold-cost-text small fw-bold mb-2">
                            🪙 {item.itemCost} Gold
                            </div>
                        )}

                        </div>
                      </Tooltip>
                    }
                  >
                    <img
                      src={item.textImg || 'https://placeholder.com'}
                      alt={item.itemName}
                      className="rounded border border-secondary img-fluid"
                      style={{
                        width: '64px',
                        height: '64px',
                        cursor: 'pointer',
                        transition: 'transform 0.15s ease, border-color 0.15s ease',
                        backgroundColor: '#212529',
                        objectFit: 'cover'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.05)';
                        e.currentTarget.style.borderColor = '#0d6efd';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.borderColor = '#6c757d';
                      }}
                    />
                  </OverlayTrigger>
                ))}
              </div>
            </Card.Body>
          </Card>
        );
      })}
    </Container>
  );
}

export default ItemList;