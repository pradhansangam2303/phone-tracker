import React from 'react';
import { Wifi, WifiOff, Lock, Unlock } from 'lucide-react';

interface WifiNetwork {
  ssid: string;
  bssid: string;
  signalStrength: number;
  frequency: number;
  capabilities: string;
  isSecure: boolean;
}

interface WifiSectionProps {
  data: {
    enabled: boolean;
    scanDelay: number;
    networks: WifiNetwork[];
  };
  isTracking: boolean;
}

export const WifiSection: React.FC<WifiSectionProps> = ({ data, isTracking }) => {
  const getSignalStrengthColor = (strength: number) => {
    if (strength > -50) return 'text-green-500';
    if (strength > -70) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getSignalBars = (strength: number) => {
    const bars = Math.max(1, Math.min(4, Math.floor((strength + 100) / 12.5)));
    return bars;
  };

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-lg">
            <Wifi className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900">WiFi Networks</h2>
            <p className="text-sm text-gray-500">
              Scanning every {data.scanDelay}ms
              {isTracking && <span className="ml-2 inline-block w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>}
            </p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-blue-600">{data.networks.length}</div>
          <div className="text-xs text-gray-500">Networks Found</div>
        </div>
      </div>

      <div className="space-y-3 max-h-96 overflow-y-auto">
        {data.networks.map((network, index) => (
          <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-1">
                <span className="font-medium text-gray-900">{network.ssid}</span>
                {network.isSecure ? (
                  <Lock className="w-3 h-3 text-gray-500" />
                ) : (
                  <Unlock className="w-3 h-3 text-orange-500" />
                )}
              </div>
              <div className="text-xs text-gray-500 space-y-1">
                <div>BSSID: {network.bssid}</div>
                <div>Frequency: {network.frequency} MHz</div>
              </div>
            </div>
            
            <div className="text-right">
              <div className={`text-sm font-medium ${getSignalStrengthColor(network.signalStrength)}`}>
                {network.signalStrength} dBm
              </div>
              <div className="flex space-x-1 mt-1">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-1 h-3 rounded-full ${
                      i < getSignalBars(network.signalStrength)
                        ? getSignalStrengthColor(network.signalStrength).replace('text-', 'bg-')
                        : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};