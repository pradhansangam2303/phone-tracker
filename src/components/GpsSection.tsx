import React from 'react';
import { MapPin, Navigation, Clock } from 'lucide-react';

interface GpsSectionProps {
  data: {
    enabled: boolean;
    minTimeUpdate: number;
    minDistanceUpdate: number;
    latitude: number;
    longitude: number;
    accuracy: number;
    altitude: number;
    speed: number;
    bearing: number;
    lastUpdate: string;
  };
  isTracking: boolean;
}

export const GpsSection: React.FC<GpsSectionProps> = ({ data, isTracking }) => {
  const getAccuracyColor = (accuracy: number) => {
    if (accuracy < 5) return 'text-green-500';
    if (accuracy < 15) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getAccuracyLabel = (accuracy: number) => {
    if (accuracy < 5) return 'Excellent';
    if (accuracy < 15) return 'Good';
    return 'Fair';
  };

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-lg">
            <MapPin className="w-5 h-5 text-green-600" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900">GPS Location</h2>
            <p className="text-sm text-gray-500">
              Updates: {data.minTimeUpdate}ms / {data.minDistanceUpdate}m
              {isTracking && <span className="ml-2 inline-block w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>}
            </p>
          </div>
        </div>
        <div className="text-right">
          <div className={`text-lg font-bold ${getAccuracyColor(data.accuracy)}`}>
            {getAccuracyLabel(data.accuracy)}
          </div>
          <div className="text-xs text-gray-500">±{data.accuracy}m</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Location Info */}
        <div className="space-y-4">
          <div className="metric-card">
            <div className="flex items-center space-x-2 mb-2">
              <Navigation className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">Coordinates</span>
            </div>
            <div className="space-y-1">
              <div className="text-sm">
                <span className="text-gray-500">Lat:</span>
                <span className="ml-2 font-mono text-gray-900">{data.latitude.toFixed(6)}</span>
              </div>
              <div className="text-sm">
                <span className="text-gray-500">Lng:</span>
                <span className="ml-2 font-mono text-gray-900">{data.longitude.toFixed(6)}</span>
              </div>
            </div>
          </div>

          <div className="metric-card">
            <div className="flex items-center space-x-2 mb-2">
              <Clock className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium text-gray-700">Last Update</span>
            </div>
            <div className="text-sm text-gray-900">{data.lastUpdate}</div>
          </div>
        </div>

        {/* Movement Info */}
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="metric-card">
              <div className="text-xs text-gray-500 mb-1">Altitude</div>
              <div className="text-lg font-bold text-gray-900">{data.altitude}m</div>
            </div>
            
            <div className="metric-card">
              <div className="text-xs text-gray-500 mb-1">Speed</div>
              <div className="text-lg font-bold text-gray-900">{data.speed} km/h</div>
            </div>
          </div>

          <div className="metric-card">
            <div className="text-xs text-gray-500 mb-1">Bearing</div>
            <div className="flex items-center space-x-2">
              <div className="text-lg font-bold text-gray-900">{data.bearing}°</div>
              <div className="w-8 h-8 border-2 border-gray-300 rounded-full relative">
                <div 
                  className="absolute top-0 left-1/2 w-0.5 h-3 bg-red-500 origin-bottom transform -translate-x-0.5"
                  style={{ transform: `translateX(-50%) rotate(${data.bearing}deg)` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};