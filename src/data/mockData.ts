export const mockData = {
  wifi: {
    enabled: true,
    scanDelay: 3000,
    networks: [
      {
        ssid: "HomeNetwork_5G",
        bssid: "aa:bb:cc:dd:ee:ff",
        signalStrength: -45,
        frequency: 5180,
        capabilities: "WPA2-PSK",
        isSecure: true
      },
      {
        ssid: "CoffeeShop_WiFi",
        bssid: "11:22:33:44:55:66",
        signalStrength: -62,
        frequency: 2437,
        capabilities: "OPEN",
        isSecure: false
      },
      {
        ssid: "Neighbor_Network",
        bssid: "77:88:99:aa:bb:cc",
        signalStrength: -78,
        frequency: 2412,
        capabilities: "WPA2-PSK",
        isSecure: true
      },
      {
        ssid: "Office_Guest",
        bssid: "dd:ee:ff:00:11:22",
        signalStrength: -55,
        frequency: 5240,
        capabilities: "WPA3-PSK",
        isSecure: true
      },
      {
        ssid: "Mobile_Hotspot",
        bssid: "33:44:55:66:77:88",
        signalStrength: -71,
        frequency: 2462,
        capabilities: "WPA2-PSK",
        isSecure: true
      }
    ]
  },
  cell: {
    enabled: true,
    scanDelay: 5000,
    towers: [
      {
        cellId: 12345,
        lac: 1001,
        mcc: 310,
        mnc: 260,
        signalStrength: -75,
        type: "LTE",
        registered: true
      },
      {
        cellId: 23456,
        lac: 1002,
        mcc: 310,
        mnc: 260,
        signalStrength: -89,
        type: "GSM",
        registered: false
      },
      {
        cellId: 34567,
        lac: 1001,
        mcc: 310,
        mnc: 260,
        signalStrength: -82,
        type: "WCDMA",
        registered: false
      },
      {
        cellId: 45678,
        lac: 1003,
        mcc: 310,
        mnc: 260,
        signalStrength: -68,
        type: "LTE",
        registered: false
      }
    ]
  },
  gps: {
    enabled: true,
    minTimeUpdate: 7000,
    minDistanceUpdate: 10,
    latitude: 37.7749,
    longitude: -122.4194,
    accuracy: 8.5,
    altitude: 52,
    speed: 0,
    bearing: 142,
    lastUpdate: new Date().toLocaleTimeString()
  }
};