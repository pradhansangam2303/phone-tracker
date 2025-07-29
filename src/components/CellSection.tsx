import React from 'react';
import { Radio, Tower } from 'lucide-react';

interface CellTower {
  cellId: number;
  lac: number;
  mcc: number;
  mnc: number;
  signalStrength: number;
  type: string;
  registered: boolean;
}

interface CellSectionProps {
  data: {
    enabled: boolean;
    scanDelay: number;
    towers: CellTower[];
  };
  isTracking: boolean;
}

export const CellSection: React.FC<CellSectionProps> = ({ data, isTracking }) => {
  const getSignalStrengthColor = (strength: number) => {
    if (strength > -70) return 'text-green-500';
    if (strength > -90) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getCellTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'lte': return 'bg-green-100 text-green-800';
      case 'gsm': return 'bg-blue-100 text-blue-800';
      case 'wcdma': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center w-10 h-10 bg-purple-100 rounded-lg">
            <Radio className="w-5 h-5 text-purple-600" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Cell Towers</h2>
            <p className="text-sm text-gray-500">
              Scanning every {data.scanDelay}ms
              {isTracking && <span className="ml-2 inline-block w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>}
            </p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-purple-600">{data.towers.length}</div>
          <div className="text-xs text-gray-500">Towers Detected</div>
        </div>
      </div>

      <div className="space-y-3 max-h-96 overflow-y-auto">
        {data.towers.map((tower, index) => (
          <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <Tower className="w-4 h-4 text-gray-600" />
                <span className="font-medium text-gray-900">Cell ID: {tower.cellId}</span>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${getCellTypeColor(tower.type)}`}>
                  {tower.type}
                </span>
                {tower.registered && (
                  <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                    Registered
                  </span>
                )}
              </div>
              <div className="text-xs text-gray-500 grid grid-cols-2 gap-2">
                <div>LAC: {tower.lac}</div>
                <div>MCC: {tower.mcc}</div>
                <div>MNC: {tower.mnc}</div>
              </div>
            </div>
            
            <div className="text-right">
              <div className={`text-sm font-medium ${getSignalStrengthColor(tower.signalStrength)}`}>
                {tower.signalStrength} dBm
              </div>
              <div className="text-xs text-gray-500 mt-1">Signal</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};