import { Metadata } from "next"
import { metadata as layoutMetadata } from "./layout-metadata"

export function generateMetadata(): Metadata {
  return {
    ...layoutMetadata,
    title: {
      default: layoutMetadata.title as string,
      template: `%s | Meta Works`
    }
  }
}
