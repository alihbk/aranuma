export interface MqttResponse {
  Status: number;
  StatusColor: string;
  BloodOxygen: string;
  BloodOxygenColor: string;
  Temperature: string;
  TemperatureColor: string;
  Heartbeat: string;
  HeartbeatColor: string;
  SYSDIA: string;
  SYSDIAColor: string;
  BatteryLevel: string;
  SignalLevel: string;
  LatLong: [number, number];
}

export interface MqttMessage {
  topic: string;
  payload: string;
}

export interface MqttClientProps {
  brokerUrl: string;
  topic: string;
  onMessage: (message: MqttMessage) => void;
}

export interface LoginResponse {
  accessToken: string;
  accessTokenExpireDate: Date;
  refreshTokenId: string;
}
export interface UserResponse {
  name: string;
  lastName: string;
  date: Date;
  nationalCode: string;
  personelCode: string;
  role: string;
  mobileNum: string;
  watchId: string;
}
