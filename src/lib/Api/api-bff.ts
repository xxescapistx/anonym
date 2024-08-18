import { type posts } from "@prisma/client";

export type Post = {
    u: string
    m: string
}

export class API {
    private static instance: API;
  
    // Step 2: Make the constructor private to prevent instantiation from outside
    private constructor() {
    }
  
    // Step 3: Provide a public static method to get the instance
    public static getInstance(): API {
      // If the instance doesn't exist, create it
      if (!API.instance) {
        API.instance = new API();
      }
      // Return the instance
      return API.instance;
    }

    async getPosts() {
        const posts = await fetch("/api/posts/");
        return posts
    }

    async createPost(post: Post){
        await fetch('/api/posts/create', {method: 'POST', body: JSON.stringify(post)})
    }
  

  }