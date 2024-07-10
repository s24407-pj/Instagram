import React from "react"
import { View, Text, Image } from "react-native"
import { AntDesign, Ionicons, Feather } from "@expo/vector-icons"

export type Post = {
  post: {
    id: string
    user: {
      id: string
      username: string
      image_url: string
    }
    image_url: string
  }
}
export default function PostListItem({ post }: Post) {
  return (
    <View className="bg-white">
      <View className="p-3 flex-row items-center gap-2">
        <Image
          source={{ uri: post.user.image_url }}
          className="w-12 aspect-square rounded-full"
        />
        <Text className="font-semibold">{post.user.username}</Text>
      </View>
      <Image source={{ uri: post.image_url }} className="w-full aspect-[4/3]" />
      <View className="flex-row gap-3 p-3">
        <AntDesign name="hearto" size={20} />
        <Ionicons name="chatbubble-outline" size={20} />
        <Feather name="send" size={20} />
        <Feather name="bookmark" size={20} className="ml-auto" />
      </View>
    </View>
  )
}
