import { fonts } from "@/styles/fonts";
import { useState } from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";

const { width, height } = Dimensions.get("window");

const onboardingData = [
  {
    id: 1,
    title: "connect",
    subtitle: "across the world",
    description: "join reading circles with both friends and strangers.",
  },
  {
    id: 2,
    title: "discover",
    subtitle: "meaningful stories",
    description:
      "find books that truly resonate with you and expand your horizons.",
  },
  {
    id: 3,
    // title: "I connect you with",
    subtitle: "fellow readers.",
    // description:
    //   "Join conversations and share insights with a thoughtful community.",
  },
];

export default function Index() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevScreen = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const nextScreen = () => {
    if (currentIndex < onboardingData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const currentScreen = onboardingData[currentIndex];

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#FFFDF6",
        paddingHorizontal: 40,
        paddingTop: 80,
        paddingBottom: 60,
      }}
    >
      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 120,
        }}
      >
        <View>
          <Text
            style={[
              fonts.bold,
              {
                fontSize: 23,
                color: "#2A2A2A",
                marginBottom: 4,
              },
            ]}
          >
            blurbs
          </Text>
        </View>

        <TouchableOpacity onPress={prevScreen} style={{ alignItems: "center" }}>
          <Text
            style={[
              fonts.text,
              {
                fontSize: 16,
                color: "#888888",
              },
            ]}
          >
            previous
          </Text>

          <View
            style={{
              width: 30,
              height: 1,
              backgroundColor: "#2A2A2A",
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={nextScreen} style={{ alignItems: "center" }}>
          <Text
            style={[
              fonts.text,
              {
                fontSize: 16,
                color: "#888888",
              },
            ]}
          >
            next
          </Text>
          <View
            style={{
              width: 30,
              height: 1,
              backgroundColor: "#2A2A2A",
            }}
          />
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            alignItems: "center",
            marginBottom: 80,
          }}
        >
          <Text
            style={[
              fonts.bold,
              {
                fontSize: 50,
                color: "#2A2A2A",
                textAlign: "center",
                lineHeight: 44,
              },
            ]}
          >
            {currentScreen.title}
          </Text>

          <Text
            style={[
              fonts.italic,
              {
                fontSize: 30,
                color: "#2A2A2A",
                textAlign: "center",
                lineHeight: 44,
                fontStyle: "italic",
                marginBottom: 30,
              },
            ]}
          >
            {currentScreen.subtitle}
          </Text>

          <View
            style={{
              height: 1,
              backgroundColor: "#B6B09F",
              alignSelf: "stretch",
              marginBottom: 30,
            }}
          />

          <Text
            style={[
              fonts.text,
              {
                fontSize: 18,
                color: "#666666",
                textAlign: "center",
                lineHeight: 26,
                maxWidth: 300,
              },
            ]}
          >
            {currentScreen.description}
          </Text>
        </View>
      </View>

      {/* Bottom Navigation */}
      <View
        style={{
          alignItems: "center",
        }}
      >
        {/* Progress Dots */}
        <View
          style={{
            flexDirection: "row",
            marginBottom: 60,
          }}
        >
          {onboardingData.map((_, index) => (
            <View
              key={index}
              style={{
                width: 6,
                height: 6,
                borderRadius: 3,
                backgroundColor: index === currentIndex ? "#2A2A2A" : "#E0E0E0",
                marginHorizontal: 6,
              }}
            />
          ))}
        </View>

        {/* Continue Button */}
        {/* <TouchableOpacity
          onPress={nextScreen}
          style={{
            alignItems: "center",
          }}
        >
          <Text
            style={[
              fonts.text,
              {
                fontSize: 20,
                color: "#2A2A2A",
                marginBottom: 5,
              },
            ]}
          >
            {currentIndex === onboardingData.length - 1
              ? "begin reading!"
              : "continue"}
          </Text>


        </TouchableOpacity> */}
      </View>
    </View>
  );
}
