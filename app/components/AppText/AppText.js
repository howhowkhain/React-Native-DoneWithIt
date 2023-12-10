import React from "react";
import { Text } from "react-native";

import defaultStyles from "../../config/styles";

function AppText({ children, numberOfLines, style }) {
  return (
    <Text style={[style, defaultStyles.text]} numberOfLines={numberOfLines}>
      {children}
    </Text>
  );
}

export default AppText;
