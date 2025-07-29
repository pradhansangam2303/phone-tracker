import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { StatusCard } from './components/StatusCard';
import { WifiSection } from './components/WifiSection';
import { CellSection } from './components/CellSection';
import { GpsSection } from './components/GpsSection';
import { ConfigurationPanel } from './components/ConfigurationPanel';
import { mockData } from './data/mockData';

function App() {
  const [isTracking, setIsTracking] = useState(false);
  const [data, setData] = useState(mockData);

  useEffect(() => {
    if (!isTracking) return;

    const interval = setInterval(() => {
      setData(prevData => ({
        ...prevData,
        wifi: {
          ...prevData.wifi,
          networks: prevData.wifi.networks.map(network => ({
            ...network,
            signalStrength: Math.max(-90, Math.min(-20, 
              network.signalStrength + (Math.random() - 0.5) * 10
            ))
          }))
        },
        gps: {
          ...prevData.gps,
          accuracy: Math.max(1, Math.min(20, 
            prevData.gps.accuracy + (Math.random() - 0.5) * 2
          ))
        }
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, [isTracking]);

  const handleStartStop = () => {
    setIsTracking(!isTracking);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Status and Controls */}
          <div className="lg:col-span-1 space-y-6">
            <StatusCard 
              isTracking={isTracking} 
              onToggle={handleStartStop}
              data={data}
            />
            <ConfigurationPanel />
          </div>

          {/* Data Sections */}
          <div className="lg:col-span-3 space-y-8">
            <WifiSection data={data.wifi} isTracking={isTracking} />
            <CellSection data={data.cell} isTracking={isTracking} />
            <GpsSection data={data.gps} isTracking={isTracking} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;