import { View, FlatList } from "react-native"
import React from "react"
import posts from "@/assets/data/posts.json"
import PostListItem from "../components/PostListItem"

export default function FeedScreen() {
  return (
    <FlatList
      data={posts}
      contentContainerClassName=" gap-10"
      renderItem={({ item }) => <PostListItem post={item} />}
      showsVerticalScrollIndicator={false}
    />
  )
}
