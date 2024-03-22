import React, { useState, useEffect, useRef } from "react";
import mqtt from "mqtt";
import { MqttClientProps } from "../../utils/interface";

const MqttClient: React.FC<MqttClientProps> = ({
  brokerUrl,
  topic,
  onMessage,
}) => {
  const [isConnected, setIsConnected] = useState(false);
  const clientRef = useRef<any | null>(null);

  useEffect(() => {
    const connect = async () => {
      try {
        clientRef.current = mqtt.connect(brokerUrl);
        clientRef.current.on("connect", () => {
          setIsConnected(true);
          console.log("متصل شد");
        });
        clientRef.current.on("error", (error: any) => {
          console.error("MQTT خطا:", error);
        });
        clientRef.current.subscribe(
          topic,
          (error: Error | undefined, message: any) => {
            if (error) {
              console.error(" خطا:", error);
            } else {
              onMessage({
                topic: message.topic,
                payload: message.payload.toString(),
              });
            }
          }
        );
      } catch (error) {
        console.error("خطای اتصال", error);
      }
    };

    if (!isConnected) {
      connect();
    }

    return () => {
      if (clientRef.current) {
        clientRef.current.end();
      }
    };
  }, [isConnected, brokerUrl, topic, onMessage]);

  return <div>{isConnected ? <p>متصل شد</p> : <p>در حال اتصال...</p>}</div>;
};

export default MqttClient;
