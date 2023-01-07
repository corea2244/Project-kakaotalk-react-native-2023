import React from "react";
import { Image, Text, View } from "react-native";

export default (props) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <Image
        source={{ uri: props.uri }}
        style={{ width: 50, height: 50, borderRadius: 20 }}
      />
      <View style={{ justifyContent: "center", marginLeft: 10 }}>
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>{props.name}</Text>
        <View style={{ height: 6 }} />
        <Text style={{ fontSize: 12, color: "grey" }}>
          {props.introduction}
        </Text>
      </View>
    </View>
  );
};
