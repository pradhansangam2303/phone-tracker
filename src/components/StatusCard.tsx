import React from 'react';
import { Play, Square, Wifi, Radio, MapPin } from 'lucide-react';

interface StatusCardProps {
  isTracking: boolean;
  onToggle: () => void;
  data: any;
}

export const StatusCard: React.FC<StatusCardProps> = ({ isTracking, onToggle, data }) => {
  return (
    <div className="card">
      <div className="text-center mb-6">
        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
          isTracking 
            ? 'bg-green-100 text-green-600 animate-pulse-slow' 
            : 'bg-gray-100 text-gray-400'
        }`}>
          {isTracking ? <Play className="w-8 h-8" /> : <Square className="w-8 h-8" />}
        </div>
        
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {isTracking ? 'Tracking Active' : 'Tracking Stopped'}
        </h3>
        
        <button
          onClick={onToggle}
          className={`px-6 py-2 rounded-lg font-medium transition-colors ${
            isTracking
              ? 'bg-red-500 hover:bg-red-600 text-white'
              : 'bg-green-500 hover:bg-green-600 text-white'
          }`}
        >
          {isTracking ? 'Stop Tracking' : 'Start Tracking'}
        </button>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
          <div className="flex items-center space-x-2">
            <Wifi className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-900">WiFi Networks</span>
          </div>
          <span className="text-sm font-bold text-blue-600">{data.wifi.networks.length}</span>
        </div>

        <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
          <div className="flex items-center space-x-2">
            <Radio className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-medium text-purple-900">Cell Towers</span>
          </div>
          <span className="text-sm font-bold text-purple-600">{data.cell.towers.length}</span>
        </div>

        <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-green-600" />
            <span className="text-sm font-medium text-green-900">GPS Status</span>
          </div>
          <span className={`text-sm font-bold ${
            data.gps.accuracy < 10 ? 'text-green-600' : 'text-yellow-600'
          }`}>
            {data.gps.accuracy < 10 ? 'High' : 'Medium'}
          </span>
        </div>
      </div>
    </div>
  );
};