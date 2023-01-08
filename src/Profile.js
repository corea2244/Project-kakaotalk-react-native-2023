import React from "react";
import { Image, Text, View } from "react-native";

export default ({ uri, name, introduction, isMe }) => {
  const size = isMe ? 55 : 40;
  return (
    <View style={{ flexDirection: "row" }}>
      <Image
        source={{ uri: uri }}
        style={{ width: size, height: size, borderRadius: size * 0.4 }}
      />
      <View style={{ justifyContent: "center", marginLeft: 10 }}>
        <Text
          style={{
            fontWeight: isMe ? "bold" : undefined,
            fontSize: isMe ? 16 : 15,
          }}
        >
          {name}
        </Text>
        {!!introduction && (
          <View>
            <View style={{ height: isMe ? 6 : 2 }} />
            <Text style={{ fontSize: isMe ? 12 : 11, color: "grey" }}>
              {introduction}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};
