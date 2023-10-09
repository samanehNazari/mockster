import { PostResponse } from '@package/mock-data';

const baseUrl = 'http://localhost:3000/api/posts';

export const fetchPosts = async (): Promise<PostResponse[] | []> => {
  try {
    const response = await fetch(baseUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return await response.json();
  } catch (err) {
    return []
  }

}

