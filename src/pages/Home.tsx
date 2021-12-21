import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  FlatList,
} from "react-native";

import { Button } from "../components/Button";
import { Skillcard } from "../components/Skillcard";


interface SkillData {
  id: string;
  name: string;
}

export function Home() {
  const [newSkill, setNewSkill] = useState("");
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [greeting, setGreeting] = useState("");

  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill,
    }
    console.log("New Skill:", data);
    setMySkills((oldState: SkillData[]) => [...oldState, data]);
    setNewSkill("");
  }

  function handleRemoveSkill(id: string) {
    setMySkills(oldState => oldState.filter(skill => skill.id !== id));
  }

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGreeting("Good Morning");
    } else if (currentHour < 18) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome, Arthur!</Text>

        <Text style={styles.greeting}>{greeting}</Text>

        <TextInput
          style={styles.input}
          placeholder="New Skill"
          placeholderTextColor="#555"
          onChangeText={setNewSkill}
          value={newSkill}
        />
        <Button onPress={handleAddNewSkill} ButtonText="Add" />

        <Text style={[styles.title, { marginTop: 50 }]}>My Skills</Text>

        <FlatList
          style={styles.ListView}
          data={mySkills}
          keyExtractor={(item) => item.id}
          renderItem={
            ({ item }) =>
              <Skillcard skill={item.name}
                onPress={() => handleRemoveSkill(item.id)}
              />
          }
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121015",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#1F1E25",
    color: "#fff",
    marginTop: 30,
    fontSize: 18,
    padding: Platform.OS === "ios" ? 20 : 10,
    borderRadius: 8,
  },
  ListView: {
    marginTop: 20,
    flex: 1,
    height: "100%",
  },
  greeting: {
    color: "#fff",
    fontSize: 18,
  },
});
