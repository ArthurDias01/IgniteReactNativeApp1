import React from "react";
import { TouchableOpacity, TouchableOpacityProps, Text, StyleSheet } from "react-native";

interface SkillcardProps extends TouchableOpacityProps {
  skill: string;
}


export const Skillcard = ({ skill, ...rest }: SkillcardProps) => {
  return (
    <TouchableOpacity
      style={styles.buttonSkill}
      {...rest}
      key={skill}>
      <Text style={styles.textskill}>{skill}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: "#1F1E25",
    padding: 10,
    borderRadius: 50,
    marginTop: 10,
    alignItems: "center",
    marginVertical: 0,
  },
  textskill: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
});
